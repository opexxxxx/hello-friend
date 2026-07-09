import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl text-muted-foreground">
              Nehmen Sie Kontakt mit uns auf, um Ihre Projekte zu besprechen oder Fragen zu stellen.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-12">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-semibold">Telefon</p>
                <p className="text-lg">+49 15171847310</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-semibold">E-Mail</p>
                <p className="text-lg">info@mario-handwerker.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-semibold">Adresse</p>
                <p className="text-lg">Ludwigsburger Str. 95, 74080 Heilbronn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

