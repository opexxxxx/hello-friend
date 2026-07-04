import { Building, Brush, Droplets, Hammer, Home, Palette, Truck, Wrench, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => {
  const services = [
    { icon: Home, title: "Trockenbau", description: "Waende, Decken und Raumaufteilung sauber geplant und umgesetzt." },
    { icon: Building, title: "Stuckarbeiten", description: "Dekorative Details fuer Decken, Waende und Fassaden." },
    { icon: Palette, title: "Malerarbeiten", description: "Innen und aussen mit ruhiger Vorbereitung und sauberem Abschluss." },
    { icon: Brush, title: "Fliesenleger", description: "Badezimmer, Kueche und Bodenflaechen fachgerecht verlegt." },
    { icon: Hammer, title: "Fassade", description: "Sanierung, Ausbesserung und Gestaltung fuer einen starken Eindruck." },
    { icon: Truck, title: "Transport", description: "Material, Entsorgung und Aufraeumarbeiten passend zum Projekt." },
    { icon: Wrench, title: "Innenausbau", description: "Kompletter Ausbau mit Blick fuer Funktion und Oberflaeche." },
    { icon: Zap, title: "Strom", description: "Koordinierte Elektroarbeiten im Rahmen Ihrer Renovierung." },
    { icon: Droplets, title: "Wasser", description: "Sanitaeranschluesse und Wasserarbeiten fuer Bad und Kueche." },
  ];

  return (
    <section id="leistungen" className="bg-[#ebe6da] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-10 text-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#7d755f]">Unsere Leistungen</p>
            <h2 className="text-4xl font-semibold leading-tight text-[#111111] md:whitespace-nowrap md:text-5xl lg:text-6xl">
              Alles, was Ihr Zuhause weiterbringt.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} className="h-full" delay={(index % 3) * 80}>
              <article className="group min-h-[210px] rounded-[22px] border border-white/55 bg-white/54 p-6 shadow-[0_12px_36px_rgba(58,52,38,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/75">
                <service.icon className="mb-8 h-9 w-9 text-[#1c1a16]" />
                <h3 className="mb-3 text-xl font-semibold text-[#171511]">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#676052]">{service.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
