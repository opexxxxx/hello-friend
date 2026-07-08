import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
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

const ContactSection = () => {
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
      if (!FORMSPREE_ENDPOINT) {
        throw new Error("Kontaktformular ist noch nicht konfiguriert.");
      }
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          message: values.message,
          _subject: `Neue Kontaktanfrage von ${values.name} (Startseite)`,
        }),
      });
      if (!response.ok) {
        throw new Error("Senden fehlgeschlagen");
      }
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
    <section id="contact" className="bg-[#e4e4e4] px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal className="lg:pl-16">
            <h2 className="mb-20 text-5xl font-semibold leading-tight text-[#0b1220] md:text-6xl">
              Kontakt
            </h2>

            <div className="space-y-8 text-[#0b1220]">
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

          <ScrollReveal delay={120}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-[#0b1220]">Name*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ihr Name"
                          className="h-14 rounded-lg border-[#aeb7c2] bg-white px-4 text-base"
                          {...field}
                        />
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
                      <FormLabel className="text-base font-medium text-[#0b1220]">Email*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ihre@email.de"
                          className="h-14 rounded-lg border-[#aeb7c2] bg-white px-4 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-[#0b1220]">Telefon</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ihre Telefonnummer"
                          className="h-14 rounded-lg border-[#aeb7c2] bg-white px-4 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-[#0b1220]">Nachricht*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Beschreiben Sie Ihr Projekt..."
                          className="min-h-[96px] resize-none rounded-lg border-[#aeb7c2] bg-white px-4 py-4 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-1">
                  <Button
                    type="submit"
                    className="h-14 rounded-full bg-black px-10 text-lg font-medium text-white hover:bg-black/85"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                  </Button>
                </div>
              </form>
            </Form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
