
import { Award, Building2, CheckCircle, Clock, Home, ShieldCheck, Users, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AdvantagesSection = () => {
  const advantages = [
    { icon: Clock, text: "Schnelle Bauzeit", detail: "Termine bleiben transparent und realistisch." },
    { icon: CheckCircle, text: "Hochwertige Materialien", detail: "Robuste Loesungen statt schneller Kompromisse." },
    { icon: Users, text: "Erfahrenes Team", detail: "Eingespielte Arbeitsschritte und klare Kommunikation." },
    { icon: Home, text: "Komplettservice", detail: "Planung, Ausfuehrung und Abschluss aus einer Hand." }
  ];

  const trustPoints = [
    { icon: Award, title: "20+ Jahre Erfahrung", text: "Langjährige Praxis im Wohnungsbau und bei anspruchsvollen Innenausbau-Projekten." },
    { icon: Wrench, title: "Moderne Trockenbautechnik", text: "Spezialisiert auf zeitgemäße Trockenbau-Lösungen für Wohnräume." },
    { icon: ShieldCheck, title: "Zertifizierte Handwerker", text: "Ein qualifiziertes Team mit sauberem Anspruch an jedes Detail." },
    { icon: Building2, title: "500+ Wohnprojekte", text: "Bereits über 500 erfolgreich abgeschlossene Projekte für zufriedene Kunden." },
  ];

  return (
    <section id="vorteile" className="bg-[#f4f0e7] px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-7 max-w-2xl md:mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#7d755f]">Warum wir?</p>
          <h2 className="text-4xl font-semibold leading-tight text-[#111111] md:whitespace-nowrap md:text-5xl lg:text-6xl">
            Ruhige Arbeit, sauberes Ergebnis.
          </h2>
        </ScrollReveal>
        <div>
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={index} delay={(index % 2) * 90}>
                <div className="rounded-[22px] border border-white/60 bg-white/58 p-4 sm:p-6 shadow-[0_12px_34px_rgba(58,52,38,0.08)] backdrop-blur">
                  <advantage.icon className="mb-3 h-8 w-8 sm:mb-8 text-[#1c1a16]" />
                  <h3 className="mb-2 text-xl font-semibold text-[#171511]">{advantage.text}</h3>
                  <p className="text-sm leading-relaxed text-[#676052]">{advantage.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <ScrollReveal className="mx-auto mb-7 max-w-3xl md:mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#7d755f]">Warum unser Team die beste Wahl ist</p>
            <h3 className="text-3xl font-semibold leading-tight text-[#111111] md:text-5xl">
              Erfahrung, Fachwissen und echte Verantwortung.
            </h3>
          </ScrollReveal>

          <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {trustPoints.map((point, index) => (
              <ScrollReveal key={point.title} className="h-full" delay={(index % 4) * 70}>
                <article className="h-full rounded-[22px] border border-white/60 bg-white/58 p-4 sm:p-6 shadow-[0_12px_34px_rgba(58,52,38,0.08)] backdrop-blur">
                  <point.icon className="mb-3 h-8 w-8 sm:mb-8 text-[#1c1a16]" />
                  <h4 className="mb-2 text-lg font-semibold text-[#171511]">{point.title}</h4>
                  <p className="text-sm leading-relaxed text-[#676052]">{point.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
