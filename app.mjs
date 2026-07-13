// Passenger / Hostinger Node.js Selector entry point.
// Hostinger's Node.js Selector expects a startup file at the project root.
// After `bun run build` (locally), Nitro emits `.output/server/index.mjs`.
// This file just re-exports it so Passenger can pick it up.
//
// In Hostinger's Node.js Selector configure:
//   Application root:    (your upload folder, e.g. /home/USER/mario-handwerker)
//   Application startup file: app.mjs
//   Application URL:     mario-handwerker.com
//
// Environment variables (PORT, HOST) are injected by Passenger automatically.
import "./.output/server/index.mjs";
