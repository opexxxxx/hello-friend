import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Mario Handwerker" },
      { name: "description", content: "Datenschutzerklärung nach DSGVO: Umgang mit personenbezogenen Daten, Hosting, Kontaktformular und Ihre Rechte." },
      { property: "og:title", content: "Datenschutz – Mario Handwerker" },
      { property: "og:description", content: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten." },
      { property: "og:url", content: "/datenschutz" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Page,
});
