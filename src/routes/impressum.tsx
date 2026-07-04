import { createFileRoute } from "@tanstack/react-router";
import Page from "./_pages/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Mario Handwerker" },
      { name: "description", content: "Rechtliche Angaben und Anbieterkennzeichnung." },
      { property: "og:title", content: "Impressum – Mario Handwerker" },
      { property: "og:description", content: "Rechtliche Angaben und Anbieterkennzeichnung." },
    ],
  }),
  component: Page,
});
