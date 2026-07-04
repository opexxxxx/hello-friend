import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages_body/Neugestaltung";

export const Route = createFileRoute("/neugestaltung")({
  head: () => ({
    meta: [
      { title: "Neugestaltung – Mario Handwerker" },
      { name: "description", content: "Neugestaltung Ihrer Räume mit modernen Materialien und handwerklicher Präzision." },
      { property: "og:title", content: "Neugestaltung – Mario Handwerker" },
      { property: "og:description", content: "Neugestaltung Ihrer Räume mit modernen Materialien und handwerklicher Präzision." },
    ],
  }),
  component: Page,
});
