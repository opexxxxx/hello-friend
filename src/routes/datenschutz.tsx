import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Mario Handwerker" },
      { name: "description", content: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten." },
      { property: "og:title", content: "Datenschutz – Mario Handwerker" },
      { property: "og:description", content: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten." },
    ],
  }),
  component: Page,
});
