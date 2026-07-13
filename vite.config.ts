// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Node.js SSR build for Hostinger (Node.js Selector / Passenger).
  // Inside the Lovable sandbox this override is ignored and Cloudflare is used
  // for the live preview. Outside the sandbox (local `bun run build` / CI /
  // Hostinger deploy build), Nitro emits a standalone Node server to
  // .output/server/index.mjs with static assets in .output/public/.
  nitro: {
    preset: "node-server",
  },
});
