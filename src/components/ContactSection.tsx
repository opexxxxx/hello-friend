import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const formSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige Email an").max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Bitte geben Sie eine Nachricht ein").max(2000),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const handleSubmit = async (values: FormValues) => {
    if (!FORMSPREE_ENDPOINT) {
      toast({
        title: "Konfigurationsfehler",
        description: "Formular-Endpoint fehlt. Bitte VITE_FORMSPREE_ENDPOINT setzen.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, _subject: "Neue Anfrage über mario-handwerker.com" }),
      });
      if (!res.ok) throw new Error("Senden fehlgeschlagen");
      toast({ title: "Nachricht gesendet", description: "Wir melden uns in Kürze." });
      form.reset();
    } catch {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#e4e4e4] px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal className="lg:pl-16">
            <h2 className="mb-10 text-5xl font-semibold leading-tight text-[#0b1220] md:text-6xl">
              Kontakt
            </h2>

            <div className="flex flex-col gap-8 text-[#0b1220] md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Telefon</h3>
                <p className="mt-1 text-base">+49 15171847310</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a
                  href="mailto:info@mario-handwerker.com"
                  className="mt-1 inline-block text-base underline underline-offset-2"
                >
                  info@mario-handwerker.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Adresse</h3>
                <p className="mt-1 text-base">Ludwigsburger Str. 95 74080 Heilbronn</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="ihre@email.de" {...field} />
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
                      <FormLabel>Telefon (optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+49 ..." {...field} />
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
                      <FormLabel>Nachricht</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Wie können wir helfen?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </Form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
