
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, CheckCircle, Users, Clock, ArrowLeft, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Wohnungsbau = () => {
  const teamExpertise = [
    "Über 15 Jahre Erfahrung im Wohnungsbau",
    "Spezialisiert auf moderne Trockenbautechniken",
    "Zertifizierte Handwerker im Team",
    "Bereits über 500 Wohnprojekte erfolgreich abgeschlossen"
  ];

  const services = [
    {
      title: "Raumaufteilung",
      description: "Flexible Gestaltung von Wohnräumen durch professionelle Trennwände"
    },
    {
      title: "Schallschutz",
      description: "Optimaler Lärmschutz zwischen Räumen für mehr Wohnkomfort"
    },
    {
      title: "Wärmedämmung",
      description: "Energieeffiziente Lösungen für besseres Raumklima"
    },
    {
      title: "Brandschutz",
      description: "Sichere Brandschutzwände nach aktuellen Bauvorschriften"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <Home className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Professioneller Wohnungsbau
            </h1>
            <p className="text-xl text-muted-foreground">
              Unser erfahrenes Team verwandelt Ihre Wohnträume in die Realität
            </p>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Warum unser Team die beste Wahl ist</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {teamExpertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card">
                  <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Users className="mr-3 h-6 w-6 text-primary" />
                Unser Expertenteam
              </h3>
              <p className="text-muted-foreground mb-4">
                Unser Team besteht aus hochqualifizierten Handwerkern, die sich auf modernen Trockenbau 
                im Wohnungsbau spezialisiert haben. Jeder unserer Mitarbeiter bringt jahrelange Erfahrung 
                und Leidenschaft für präzise Arbeit mit.
              </p>
              <p className="text-muted-foreground">
                Von der ersten Beratung bis zur finalen Übergabe stehen wir Ihnen mit Fachwissen und 
                zuverlässigem Service zur Seite. Qualität und Kundenzufriedenheit haben für uns oberste Priorität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Wohnungsbau-Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unser Wohnungsbau-Prozess</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "1", title: "Persönliche Beratung", description: "Kostenlose Vor-Ort-Beratung und Analyse Ihrer Wohnwünsche" },
              { step: "2", title: "Detailplanung", description: "Professionelle Planung mit 3D-Visualisierung Ihrer neuen Räume" },
              { step: "3", title: "Materialauswahl", description: "Gemeinsame Auswahl hochwertiger Materialien für Ihr Projekt" },
              { step: "4", title: "Präzise Ausführung", description: "Fachgerechte Umsetzung durch unser erfahrenes Handwerkerteam" },
              { step: "5", title: "Qualitätskontrolle", description: "Abschlusskontrolle und professionelle Übergabe" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr Wohnungsbau-Projekt?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Wohnträume verwirklichen. Kontaktieren Sie uns für eine kostenlose Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt Beratung anfragen
              </Button>
            </a>
            <Link to="/">
              <Button variant="outline" size="lg">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wohnungsbau;
