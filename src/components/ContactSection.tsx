
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";
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
  project: z.string().optional(),
  message: z.string()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(1000, "Nachricht darf maximal 1000 Zeichen lang sein"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      project: "",
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
          project: values.project || undefined,
          message: values.message,
          source: "homepage-contact",
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
      const message = SAFE_PREFIXES.some((s) => rawMessage.startsWith(s))
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
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kostenloses Angebot anfordern</h2>
            <p className="text-xl text-muted-foreground">
              Lassen Sie uns Ihr Projekt gemeinsam planen
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <ScrollReveal className="space-y-6 h-full flex flex-col">
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Kontakt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+49 15171847310</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@mario-handwerker.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Spital Str. 14, 74177 Bad Friedrichshall</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle>Unsere Vorteile</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      20+ Jahre Erfahrung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Kostenlose Beratung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Festpreisgarantie
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      10 Jahre Gewährleistung
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={120}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Anfrage senden</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden bei Ihnen
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 h-full flex flex-col">
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
                      
                      <div className="grid md:grid-cols-2 gap-4">
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
                        <FormField
                          control={form.control}
                          name="project"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Projektart</FormLabel>
                              <FormControl>
                                <Input placeholder="z.B. Wohnungsbau, Büro" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex-grow">
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nachricht *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Beschreiben Sie Ihr Projekt..."
                                  className="min-h-[120px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button type="submit" className="w-full mt-auto" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
