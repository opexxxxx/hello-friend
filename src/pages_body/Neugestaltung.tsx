
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, CheckCircle, ArrowLeft, Phone, Lightbulb, Palette } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Neugestaltung = () => {
  const designImages = [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      alt: "Moderne Raumgestaltung",
      title: "Offene Wohnkonzepte",
      description: "Durch geschickte Trockenbau-Lösungen schaffen wir offene, lichtdurchflutete Räume mit flexibler Nutzung. Hier entstand aus mehreren kleinen Zimmern ein großzügiger Wohnbereich."
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      alt: "Kreative Raumaufteilung",
      title: "Innovative Raumtrennung",
      description: "Mit modernen Trockenbau-Techniken gestalten wir funktionale Raumteiler, die Privatsphäre schaffen ohne den Raum zu verkleinern. Perfekt für moderne Wohnkonzepte."
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      alt: "Designelemente",
      title: "Stilvolle Designelemente",
      description: "Unsere Gestaltungsexperten integrieren Nischen, Regale und dekorative Elemente nahtlos in die Trockenbau-Konstruktion für einzigartige Akzente."
    }
  ];

  const designSkills = [
    "Innovative Raumkonzepte und -aufteilungen",
    "Integration moderner Beleuchtungskonzepte",
    "Maßgeschneiderte Einbauelemente und Nischen",
    "Harmonische Farbgestaltung und Oberflächendesign"
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
            <Hammer className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Kreative Neugestaltung
            </h1>
            <p className="text-xl text-muted-foreground">
              Wir verwandeln Ihre Räume in wahre Designjuwelen mit innovativen Trockenbau-Lösungen
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Gestaltungsphilosophie</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {designSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card">
                  <Palette className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="text-lg">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                Wie gut wir gestalten können
              </h3>
              <p className="text-muted-foreground mb-4">
                Unser Team vereint handwerkliche Perfektion mit kreativem Design. Wir verstehen es, 
                aus jedem Raum das Maximum herauszuholen und dabei funktionale und ästhetische 
                Aspekte perfekt zu kombinieren. Jedes Projekt ist für uns eine neue Gelegenheit, 
                innovative Lösungen zu entwickeln.
              </p>
              <p className="text-muted-foreground">
                Von minimalistischen Designs bis hin zu ausgefallenen Raumkonzepten - wir setzen 
                Ihre Visionen mit präziser Handwerkskunst um. Dabei achten wir auf jedes Detail 
                und sorgen für ein harmonisches Gesamtbild, das Ihre Persönlichkeit widerspiegelt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Gestaltungsprojekte</h2>
          <div className="space-y-12 max-w-6xl mx-auto">
            {designImages.map((project, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <img 
                        src={project.src} 
                        alt={project.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Neugestaltungs-Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Konzeptentwicklung",
                description: "Wir entwickeln gemeinsam mit Ihnen innovative Raumkonzepte, die Ihre Wünsche und den verfügbaren Raum optimal nutzen."
              },
              {
                icon: Palette,
                title: "Design & Gestaltung",
                description: "Unser Designteam erstellt maßgeschneiderte Lösungen mit hochwertigen Materialien und durchdachten Details."
              },
              {
                icon: CheckCircle,
                title: "Präzise Umsetzung",
                description: "Mit handwerklicher Perfektion setzen wir Ihre Gestaltungsträume millimetergenau in die Realität um."
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
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

      {/* Why Choose Us */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Warum wir die besten Gestalter sind</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Kreativität trifft Handwerk",
                description: "Wir verbinden künstlerische Vision mit präziser handwerklicher Ausführung für einzigartige Ergebnisse."
              },
              {
                title: "Individuelle Lösungen",
                description: "Jeder Raum ist einzigartig - deshalb entwickeln wir für jeden Kunden maßgeschneiderte Gestaltungskonzepte."
              },
              {
                title: "Modernste Techniken",
                description: "Wir nutzen die neuesten Trockenbau-Technologien für innovative und langlebige Gestaltungslösungen."
              },
              {
                title: "Komplettservice",
                description: "Von der ersten Idee bis zur finalen Gestaltung erhalten Sie alles aus einer Hand - professionell und zuverlässig."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
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
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre Neugestaltung?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Räume neu erfinden. Mit unserer Kreativität und Ihren Ideen entstehen Wohnträume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Gestaltungsberatung anfragen
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

export default Neugestaltung;
