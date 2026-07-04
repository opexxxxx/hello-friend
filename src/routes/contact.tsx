import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt – Mario Handwerker" },
      { name: "description", content: "Fragen Sie ein unverbindliches Angebot für Trockenbau, Maler, Renovierung und mehr an." },
      { property: "og:title", content: "Kontakt – Mario Handwerker" },
      { property: "og:description", content: "Fragen Sie ein unverbindliches Angebot für Trockenbau, Maler, Renovierung und mehr an." },
    ],
  }),
  component: Page,
});
