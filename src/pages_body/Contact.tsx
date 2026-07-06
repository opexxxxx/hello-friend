
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/contact.functions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(50, "Name darf maximal 50 Zeichen lang sein")
    .regex(/^[a-zA-ZäöüÄÖÜß\s]+$/, "Name darf nur Buchstaben und Leerzeichen enthalten"),
  email: z.string()
    .min(1, "E-Mail ist erforderlich")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\d\s\-\+\(\)]+$/.test(val), "Telefonnummer darf nur Zahlen, Leerzeichen und Sonderzeichen enthalten"),
  message: z.string()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(1000, "Nachricht darf maximal 1000 Zeichen lang sein"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleSubmit = async (values: FormValues) => {
    try {
      await submitContact({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          message: values.message,
          source: "contact-page",
        },
      });
      toast({
        title: "Anfrage gesendet!",
        description: "Wir werden uns bald bei Ihnen melden.",
      });
      form.reset();
    } catch (error) {
      console.error("Error processing form:", error);
      const SAFE_PREFIXES = ["Zu viele Anfragen"];
      const rawMessage = error instanceof Error ? error.message : "";
      const message = SAFE_PREFIXES.some((p) => rawMessage.startsWith(p))
        ? rawMessage
        : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
      toast({
        title: "Fehler",
        description: message,
        variant: "destructive",
      });
    }
  };

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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info - 3 separate cards with better centering */}
            <div className="flex flex-col h-full">
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

              <Card className="flex-1 mt-4">
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

              <Card className="flex-1 mt-4">
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

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Anfrage senden</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden bei Ihnen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail *</FormLabel>
                            <FormControl>
                              <Input placeholder="ihre@email.de" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihre Telefonnummer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Beschreiben Sie Ihr Projekt..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
