"""Validate static site metadata, structured data and local links without network access."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://tuinwerkenmylemans.be/'

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.ids = set()
        self.duplicate_ids = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if attrs.get('id') in self.ids:
            self.duplicate_ids.append(attrs['id'])
        if 'id' in attrs:
            self.ids.add(attrs['id'])

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

def run():
    errors = []
    pages = {p.name: p.read_text(encoding='utf-8') for p in ROOT.glob('*.html')}
    docs = {name: Document(text) for name, text in pages.items()}
    titles = set()
    descriptions = set()
    canonical_pages = set()
    checks = 0

    def check(condition, message):
        nonlocal checks
        checks += 1
        if not condition:
            errors.append(message)

    for name, text in pages.items():
        doc = docs[name]
        check(not doc.duplicate_ids, f'{name}: duplicate IDs {doc.duplicate_ids}')
        check(sum(tag == 'h1' for tag, _ in doc.tags) == 1, f'{name}: expected one H1')
        check(sum(tag == 'main' for tag, _ in doc.tags) == 1, f'{name}: expected one main')
        metas = {attrs.get('name'): attrs.get('content', '') for tag, attrs in doc.tags if tag == 'meta'}
        indexable = 'noindex' not in metas.get('robots', '')
        if indexable:
            title = re.search(r'<title>(.*?)</title>', text, re.S).group(1)
            description = metas.get('description', '')
            check(title not in titles, f'{name}: duplicate title')
            check(bool(description) and description not in descriptions, f'{name}: missing/duplicate description')
            titles.add(title)
            descriptions.add(description)
            expected = BASE if name == 'index.html' else BASE + name
            canonicals = [attrs.get('href') for tag, attrs in doc.tags if tag == 'link' and attrs.get('rel') == 'canonical']
            check(canonicals == [expected], f'{name}: canonical {canonicals} != {expected}')
            canonical_pages.add(expected)
            ld_json = re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S)
            check(len(ld_json) == 1, f'{name}: expected one structured-data graph')
            for raw in ld_json:
                try:
                    data = json.loads(raw)
                    graph = data['@graph']
                    business = next(node for node in graph if node.get('@type') == 'HomeAndConstructionBusiness')
                    check(business['telephone'] == '+32474192092', f'{name}: wrong business phone')
                    check(business['address']['postalCode'] == '2531', f'{name}: wrong postcode')
                    check(business['areaServed']['name'] == 'Provincie Antwerpen', f'{name}: wrong work area')
                    check(not any('aggregateRating' in node or node.get('@type') == 'Review' for node in graph), f'{name}: unsupported review markup')
                    if name != 'index.html':
                        crumbs = next(node for node in graph if node.get('@type') == 'BreadcrumbList')['itemListElement']
                        check([c['position'] for c in crumbs] == list(range(1, len(crumbs)+1)), f'{name}: invalid breadcrumb positions')
                        check(crumbs[-1]['item'] == expected, f'{name}: wrong breadcrumb target')
                        check(any(tag == 'nav' and attrs.get('class') == 'breadcrumb' for tag, attrs in doc.tags), f'{name}: invisible breadcrumbs')
                except (ValueError, KeyError, StopIteration) as error:
                    errors.append(f'{name}: invalid structured data {error}')

        for tag, attrs in doc.tags:
            if tag == 'img':
                check('alt' in attrs, f'{name}: image missing alt')
                check('width' in attrs and 'height' in attrs, f'{name}: image missing dimensions')
            urls = []
            if tag in ['a', 'link'] and 'href' in attrs:
                urls.append(attrs['href'])
            if tag in ['img', 'script'] and 'src' in attrs:
                urls.append(attrs['src'])
            if 'srcset' in attrs:
                urls.extend(part.strip().split()[0] for part in attrs['srcset'].split(','))
            for url in urls:
                parsed = urlsplit(url)
                if parsed.scheme or parsed.netloc:
                    continue
                target = unquote(parsed.path).lstrip('/') or ('index.html' if parsed.path == '/' else name)
                check((ROOT/target).is_file(), f'{name}: missing target {url}')
                if parsed.fragment and target.endswith('.html') and target in docs:
                    check(parsed.fragment in docs[target].ids, f'{name}: missing anchor {url}')

    sitemap = ET.parse(ROOT/'sitemap.xml')
    urls = [node.text for node in sitemap.findall('.//{*}loc')]
    check(len(urls) == len(set(urls)), 'Duplicate sitemap URLs')
    check(set(urls) == canonical_pages, 'Sitemap does not match indexable canonical pages')
    check(BASE+'bedankt.html' not in urls, 'Thank-you page is indexed in sitemap')
    check('Sitemap: '+BASE+'sitemap.xml' in (ROOT/'robots.txt').read_text(), 'Missing robots sitemap reference')
    for css in (ROOT/'css').glob('*.css'):
        text = css.read_text(encoding='utf-8')
        for url in re.findall(r'url\([\'"]?([^\)\'"]+)[\'"]?\)', text):
            if not urlsplit(url).scheme and not url.startswith('data:'):
                check((css.parent/unquote(url)).is_file(), f'{css.name}: missing image {url}')
    official = json.loads((ROOT/'docs/municipalities-antwerpen.json').read_text(encoding='utf-8'))
    lists = re.findall(r'<ul class="municipality-list">(.*?)</ul>', pages['werkgebied.html'], re.S)
    names = [name for group in lists for name in re.findall(r'<li>([^<]+)</li>', group)]
    check(len(names) == len(set(names)) == 67, 'Municipality count/duplicates incorrect')
    check(set(names) == set(official['municipalities']), 'Municipalities differ from verified official list')
    check(not {'Borsbeek','Vremde','Zwijndrecht','Beveren-Kruibeke-Zwijndrecht'} & set(names), 'District/part municipality listed as independent Antwerp municipality')
    output = {'pages':len(pages),'sitemap_urls':len(urls),'checks':checks,'municipalities':len(names),'errors':errors}
    print(json.dumps(output,ensure_ascii=False,indent=2))
    return bool(errors)

if __name__ == '__main__':
    sys.exit(run())
