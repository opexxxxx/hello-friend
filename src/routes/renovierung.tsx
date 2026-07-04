import { createFileRoute } from "@tanstack/react-router";
import Page from "./_pages/Renovierung";

export const Route = createFileRoute("/renovierung")({
  head: () => ({
    meta: [
      { title: "Renovierung – Mario Handwerker" },
      { name: "description", content: "Renovierungen von Malerarbeiten bis Bodenbelag – zuverlässig und sauber." },
      { property: "og:title", content: "Renovierung – Mario Handwerker" },
      { property: "og:description", content: "Renovierungen von Malerarbeiten bis Bodenbelag – zuverlässig und sauber." },
    ],
  }),
  component: Page,
});
