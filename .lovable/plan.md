## SEO-Status

Teilweise optimiert. Vorhanden: pro Route eigene `head()` mit Title/Description/OG-Tags (`src/routes/*.tsx`, Defaults in `src/routes/__root.tsx`), `robots.txt`, Favicon, semantische Struktur mit `<h1>` im Hero.

Fehlend / verbesserungswürdig (aus SEO-Scan):

1. **Titles/Descriptions** — Home-Title ist 62 Zeichen (>60) und wird im `__root.tsx` **und** `routes/index.tsx` doppelt gesetzt. Description ist ebenfalls doppelt.
2. **Canonical & og:url** — auf keiner Route gesetzt.
3. **Sitemap** — `/sitemap.xml` fehlt (404).
4. **llms.txt** — fehlt (für AI-Crawler wie ChatGPT/Perplexity).
5. **Bild-Alt-Texte & ARIA** — Prozess-Bilder mit generischen Alts, Telefon-Button ohne `aria-label`, Kontaktformular-Inputs ohne saubere Labels.
6. **Google Search Console** — nicht verbunden (optional, aber empfohlen sobald Domain live).

## Umsetzung

### 1. `src/routes/__root.tsx` aufräumen
- Nur globale Defaults behalten: `charSet`, `viewport`, `og:type=website`, `og:site_name`, Twitter-Card, Favicon, Fallback-`og:image`.
- Doppelte `description`, `og:description`, `twitter:description` sowie den Home-Title/Description **entfernen** (gehören in `routes/index.tsx`).
- **Kein** Canonical im Root (würde mit Leaf-Canonicals kollidieren).

### 2. Pro Route: Title kürzen + Canonical + og:url
In `routes/index.tsx`, `contact.tsx`, `impressum.tsx`, `datenschutz.tsx`, `neugestaltung.tsx`, `renovierung.tsx`, `wohnungsbau.tsx`:
- Title auf <60 Zeichen (z. B. Home: `"Mario Handwerker – Handwerker Bad Friedrichshall"`).
- Jede Description einzigartig und seitenspezifisch.
- `og:url` als Meta-Eintrag + `<link rel="canonical">` in `links`. Da noch keine Produktionsdomain veröffentlicht ist, **relative Pfade** verwenden (`href: "/"`, `content: "/contact"` etc.) — funktioniert später automatisch mit jeder Domain.

### 3. Sitemap
Neue Server-Route `src/routes/sitemap[.]xml.ts` mit allen öffentlichen Pfaden (`/`, `/contact`, `/impressum`, `/datenschutz`, `/neugestaltung`, `/renovierung`, `/wohnungsbau`). `BASE_URL` leer lassen (bis Domain veröffentlicht) — kann später gesetzt werden.

### 4. `public/robots.txt`
Bleibt wie ist (Allow /). `Sitemap:`-Direktive erst hinzufügen wenn eine finale Domain live ist.

### 5. `public/llms.txt`
Neue Datei mit Site-Beschreibung + Link-Liste der öffentlichen Seiten (ohne Impressum/Datenschutz laut Konvention — bzw. optional).

### 6. Barrierefreiheit / Content-Findings
- `HeroSection.tsx`: `aria-label` an Icon-only Buttons falls vorhanden, Alt-Text der Hero-Bilder konkreter (z. B. Ort/Leistung).
- `ProcessSection.tsx`: beschreibende Alt-Texte statt Dateinamen, H2/H3-Hierarchie prüfen.
- `ContactSection.tsx`: `<Label htmlFor>` bzw. `aria-label` an jedes Input.

### 7. Google Search Console (optional, später)
Sobald `mario-handwerker.com` live ist: GSC verbinden, Domain via META-Tag verifizieren, Sitemap einreichen. Kann jetzt schon vorbereitet, aber sinnvoll erst nach Deployment.

## Wo findest du SEO-Sachen im Projekt (aktueller Stand)

- `src/routes/__root.tsx` → globale Meta-Defaults, Favicon, og:image
- `src/routes/<name>.tsx` → pro Seite Title/Description/OG via `head()`
- `public/robots.txt` → Crawler-Regeln
- `public/favicon.png` / `favicon.ico` → Icons
- Semantisches HTML (`<h1>`, `<section>`, `<nav>`, `alt=`) in den Komponenten unter `src/components/`

Nach Implementierung zusätzlich: `src/routes/sitemap[.]xml.ts`, `public/llms.txt` und Canonical-/og:url-Einträge in jeder Route.
