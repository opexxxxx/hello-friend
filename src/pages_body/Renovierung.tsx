
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, CheckCircle, Clock, ArrowLeft, Phone, Award } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Renovierung = () => {
  const experience = [
    "Über 20 Jahre Erfahrung in der Renovierung",
    "Mehr als 300 erfolgreich renovierte Objekte",
    "Moderne und nachhaltige Renovierungslösungen",
    "Komplette Altbausanierungen mit Trockenbau"
  ];

  const projectImages = [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      alt: "Renoviertes Wohnzimmer",
      title: "Moderne Wohnraumgestaltung",
      description: "Komplette Renovierung eines Altbau-Wohnzimmers mit neuen Trockenbaukonstruktionen"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      alt: "Renovierte Fassade",
      title: "Fassadensanierung",
      description: "Professionelle Außensanierung mit modernen Dämmsystemen"
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=300&fit=crop",
      alt: "Innenraumrenovierung",
      title: "Innenraummodernisierung",
      description: "Stilvolle Renovierung mit optimaler Raumaufteilung"
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
          </a>
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Professionelle Renovierung
            </h1>
            <p className="text-xl text-muted-foreground">
              Mit jahrzehntelanger Erfahrung bringen wir Ihre Räume auf den neuesten Stand
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Erfahrung spricht für sich</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {experience.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Clock className="mr-3 h-6 w-6 text-primary" />
                Jahrzehntelange Expertise
              </h3>
              <p className="text-muted-foreground mb-4">
                Seit über 20 Jahren renovieren wir erfolgreich Wohn- und Geschäftsräume in der gesamten Region. 
                Unser Team hat sich auf die Herausforderungen von Altbauten spezialisiert und weiß genau, 
                worauf es bei einer professionellen Renovierung ankommt.
              </p>
              <p className="text-muted-foreground">
                Von der behutsamen Sanierung denkmalgeschützter Gebäude bis hin zur kompletten Modernisierung 
                von Wohnungen - wir haben das Know-how und die Erfahrung für jedes Renovierungsprojekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Renovierungsprojekte</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectImages.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.src} 
                    alt={project.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Renovierungs-Spezialitäten</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Altbausanierung",
                description: "Behutsame Modernisierung historischer Gebäude unter Erhaltung des ursprünglichen Charakters"
              },
              {
                title: "Badezimmer-Renovierung",
                description: "Komplette Badsanierung mit modernen Trockenbau-Lösungen für optimale Feuchtigkeitsregulierung"
              },
              {
                title: "Küchen-Modernisierung",
                description: "Professionelle Küchenrenovierung mit funktionalen Trockenbau-Elementen"
              },
              {
                title: "Dachgeschoss-Ausbau",
                description: "Verwandlung ungenutzter Dachböden in moderne Wohnräume"
              }
            ].map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    {specialty.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre Renovierung?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Renovierungsträume verwirklichen. Mit unserer Erfahrung wird Ihr Projekt zum Erfolg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TMPHASH>
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Kostenlose Beratung anfragen
              </Button>
            </a>
            <Link to="/">
              <Button variant="outline" size="lg">
                Zurück zur Startseite
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Renovierung;
