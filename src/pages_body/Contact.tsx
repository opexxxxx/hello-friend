import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
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

          <div className="grid md:grid-cols-3 gap-6 items-start">
            <Card className="flex-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center justify-center text-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex items-center justify-center text-center min-h-[60px]">
                <span className="text-lg">+49 15171847310</span>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center justify-center text-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex items-center justify-center text-center min-h-[60px]">
                <span className="text-lg">info@mario-handwerker.com</span>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center justify-center text-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex items-center justify-center text-center min-h-[60px] px-6">
                <span className="text-lg">Ludwigsburger Str. 95, 74080 Heilbronn</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
