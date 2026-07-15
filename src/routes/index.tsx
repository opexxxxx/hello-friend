import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages_body/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mario Handwerker – Handwerker Bad Friedrichshall" },
      {
        name: "description",
        content:
          "Trockenbau, Maler, Renovierung, Wohnungsbau und Neugestaltung aus einer Hand. Zuverlässig, sauber, termintreu.",
      },
      { property: "og:title", content: "Mario Handwerker – Handwerker Bad Friedrichshall" },
      {
        property: "og:description",
        content:
          "Ihr Allround-Handwerker: Trockenbau, Maler, Renovierung und mehr in Bad Friedrichshall & Heilbronn.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
