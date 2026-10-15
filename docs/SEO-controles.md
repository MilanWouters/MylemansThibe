# Uitgevoerde controles

3 oktober 2026 — lokaal, zonder publicatie.

| Controle | Resultaat |
|---|---|
| Statische HTML, metadata en interne verwijzingen | 836 controles, geen fouten |
| Canonicals en sitemap | 12 unieke indexeerbare URL’s; overeenkomst gecontroleerd |
| H1 en main | Eén van elk op alle 13 pagina’s |
| Structured data | JSON parseert; bedrijfsgegevens, Service en breadcrumbs gecontroleerd |
| Gemeentelijst | Exact 67 unieke gemeenten; vergelijking met de officiële lijst geslaagd |
| Afbeeldingen | Lokale bestanden, srcsets, afmetingen en alt-attributen aanwezig; zichtbare beelden decoderen in de browser |
| Schermbreedten | 320, 390, 768, 1024 en 1440 pixels; 65 paginacontroles geslaagd |
| Mobiel | Hoofdtitels zichtbaar en geen horizontale documentoverloop op de gecontroleerde breedten |
| Menu | Openen, sluiten, Escape, overlay en het omslagpunt tussen mobiel en desktop geslaagd |
| Formulier | Verplichte velden, alleen-spaties, dienstkeuze, onbekende URL-waarde, succes, serverfout en netwerkfout geslaagd |
| Formulierverzending | Alle testverzoeken naar Formspree onderschept; geen echte aanvragen verzonden |
| JavaScript | Externe scripts en inline scripts op syntaxis gecontroleerd; geen runtimefouten tijdens de paginacontroles |
| Git-diff | `git diff --check` geslaagd |
| Build | Geen bundler/buildstap in deze statische website; bronbestanden zijn de website |

## Bestandsmetingen van afbeeldingen

Deze cijfers beschrijven bestanden, geen gemeten Core Web Vitals of volledige paginaladingen.

- Hero Tuinaanleg: van 940.874 bytes naar 747.420 bytes, ongeveer 21% kleiner.
- Hero Tuinonderhoud: van 923.141 bytes naar 716.316 bytes, ongeveer 22% kleiner.
- Nieuwe foto van de haag langs het pad: de 480px-webversie is 115.384 bytes; de eerdere 1200px-JPEG-webkopie was 1.306.419 bytes. De browser kiest via srcset een passende grootte; op schermen met een hogere pixeldichtheid kan een grotere versie nodig zijn.
- Er zijn 112 WebP-bestanden gemaakt voor 43 afbeeldingsbronnen. Bij de nieuwe foto’s zijn de webbeelden opnieuw uit de originelen afgeleid; de originelen blijven byte voor byte behouden. Sommige grote varianten bevatten meer pixels dan de vroegere webkopie en zijn daardoor niet kleiner. De responsive varianten voorkomen dat elke weergave zo’n groot bestand nodig heeft.

## Niet lokaal te bevestigen

De Python-preview leest `.htaccess` niet. De nieuwe 301-redirects, MIME-regel, caching, compressie en toegangsregels zijn in de configuratie voorbereid, maar moeten na een expliciete publicatieopdracht op Vimexx gecontroleerd worden. De huidige publieke site is niet gewijzigd. De oorspronkelijke HTTP- en `/index.html`-duplicaten zijn dus live nog aanwezig.

Formspree is behouden, maar echte ontvangst en aflevering van een aanvraag zijn niet getest. Daarvoor is een afzonderlijk geautoriseerde echte test nodig.

Google-indexering, door Google gekozen canonicals, de online Rich Results Test, Search Console-rapporten, Google Bedrijfsprofiel en Core Web Vitals-veldgegevens zijn niet vanuit de beschikbare accounttoegang gecontroleerd. Er is geen rankingscore of omzetresultaat toegekend. Het praktische vervolg staat in `SEO-rapport.md`.

## Controles opnieuw uitvoeren

```text
python scripts/check-seo.py
node scripts/check-browser.cjs
```

De browsercontrole gebruikt Playwright en standaard Microsoft Edge. Stel zo nodig `PLAYWRIGHT_MODULE`, `BROWSER_CHANNEL` en `BASE_URL` in voor de eigen omgeving. De lokale preview voor deze uitvoering staat op `http://127.0.0.1:8010`.
