import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#e4e4e4] px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal className="lg:pl-16">
            <h2 className="mb-20 text-5xl font-semibold leading-tight text-[#0b1220] md:text-6xl">
              Kontakt
            </h2>

            <div className="flex flex-col gap-8 text-[#0b1220] md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Telefon</h3>
                <p className="mt-1 text-base">+49 15171847310</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:info@mario-handwerker.com" className="mt-1 inline-block text-base underline underline-offset-2">
                  info@mario-handwerker.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Adresse</h3>
                <p className="mt-1 text-base">Ludwigsburger Str. 95 74080 Heilbronn</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
