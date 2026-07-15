import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Renovierung";

export const Route = createFileRoute("/renovierung")({
  head: () => ({
    meta: [
      { title: "Renovierung & Sanierung – Mario Handwerker" },
      { name: "description", content: "Renovierung von Malerarbeiten über Bodenbelag bis Trockenbau – sauber, termintreu und aus einer Hand in Heilbronn." },
      { property: "og:title", content: "Renovierung & Sanierung – Mario Handwerker" },
      { property: "og:description", content: "Renovierungen von Malerarbeiten bis Bodenbelag – zuverlässig und sauber." },
      { property: "og:url", content: "/renovierung" },
    ],
    links: [{ rel: "canonical", href: "/renovierung" }],
  }),
  component: Page,
});
