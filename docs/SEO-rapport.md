# SEO-uitvoering — Boom & Tuinwerken Mylemans

Datum: 3 oktober 2026. Werkgebied: de volledige provincie Antwerpen, door de eigenaar bevestigd in deze chat. Alle wijzigingen zijn lokaal voorbereid. Er is niets gepubliceerd en geen extern bedrijfsprofiel gewijzigd.

## Analyse en gekozen aanpak

De website is een statische HTML/CSS/JavaScript-site met een bestaand Formspree-formulier en een FTP-deploy naar Vimexx. De inhoud is zonder JavaScript beschikbaar. De bestaande stijl, kleuren, hero’s, fotogalerij en waardevolle `.html`-URL’s blijven behouden. De recent toegevoegde foto’s blijven op de fotopagina; hun oorspronkelijke bestanden staan ongewijzigd in `fotos`.

De publieke controle gaf HTTP 200 voor de homepage, de zes overige hoofdpagina’s, robots.txt en sitemap.xml. Een niet-bestaande pagina gaf 404. HTTP zonder www en `/index.html` gaven eveneens 200: twee extra versies van de homepage. Beide www-versies verwezen al met 301 naar HTTPS zonder www. Er waren geen `X-Robots-Tag`-headers op de gecontroleerde hoofdpagina’s. De gewone pagina’s hadden `index, follow`; `bedankt.html` had terecht `noindex`. Dit is een bereikbaarheidsonderzoek, geen bewijs van opname in Google.

Bronproblemen: ontbrekende H1 op de homepage, een verborgen contacttitel op mobiel, twee geneste main-elementen op Boomwerken, summiere dienstenuitleg, oude sitemapdatums, dubbele fontimports, afbeeldingen zonder afmetingen en ontbrekende cachingregels. Tuinaanleg had horizontale overloop op mobiel. JavaScript sloot het menu vanaf 768px terwijl CSS het mobiele menu tot 980px gebruikte.

De bestaande Google-verificatietag is behouden. De bestaande reviews zijn niet uitgebreid of herschreven; hun overeenstemming met het actuele Google Bedrijfsprofiel vraagt controle door de eigenaar. Er zijn geen reviewsterren of ratings aan de structured data toegevoegd. De bestaande claim “jarenlange ervaring” is vervangen door concrete uitvoeringstaal; nieuwe ervarings-, prijs- of garantieclaims zijn niet toegevoegd.

## Prioriteiten en uitvoering

| Prioriteit | Wijziging | Verwachte bijdrage | Controle |
|---|---|---|---|
| 1 | HTTPS zonder www en `/` als homepage; 301 voor expliciet `/index.html` | Eenduidige URL’s | Configuratiecontrole; daadwerkelijke redirects na publicatie testen |
| 1 | Homepage, Boomwerken, Tuinonderhoud en Tuinaanleg: duidelijkere tekst, koppen, aanpak, prijsfactoren en offertecontact | Betere aansluiting op klantvragen | Inhoud, interne links en browsercontrole |
| 1 | Werkgebiedpagina met 67 geverifieerde gemeenten | Provinciebreed werkgebied zichtbaar maken | Exacte vergelijking met de officiële lijst |
| 2 | Eigen pagina’s voor haag scheren, bomen vellen en stronkenfrezen | Specifieke zoekintenties en gerichte aanvragen | Unieke inhoud, bestaande diensten, interne links |
| 2 | Responsive WebP, afmetingen, hero-preload, caching en compressie | Minder afbeeldingsbytes en stabielere weergave | Bestandsmetingen en browsercontrole |
| 2 | Bedrijfsgegevens, LocalBusiness-subtype, Service en zichtbare breadcrumbs | Consistente bedrijfs- en paginagegevens | JSON- en broncontrole |
| 2 | Gemeenteveld, dienstkeuze, vooraf ingevulde dienst, begrijpelijke fouten | Beter omschreven aanvragen | Lokale formulierproeven met onderschepte verzending |
| 3 | Bedrijfsprofiel, lokale vermeldingen en Search Console | Verdere lokale vindbaarheid en meting | Eigenaar/accounttoegang nodig |

## Zoekintenties en lokale kansen

Dit zijn inhoudelijke zoekrichtingen; er zijn geen zoekvolumes, posities of conversiecijfers gemeten of verzonnen.

| Zoekrichting | Bestemming | Inhoudelijke aansluiting |
|---|---|---|
| Boomverzorging Vremde / Boechout / Antwerpen; bomen snoeien | `boomwerken.html` | Boomzorg, snoei, knotten, hakselen, aanpak en opleidingsattesten |
| Bomen vellen Antwerpen; boom laten verwijderen | `bomen-vellen.html` | Bereikbaarheid, omgeving, houtverwerking, vergunninginformatie en offerte |
| Stronkenfrezen Antwerpen; boomstronk verwijderen | `stronkenfrezen.html` | Diameter, doorgang, gewenste diepte en verdere afwerking |
| Haag scheren Vremde / Boechout / Antwerpen; haagsnoei | `haag-scheren.html` | Hoogte, lengte, zijden, vormsnoei en verwerking van snoeisel |
| Tuinonderhoud Vremde / Boechout; gazononderhoud Antwerpen | `tuinonderhoud.html` | Maaien, verticuteren, snoei en eenmalig of terugkerend onderhoud |
| Tuinaanleg Antwerpen; gazon aanleggen; beplanting | `tuinaanleg.html` | Grondvoorbereiding, graszoden of zaaien, aanplantingen en afsluitingen |
| Tuinwerken provincie Antwerpen; tuinbedrijf in mijn gemeente | `werkgebied.html` | Uitvalsbasis Vremde, volledige provincie en verwijzing naar relevante diensten |

Lokale concurrenten als [Keersmaekers in Boechout](https://boomkwekers.be/) verbinden diensten, projecten en offertecontact. [De Boommeester](https://www.deboommeester.be/stronken-frezen) behandelt stronkenfrezen als een afzonderlijke dienst met praktische informatie. [Tuinwerken Nys](https://www.tuinwerkennys.be/) legt in de vindbare beschrijving nadruk op Boechout en omliggende gebieden. De kansen voor Mylemans zijn specifieke diensten verduidelijken, het echte werkgebied benoemen en echte foto’s en aanwezige certificaten intern koppelen. Er is geen rangschikking van concurrenten gemeten.

## Werkgebied

De [officiële Vlaamse gemeentelijst](https://www.vlaanderen.be/gemeenten-en-provincies/overzicht-van-vlaamse-steden-en-gemeenten) is vergeleken met alle 67 namen op `werkgebied.html`. De lijst is gegroepeerd in Antwerpen en de Antwerpse rand, Mechelen/Lier en omgeving, en de Kempen. Dit zijn overzichtelijke groeperingen voor bezoekers.

Vremde staat als deelgemeente van Boechout vermeld. Borsbeek wordt als onderdeel van Antwerpen uitgelegd. Zwijndrecht behoort tot Beveren-Kruibeke-Zwijndrecht in Oost-Vlaanderen en staat niet als Antwerpse gemeente in de lijst. Puurs-Sint-Amands staat als één gemeente vermeld. De [officiële fusie-informatie](https://www.vlaanderen.be/statistiek-vlaanderen/nieuwe-nis-codes-voor-gefuseerde-gemeenten-vanaf-1-januari-2025) ondersteunt deze actualisering.

Er zijn geen aparte gemeentepagina’s gemaakt: er zijn momenteel geen bevestigde projectlocaties en voldoende unieke lokale projectbeschrijvingen beschikbaar om zulke pagina’s te onderbouwen. Een foto krijgt geen verzonnen gemeente of projectverhaal.

## Technische uitvoering

- Eén H1 en één main per pagina; leesbare, statische HTML en beschrijvende interne links.
- Unieke titles en descriptions voor indexeerbare pagina’s, absolute HTTPS-canonicals en overeenstemmende Open Graph-gegevens.
- LocalBusiness-subtype `HomeAndConstructionBusiness`, met de zichtbare naam, adres, telefoon, e-mail, btw-nummer en bevestigd werkgebied. Dienstpagina’s hebben Service-data; subpagina’s hebben BreadcrumbList en zichtbare broodkruimels. Niet-onderbouwde `priceRange` en bedrijfseigen reviewmarkup zijn weggelaten.
- Sitemap met de 12 indexeerbare canonieke URL’s. `bedankt.html` blijft buiten de sitemap. `lastmod` weerspiegelt de werkelijke lokale inhoudswijziging van 3 oktober 2026.
- Originelen blijven bewaard. WebP-versies krijgen responsive formaten, alt-tekst en afmetingen; geschikte beelden laden lazy. De CSS-hero’s krijgen een preload en de bestaande belangrijkste homepagefoto behoudt `fetchpriority="high"`.
- CSS/JavaScript-versies verversen browsercache. Dubbele Google Font-imports zijn verwijderd, connection hints toegevoegd en Apache-caching/compressie voorbereid.
- Menu is een toetsenbordbedienbare button met aria-status, sluit met Escape en gebruikt hetzelfde omslagpunt als CSS.
- Werkbestanden en rapporten zijn uitgesloten van FTP-deploy en uit publieke toegang gehouden via `.htaccess`; robots verwijst naar de sitemap en blokkeert werkroutes. Robots is hierbij geen beveiligingsmaatregel.
- Het bestaande Formspree-adres is behouden. Dienstkeuze en gemeente verbeteren de aanvraag; waarden uit de URL komen uit een vaste toegestane lijst. Validatie, statusmeldingen, reset na succes en behoud van invoer bij fouten zijn opgenomen.

## Google Bedrijfsprofiel: concreet vervolg

Het juiste Google-profiel kon vanuit de beschikbare toegang niet met zekerheid worden geïnspecteerd. De Google-reviewlink op de site is een zoeklink, geen geverifieerde profiel- of review-URL. De websitegegevens zijn onderling consistent gemaakt; een volledige vergelijking met het profiel blijft nodig.

Laat de eigenaar na inloggen naam, telefoon, website en werkgebied vergelijken met de contactpagina. Gebruik als primaire categorie de meest passende beschikbare categorie voor de hoofdactiviteit boomverzorging, en aanvullende categorieën uitsluitend voor daadwerkelijk aangeboden tuinonderhoud en tuinaanleg. Controleer de precieze categorienamen in de actuele Google-interface. Voeg de zes zichtbare hoofd- en deelactiviteiten als diensten toe met korte feitelijke beschrijvingen en zonder fictieve tarieven.

Gebruik de echte foto’s van haagsnoei, gazon en boomklimwerk; voeg alleen een plaats toe als die bekend is. Vraag echte klanten neutraal om hun ervaring te delen, zonder beloning of selectie op tevredenheid. Vergelijk de vier bestaande reviewcitaten op de homepage met hun oorspronkelijke Google-reviews voordat ze als actueel bewijs worden gebruikt. De vindbaarheid in Maps hangt volgens Google samen met relevantie, afstand en bekendheid; een provinciebreed werkgebied maakt die afstandsfactor niet ongedaan. [Google-richtlijnen lokale resultaten](https://support.google.com/business/answer/7091?hl=nl).

Als klanten niet op het bedrijfsadres ontvangen worden, moet het adres op het Bedrijfsprofiel volgens Google verborgen worden; dit vergt bevestiging van de feitelijke situatie. Google laat maximaal 20 servicegebieden toe, dus neem niet zomaar 67 gemeenten als 67 profielgebieden over. Kies passende, werkelijk bediende gebieden binnen de richtlijnen en behoud één profiel. [Google-richtlijnen servicegebieden](https://support.google.com/business/answer/9157481?hl=nl).

## Relevante vermeldingen en links

De [Boechoutse bedrijvengids](https://www.boechout.be/werken-en-ondernemen/bedrijvengids) is een concrete lokale mogelijkheid. De gemeentelijke pagina vermeldt hoe Boechoutse ondernemingen opname kunnen aanvragen. Er is geen bericht verstuurd.

[Tuinaannemer.be](https://tuinaannemer.be/over-tuinaannemer-be) is een sectorplatform van VLAM met betalende aangesloten tuinaannemers. Beoordeel zo’n profiel op relevantie en aanvragen; het is geen certificeringslabel of noodzakelijke SEO-aankoop. Er is geen lidmaatschap aangevraagd.

De bestaande projectvermeldingen bij de daadwerkelijke websitebouwers zijn bruikbare referenties: [Milan Wouters](https://milanwouters.be/projects.html) en [Raoul Buffels](https://www.raoulbuffels.be/projecten.html). Controleer of hun projectlink naar de canonieke homepage verwijst. Bijkomende kansen zijn echte leveranciers, onderaannemers en lokale samenwerkingen, alleen als de relatie bestaat. Koop geen spamlinks en claim geen niet-bestaande partnerschappen.

## Meten na een afzonderlijke publicatieopdracht

1. **Vóór publicatie:** maak in Google Search Console een nulmeting van de afgelopen 28 dagen en, indien beschikbaar, dezelfde periode vorig jaar. Noteer klikken, vertoningen, zoekopdrachten, landingspagina’s en geïndexeerde URL’s. Houd rekening met seizoen en bestaande historische gegevens. Maak geen nulcijfers als gegevens ontbreken.
2. **Bij publicatie:** controleer echte HTTP-statuscodes, TLS, redirects, Content-Type, caching en compressie op Vimexx. Test HTTP/www/non-www en `/index.html`, inclusief een URL met querystring. De lokale Python-preview voert `.htaccess` niet uit.
3. **Na publicatie:** dien de sitemap in Search Console in. Inspecteer de homepage, drie hoofddiensten, drie nieuwe diensten en de werkgebiedpagina. Controleer gekozen canonical en of Google de pagina kan ophalen. Gebruik ook [Google Rich Results Test](https://search.google.com/test/rich-results) voor gepubliceerde pagina’s. Structured data geeft geen rankinggarantie.
4. **Wekelijks, eerste vier weken:** vergelijk prestaties per dienstpagina en per zoekintentie. Bekijk of nieuwe URL’s geïndexeerd worden en welke zoektermen werkelijk vertoningen krijgen. Controleer aanvragen op dienst, gemeente en relevantie; noteer ook hoe klanten het bedrijf vonden.
5. **Na vier tot acht weken:** vergelijk periodes met een vergelijkbaar seizoen en voldoende data. Verbeter pagina’s die vertoningen krijgen maar weinig relevante klikken of aanvragen. Maak alleen een lokaal projectartikel als gemeente, uitvoering, toestemming voor foto’s en feiten bevestigd zijn.
6. **Laadsnelheid:** gebruik PageSpeed Insights en Search Console Core Web Vitals na publicatie. De grenswaarden voor een goede gebruikerservaring zijn LCP maximaal 2,5 s, INP maximaal 200 ms en CLS maximaal 0,1 op het relevante 75e percentiel. Lokale browserproeven en kleinere afbeeldingen bewijzen niet dat deze veldwaarden behaald worden. [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).

Er is geen accountkoppeling, analyticscode, geplande monitor of externe verzending toegevoegd. Voor echte zoek- en aanvraagstatistieken is toegang tot Search Console en eventueel een gekozen meetoplossing nodig. Bij het invoeren van een meetoplossing moet de concrete consent- en privacy-inrichting worden afgestemd.

## Bronnen en controlegrenzen

De uitvoering volgt onder meer de [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [canonicals](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business), [afbeeldingen](https://developers.google.com/search/docs/appearance/google-images), [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) en [Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start). De pagina over bomen vellen verwijst naar [officiële vergunninginformatie](https://www.vlaanderen.be/omgevingsvergunning/stedenbouwkundige-handelingen/bomen-vellen-en-ontbossen); gemeentelijke voorwaarden moeten voor de concrete opdracht gecontroleerd worden.

Controlescripts: `scripts/check-seo.py` controleert metadata, canonicals, JSON, links, afbeeldingen, sitemap en gemeenten. `scripts/check-browser.cjs` controleert pagina’s op vijf schermbreedten, geladen beelden, mobiele bediening en formuliergedrag. Formspree wordt tijdens die browserproeven onderschept; er wordt geen echte aanvraag verstuurd. De site heeft geen bundler of package-build: de HTML/CSS/JavaScript-bestanden zijn direct de website. De concrete eindresultaten staan in `docs/SEO-controles.md`.
