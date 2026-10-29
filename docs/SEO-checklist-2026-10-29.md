# SEO-checklist — 29 oktober 2026

De onderstaande websitewijzigingen zijn lokaal uitgevoerd in deze checkout. Er is tijdens deze opdracht niets gepubliceerd of naar Google verstuurd. De eerdere fotoaanpassingen zijn behouden. De publieke website en de lokale versie zijn afzonderlijk gemeten.

| Punt | Status | Uitvoering / vervolg |
|---|---|---|
| 1. Google Search Console | Open: accounttoegang nodig | Homepage, hoofddiensten, contact, fotogalerij, bomen vellen en stronkenfrezen geven publiek HTTP 200, hebben een eigen canonical en laten indexering toe. Robots.txt en sitemap.xml geven HTTP 200. Dit bevestigt geen Google-indexering. Sitemapindiening en URL-inspectie zijn niet uitgevoerd. |
| 2. H1-koppen | Gereed in de bronbestanden | Homepage: “Boomverzorging in Vremde en Antwerpen”. Ook Boomverzorging, Tuinonderhoud en Tuinaanleg kregen een lokale kop. Tuinonderhoud had al een H1, ook op de publieke versie; die ontbrak dus niet. Alle 13 pagina’s hebben exact één H1 en één main. |
| 3. Metabeschrijvingen | Gereed in de bronbestanden | De zes belangrijkste pagina’s kregen aangescherpte, unieke beschrijvingen van 141–155 tekens. Overeenkomende Open Graph-, Twitter- waar aanwezig, en WebPage-gegevens zijn bijgewerkt. Alle 12 indexeerbare pagina’s hebben een unieke beschrijving. |
| 4. Google Bedrijfsprofiel | Open: toegang nodig | Geen betrouwbare profielcontrole of profielwijziging mogelijk. Diensten, gegevens, fotoselectie en een neutrale reviewvraag zijn hieronder voorbereid. Er zijn geen foto’s geüpload, reviews geschreven of klanten benaderd. |
| 5. Alt-teksten | Gereed in de bronbestanden | Algemene homepagebeschrijvingen zijn vervangen door zichtbare onderwerpen: boomverzorger met klimuitrusting, gazonmaaier tussen hagen en beplanting, en de tuin met gazon en bloeiende boom. De galerij gebruikt dezelfde concrete beschrijving van de maaier. Geen actieve foto heeft nog een genummerde alt-tekst zoals “Tuinbeeld 1”. |
| 6. Projectbijschriften | Gedeeltelijk gereed | Vier bestaande galerijfoto’s benoemen nu de uitgevoerde dienst en zichtbare werkzaamheden: vellen naast een woning, een boomstam verzagen, hagen in bolvorm scheren en grond frezen. De echte gemeenten zijn aan de eigenaar gevraagd en nog niet bevestigd; er zijn geen plaatsen toegevoegd. |
| 7. Interne links | Gereed in de bronbestanden | De boomverzorgingssectie van de fotogalerij verwijst nu direct naar bomen-vellen.html en stronkenfrezen.html. Relevante bijschriften linken naar bomen vellen, haagsnoei en tuinaanleg. |
| 8. LocalBusiness | Gecontroleerd; al aanwezig | De JSON-LD gebruikt al HomeAndConstructionBusiness, een LocalBusiness-subtype. Naam, telefoon, e-mail, btw-nummer, adres en werkgebied stemmen onderling overeen op alle 12 indexeerbare pagina’s. Service- en breadcrumbgegevens blijven aanwezig. Er is geen tweede bedrijfsentiteit toegevoegd. |
| 9. Mobiele laadsnelheid | Gemeten en gericht verbeterd | De PageSpeed-API gaf HTTP 429. Daarom is Lighthouse gebruikt: eerst publiek, vervolgens de actuele lokale versie vóór en na de optimalisatie onder dezelfde mobiele testinstellingen. Alleen gemeten knelpunten op de homepage zijn aangepakt: afbeeldingsformaten, mobiel hoofdbeeld en de blokkerende iconenstylesheet. Zie metingen hieronder. |

## Bereikbaarheid en sitemap

Op 29 oktober 2026 geven homepage, boomwerken.html, tuinonderhoud.html, tuinaanleg.html, contact.html, fotos.html, bomen-vellen.html, stronkenfrezen.html, robots.txt en sitemap.xml HTTP 200. HTTP, www en /index.html komen uit op de canonieke HTTPS-homepage. Een niet-bestaande URL geeft HTTP 404.

De sitemap bevat 12 unieke indexeerbare URL’s. Alleen de zes inhoudelijk gewijzigde pagina’s kregen lokaal lastmod 2026-10-29. De bestaande Google-verificatietag is behouden. Na publicatie moet een bevoegde gebruiker in Search Console bij de exacte property https://tuinwerkenmylemans.be/ of de domeinproperty controleren of sitemap.xml al is ingediend. Inspecteer vervolgens homepage, hoofddiensten en contactpagina; noteer indexstatus en door Google gekozen canonical.

[Google: URL-inspectie](https://support.google.com/webmasters/answer/9012289?hl=nl) en [sitemaps indienen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Metingen mobiele homepage

Lighthouse 13.6.0, mobiele emulatie en gesimuleerde throttling, nieuwe headless Edge-testprocessen. Lokale URL: http://127.0.0.1:8018/. De lokale Python-preview past de Apache-compressie en caching van Vimexx niet toe. Publieke en lokale scores zijn daarom geen onderling gecontroleerde voor/nameting. De twee lokale tests gebruiken dezelfde testomgeving.

| Meting | Publiek, ongewijzigd | Lokaal vóór | Lokaal na |
|---|---:|---:|---:|
| Prestatiescore | 79/100 | 74/100 | 83/100 |
| First Contentful Paint | 1.9 s | 2.0 s | 1.6 s |
| Largest Contentful Paint | 5.3 s | 7.7 s | 4.7 s |
| Total Blocking Time | 0 ms | 0 ms | 0 ms |
| Cumulative Layout Shift | 0.019 | 0.016 | 0.016 |

De lokaal geladen bestanden daalden van 2,964,761 naar 1,571,696 bytes, ongeveer 47% minder. De mobiele hero gaat van 461.096 bytes naar 206.560 bytes. De kaarten laden passende liggende webversies; de oorspronkelijke beelden en de portretfoto’s op de dienstenpagina’s blijven behouden. De iconenstylesheet blokkeert op de homepage het eerste renderen niet meer en heeft een noscript-fallback. De resterende LCP van 4,7 seconden vraagt verdere beoordeling na publicatie; er wordt geen geslaagde Core Web Vitals-veldtest geclaimd.

Volledige HTML- en JSON-rapporten: tmp/lighthouse-live-mobile-20261029.report.*, tmp/lighthouse-local-before-20261029.report.* en tmp/lighthouse-local-after-20261029.report.*. Deze werkbestanden zijn uitgesloten van deployment. De mobiele screenshot uit het testrapport en de drie nieuwe kaartafbeeldingen zijn visueel bekeken.

## Google Bedrijfsprofiel: voorbereid voor uitvoering na toegang

Vergelijk met de bestaande openbare websitegegevens:

- Bedrijfsnaam: Boom & Tuinwerken Mylemans.
- Telefoon: +32 474 19 20 92.
- E-mail: tuinwerken.mylemans@gmail.com.
- Website: https://tuinwerkenmylemans.be/.
- Vestigingsadres op de website: Wommelgemsesteenweg 29, 2531 Vremde.
- Werkgebied: provincie Antwerpen, met Vremde als uitvalsbasis. Kies passende werkelijk bediende gebieden binnen de mogelijkheden van het profiel; de websitegemeentelijst hoeft niet letterlijk overgenomen te worden.
- Diensten om met het bestaande profiel te vergelijken: boomverzorging en snoeien, bomen vellen, stronkenfrezen, hagen scheren en vormsnoei, tuinonderhoud, tuinaanleg en afsluitingen. Kies een passende primaire categorie uit de werkelijk beschikbare Google-categorieën.

Fotoselectie uit echte aangeleverde beelden: fotos/IMG_3059.jpeg (ronde hagen), fotos/IMG_3270.jpeg (grondwerken met minigraver en wiellader), fotos/IMG_3277.jpeg (betonnen afsluiting), fotos/IMG_3729.jpeg (boomklimwerk). De locatie bij elk project blijft weg tot die bevestigd is.

Voorbeeldtekst voor een echte klant, nog niet verstuurd:

> Bedankt voor je vertrouwen in Boom & Tuinwerken Mylemans. Wil je jouw ervaring delen in een eerlijke Google-review? Dat kan via onze Google-reviewlink. Alvast bedankt voor je feedback!

Vervang “onze Google-reviewlink” door de officiële reviewlink uit het juiste Bedrijfsprofiel. Een dergelijke directe link is nog niet geverifieerd. Er zijn geen reviews verzameld of namens klanten opgesteld. [Google: authentieke reviews vragen](https://support.google.com/business/answer/3474122?hl=nl).

## Controles en open gegevens

- scripts/check-seo.py: 990 controles, geen fouten; 13 pagina’s en 12 sitemap-URL’s.
- Extra broncontrole: beschrijvingen in HTML en JSON-LD gelijk; bedrijfsgegevens consistent; geen algemene genummerde alt-teksten; nieuwe afbeeldingsafmetingen kloppen en bestanden decoderen.
- Zeven JavaScript-bronnen, inclusief inline scripts, parseerden zonder syntaxisfouten.
- git diff --check geslaagd.
- Geen volledige nieuwe interactieve menu- of formuliertest: de browsercontrole werd gestopt omdat de huidige Chrome-URL niet betrouwbaar vastgesteld kon worden. Er zijn geen verdere acties in die gebruikersbrowser uitgevoerd.
- Search Console en Bedrijfsprofiel blijven open wegens ontbrekende gekoppelde accounttoegang en de browserblokkade. Windsor.ai is als mogelijke accountkoppeling voorgesteld, maar is niet geïnstalleerd of verbonden.
- Gemeenten per project blijven open tot de eigenaar ze bevestigt.

De wijzigingen volgen de [Google-richtlijnen voor afbeeldingen](https://developers.google.com/search/docs/appearance/google-images) en [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business).


## Tweede optimalisatieronde — 29 oktober 2026

De volgende resultaten vervangen de eindstand van de eerste ronde hierboven. Deze aanvullingen zijn eveneens lokaal voorbereid, zonder publicatie.

### Wijzigingen

- Homepagefoto’s krijgen AVIF-bronnen in picture-elementen, met de bestaande WebP-beelden als fallback. De mobiele achtergrond gebruikt een passende portretuitsnede; op desktop blijft de volledige achtergrond beschikbaar. Originele projectfoto’s blijven behouden.
- De foto naast de introductie is op mobiel verborgen en laadt daar nu een transparant bestandje in plaats van de volledige foto. De fotokaarten behouden op elk scherm hun verhouding van 3:2, zodat kraan en wiellader samen zichtbaar blijven.
- Poppins wordt op de homepage lokaal geladen, inclusief de bestaande lettergewichten en de licentie. De twee belangrijkste gewichten krijgen een preload. De homepage vraagt geen Google Fonts-stylesheet meer op.
- Negentien iconen gebruiken dezelfde Font Awesome-vormen als inline SVG. De grote externe iconenstylesheet en icoonfonts vervallen op de homepage. De bestaande licentietekst is bewaard in licenses/font-awesome-free-6.5.0.txt.
- De hoofdinhoud verschijnt meteen; de animaties op de hoofdtekst, fotokaarten en knoppen veroorzaken geen wachttijd of voortdurend schilderwerk meer.
- Slecht contrast in de offerteknop, het groene tekstvak, reviewbron, Google-reviewknop en footer is gecorrigeerd.
- Dubbele handlers voor de cookieknoppen en terug-naar-bovenknop zijn verwijderd uit de homepage; javascript/common.js verzorgt deze functies eenmaal.
- De homepage heeft een kortere titel met dienst, Vremde en bedrijfsnaam. HTML-, Open Graph-, Twitter- en WebPage-titels stemmen overeen.
- Apache kreeg MIME- en cachingregels voor AVIF en WOFF2. Deze serverregels vragen controle na publicatie; de Python-preview voert .htaccess niet uit.
- scripts/optimize-home-images.py kan de afgeleide homepagebeelden opnieuw uit de bronfoto’s opbouwen met Pillow.

### Nieuwe eindmeting

| Mobiele Lighthouse-test | Na eerste ronde | Na tweede ronde |
|---|---:|---:|
| Prestaties | 83/100 | 88/100 |
| First Contentful Paint | 1.6 s | 1.2 s |
| Largest Contentful Paint | 4.7 s | 3.8 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0.016 | 0.001 |
| Geladen gegevens | 1,571,696 bytes | 861,359 bytes |

De tweede ronde laadt ongeveer 45% minder gegevens dan de eerste eindversie. De technische SEO-, toegankelijkheids- en best-practicescontroles scoren alle drie 100/100. De LCP van 3,8 seconden blijft boven de streefwaarde van 2,5 seconden; het werkelijke resultaat op Vimexx en bij bezoekers is pas na publicatie te bepalen.

Het volledige gecontroleerde rapport staat in tmp/lighthouse-local-verified-mobile-20261029.report.html en .json. Een eerdere herhaling meldde tijdelijk een geweigerde lokale verbinding voor één lettertype. Het bestand is vervolgens vijfmaal succesvol opgehaald en de volledige controle is zonder die fout herhaald. Kleine scoreverschillen tussen metingen blijven mogelijk.

### Verificatie en toegang

- scripts/check-seo.py: 1.021 controles geslaagd, geen fouten.
- Zes JavaScript-bronnen parseerden zonder fouten.
- Interactieve preview opnieuw beschikbaar via de ingebouwde browser: getest op 320, 390, 768, 1024 en 1440 pixels. Hoofdtitel zichtbaar, geen horizontale overloop en geen defect geladen afbeeldingen op deze breedten. De fotokaarten behouden hun verhouding op mobiel en desktop.
- Cookie weigeren, mobiel menu openen/sluiten en Escape getest. Terug-naar-bovenknop getest. Geen consolefouten of waarschuwingen tijdens de previewcontrole. Het contactformulier is hierbij niet verzonden.
- Desktopvoorbeeld opgeslagen in tmp/seo-homepage-final-desktop-20261029.jpg; responsive resultaten in tmp/seo-responsive-final-20261029.json.
- Windsor.ai-tools werden beschikbaar, maar beide pogingen om accounts te lezen faalden technisch met “Unknown tool”. Er is geen accountlijst of Google-data opgehaald en geen profiel gewijzigd. De eerdere melding over de installatiestatus is daardoor geen actuele vaststelling meer.
- Search Console direct geopend in de ingebouwde browser: deze toont de openbare introductiepagina met een inloglink in plaats van de propertyrapporten. Google-login blijft nodig voor indexstatus en sitemapindiening. Gemeenten bij projectfoto’s blijven onbevestigd.
