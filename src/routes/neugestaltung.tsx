import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Neugestaltung";

export const Route = createFileRoute("/neugestaltung")({
  head: () => ({
    meta: [
      { title: "Neugestaltung von Räumen – Mario Handwerker" },
      { name: "description", content: "Räume neu denken: moderne Materialien, klare Konzepte und handwerkliche Präzision – Ihre Neugestaltung aus einer Hand." },
      { property: "og:title", content: "Neugestaltung von Räumen – Mario Handwerker" },
      { property: "og:description", content: "Neugestaltung Ihrer Räume mit modernen Materialien und handwerklicher Präzision." },
      { property: "og:url", content: "/neugestaltung" },
    ],
    links: [{ rel: "canonical", href: "/neugestaltung" }],
  }),
  component: Page,
});
