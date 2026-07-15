import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Wohnungsbau";

export const Route = createFileRoute("/wohnungsbau")({
  head: () => ({
    meta: [
      { title: "Wohnungsbau & Innenausbau – Mario Handwerker" },
      { name: "description", content: "Wohnungsbau, Trockenbau und Innenausbau aus einer Hand – vom Rohbau bis zur schlüsselfertigen Übergabe." },
      { property: "og:title", content: "Wohnungsbau & Innenausbau – Mario Handwerker" },
      { property: "og:description", content: "Wohnungsbau, Trockenbau und Innenausbau aus einer Hand." },
      { property: "og:url", content: "/wohnungsbau" },
    ],
    links: [{ rel: "canonical", href: "/wohnungsbau" }],
  }),
  component: Page,
});
