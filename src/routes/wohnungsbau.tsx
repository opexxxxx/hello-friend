import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Wohnungsbau";

export const Route = createFileRoute("/wohnungsbau")({
  head: () => ({
    meta: [
      { title: "Wohnungsbau – Mario Handwerker" },
      { name: "description", content: "Wohnungsbau, Trockenbau und Innenausbau aus einer Hand." },
      { property: "og:title", content: "Wohnungsbau – Mario Handwerker" },
      { property: "og:description", content: "Wohnungsbau, Trockenbau und Innenausbau aus einer Hand." },
    ],
  }),
  component: Page,
});
