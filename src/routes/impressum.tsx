import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Mario Handwerker" },
      { name: "description", content: "Anbieterkennzeichnung nach § 5 TMG: Kontakt, Verantwortlicher und rechtliche Angaben von Mario Handwerker." },
      { property: "og:title", content: "Impressum – Mario Handwerker" },
      { property: "og:description", content: "Rechtliche Angaben und Anbieterkennzeichnung nach § 5 TMG." },
      { property: "og:url", content: "/impressum" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Page,
});
