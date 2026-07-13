import { Button } from "@/components/ui/button";
import { ArrowRight, Brush, Hammer, Phone, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";

const backgroundImage = "/lovable-uploads/bc5636ab-96d7-4a26-8fb1-515007ea3856.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#d8d6cc] px-4 py-4 md:px-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[rgba(240,235,222,0.58)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl flex-col rounded-[28px] border border-white/55 bg-white/38 p-5 shadow-[0_24px_80px_rgba(33,31,24,0.22)] backdrop-blur-md md:min-h-[calc(100vh-3rem)] md:p-8">
        <header className="flex items-center justify-between gap-5">
          <Link to="/" className="leading-none text-[#111111]">
            <span className="block text-3xl font-semibold tracking-[0.16em] md:text-5xl">MARIO</span>
            <span className="mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.48em] text-[#32302a] md:text-sm">
              Handwerker
            </span>
          </Link>

          <nav className="hidden items-center gap-8 rounded-full bg-white/35 px-7 py-3 text-sm font-medium text-[#37352f] backdrop-blur lg:flex">
            <a href="#leistungen" className="transition hover:text-black">Leistungen</a>
            <a href="#vorteile" className="transition hover:text-black">Vorteile</a>
            <a href="#ablauf" className="transition hover:text-black">Ablauf</a>
            <Link to="/contact" className="transition hover:text-black">Kontakt</Link>
          </nav>

          <Link to="/contact">
            <Button className="rounded-full bg-white/70 px-5 text-[#111111] shadow-none hover:bg-white">
              <Phone className="mr-2 h-4 w-4" />
              Kontakt
            </Button>
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white">
              Renovierung, Ausbau und Reparatur aus einer Hand
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-normal text-[#090909] md:text-7xl lg:text-8xl">
              Räume neu denken. Sauber umsetzen.
            </h1>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full bg-black px-7 text-white hover:bg-black/85">
                  Angebot anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-[#403d34]">
                Allaround-Handwerker fuer Trockenbau, Malerarbeiten, Fliesen, Innenausbau und mehr.
              </p>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[26px] bg-black/20 shadow-[0_20px_55px_rgba(20,18,12,0.24)] md:min-h-[430px]">
            <img
              src="/lovable-uploads/bf7834ab-788b-4cd0-a626-45ba0b58ec84.png"
              alt="Saubere Handwerksarbeit im Bad"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/35" />
          </div>
        </div>

        <div className="relative grid overflow-hidden rounded-[22px] border border-white/70 bg-[#f2ece1]/96 shadow-[0_16px_50px_rgba(33,31,24,0.14)] backdrop-blur-[42px] before:absolute before:inset-0 before:bg-[#f2ece1]/75 before:content-[''] md:grid-cols-3">
          {[
            { icon: Hammer, title: "Handwerk mit Plan", text: "Klare Absprachen, saubere Ausfuehrung und ein Ergebnis, das zum Alltag passt." },
            { icon: Wrench, title: "Komplettservice", text: "Von kleinen Reparaturen bis zu groesseren Umbauten koordinieren wir die Arbeiten." },
            { icon: Brush, title: "Sichtbar sauber", text: "Oberflaechen, Details und Abschlussarbeiten bekommen die Aufmerksamkeit, die sie brauchen." },
          ].map((item, index) => (
            <div
              key={item.title}
              className="p-6 text-[#26231d] md:p-8"
            >
              <div className="relative">
                <item.icon className="mb-8 h-8 w-8" />
                <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a564d]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
