
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "1",
      title: "Beratung & Planung",
      description: "In einem ausführlichen Beratungsgespräch vor Ort analysieren wir Ihre Wünsche und Anforderungen. Gemeinsam entwickeln wir eine detaillierte Projektplanung, die alle Aspekte Ihres Vorhabens berücksichtigt. Von der ersten Idee bis zur technischen Umsetzung - wir begleiten Sie durch jeden Planungsschritt.",
      imageUrl: "/lovable-uploads/4b76022d-360f-49f6-bc4a-28824fa4f767.png",
      reverse: false
    },
    {
      step: "2", 
      title: "Materialauswahl",
      description: "Basierend auf Ihren Anforderungen und unserem Fachwissen wählen wir gemeinsam die optimalen Materialien aus. Dabei achten wir auf Qualität, Langlebigkeit und Ihr Budget. Unsere langjährigen Partnerschaften mit renommierten Herstellern ermöglichen uns, Ihnen stets beste Qualität zu fairen Preisen anzubieten.",
      imageUrl: "/lovable-uploads/e3e939d4-be7a-41b2-b287-b4a36db83582.png",
      reverse: true
    },
    {
      step: "3",
      title: "Professionelle Ausführung", 
      description: "Unser erfahrenes Handwerkerteam setzt Ihr Projekt mit höchster Präzision und Sorgfalt um. Dabei halten wir uns strikt an vereinbarte Termine und Qualitätsstandards. Durch regelmäßige Zwischenkontrollen stellen wir sicher, dass alle Arbeiten fachgerecht und nach neuesten Standards ausgeführt werden.",
      imageUrl: "/lovable-uploads/bf7834ab-788b-4cd0-a626-45ba0b58ec84.png",
      reverse: false
    },
    {
      step: "4",
      title: "Qualitätskontrolle & Übergabe",
      description: "Nach Fertigstellung führen wir eine umfassende Qualitätskontrolle durch und nehmen gemeinsam mit Ihnen das Projekt ab. Wir erklären Ihnen alle durchgeführten Arbeiten und übergeben Ihnen alle relevanten Unterlagen. Auch nach Projektabschluss stehen wir Ihnen für Fragen und Nacharbeiten zur Verfügung.",
      imageUrl: "/lovable-uploads/bc5636ab-96d7-4a26-8fb1-515007ea3856.png",
      reverse: true
    }
  ];

  return (
    <section id="ablauf" className="py-16 bg-gradient-to-br from-craft-bg via-craft-accent to-craft-warm">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Unser Arbeitsprozess</h2>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((item, index) => (
              <ScrollReveal key={index} delay={(index % 2) * 100}>
                <div className={`flex items-center gap-8 ${item.reverse ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-craft-warm/50">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300 hover:scale-110">
                          {item.step}
                        </div>
                        <h4 className="text-2xl font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-secondary/20 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
