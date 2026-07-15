import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages_body/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mario Handwerker – Ihr Allround-Handwerker in Bad Friedrichshall" },
      {
        name: "description",
        content:
          "Trockenbau, Maler, Renovierung, Wohnungsbau und Neugestaltung aus einer Hand. Zuverlässig, sauber, termintreu.",
      },
      {
        property: "og:title",
        content: "Mario Handwerker – Ihr Allround-Handwerker in Bad Friedrichshall",
      },
      {
        property: "og:description",
        content:
          "Trockenbau, Maler, Renovierung, Wohnungsbau und Neugestaltung aus einer Hand. Zuverlässig, sauber, termintreu.",
      },
    ],
  }),
  component: HomePage,
});
