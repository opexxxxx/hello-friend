# Deployment auf Hostinger (Business/Premium mit Node.js Selector)

Diese App läuft als **Voll-SSR TanStack Start** auf einem Node.js-Prozess (Passenger). Die Lovable-Preview bleibt weiterhin auf Cloudflare Workers — der Node-Build passiert nur außerhalb der Lovable-Sandbox.

## 1. Lokal bauen

Voraussetzung: Node.js ≥ 20 und [Bun](https://bun.sh) (oder npm/pnpm) lokal installiert.

```bash
# Repo klonen (aus Lovable "Export to GitHub" oder direkt runterladen)
git clone <dein-repo>
cd <projekt>

bun install
bun run build
```

Ergebnis nach dem Build:

```
.output/
├── server/index.mjs   ← Node-Serverbundle
└── public/            ← statische Assets (JS, CSS, Bilder)
```

Kurz lokal testen:

```bash
node .output/server/index.mjs
# → http://localhost:3000
```

## 2. Upload zu Hostinger

Per **File Manager** oder **SFTP** in deinen Home-Ordner (z.B. `/home/USER/mario-handwerker/`) folgendes hochladen:

- `.output/` (kompletter Ordner)
- `app.mjs`
- `package.json`
- `bun.lock` bzw. `package-lock.json` (falls vorhanden)

`node_modules/`, `src/`, `.git/` etc. brauchst du **nicht** — alles ist in `.output/server/index.mjs` gebündelt.

## 3. Node.js Selector in hPanel konfigurieren

hPanel → **Advanced → Node.js**:

| Feld | Wert |
|---|---|
| Node.js Version | 20.x oder 22.x |
| Application Mode | Production |
| Application Root | `/home/USER/mario-handwerker` |
| Application URL | `mario-handwerker.com` |
| Application Startup File | `app.mjs` |

Danach **Create/Restart Application**. Passenger startet `app.mjs`, das lädt `.output/server/index.mjs`.

## 4. Domain verknüpfen

In hPanel → **Domains** die Domain `mario-handwerker.com` auf das gleiche Verzeichnis zeigen lassen wie die Node-App (Hostinger macht das beim Anlegen der App meist automatisch).

## 5. Update-Workflow

Bei jeder Änderung:

1. `bun run build` lokal
2. `.output/` neu hochladen (überschreiben)
3. In hPanel → Node.js → **Restart** klicken

## Kontaktformular

Läuft weiter über **Formspree** (kein Backend-Setup auf Hostinger nötig). Der Endpoint ist im Frontend fest verdrahtet — keine Env-Variablen erforderlich.

## Troubleshooting

- **502 Bad Gateway**: `app.mjs` fehlt oder `.output/server/index.mjs` wurde nicht mit hochgeladen. Passenger-Logs in hPanel → Node.js → *stderr.log*.
- **Weiße Seite / 404 auf Unterseiten**: Passenger routet nicht auf die Node-App. Prüfen, dass die Domain wirklich auf den Node-Prozess zeigt (nicht auf einen alten `public_html`-Ordner).
- **Alte Version wird ausgeliefert**: Nach dem Upload immer **Restart Application** klicken — Passenger cached das alte Bundle sonst.
