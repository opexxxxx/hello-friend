import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt & Angebot anfragen – Mario Handwerker" },
      { name: "description", content: "Unverbindliches Angebot für Trockenbau, Maler, Renovierung & Innenausbau anfragen – schnelle Rückmeldung aus Heilbronn." },
      { property: "og:title", content: "Kontakt – Mario Handwerker" },
      { property: "og:description", content: "Unverbindliches Angebot für Trockenbau, Maler, Renovierung & Innenausbau anfragen." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});
