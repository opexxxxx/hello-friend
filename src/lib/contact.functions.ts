import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(50, "Name darf maximal 50 Zeichen lang sein")
    .regex(
      /^[a-zA-ZäöüÄÖÜß\s]+$/,
      "Name darf nur Buchstaben und Leerzeichen enthalten",
    ),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein")
    .max(255),
  phone: z
    .string()
    .trim()
    .max(50)
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      "Telefonnummer darf nur Zahlen, Leerzeichen und Sonderzeichen enthalten",
    ),
  project: z.string().trim().max(200).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(1000, "Nachricht darf maximal 1000 Zeichen lang sein"),
  source: z.string().max(50).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

// simple in-memory rate limit — sufficient for a single-worker instance
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { getRequestHeader } = await import("@tanstack/react-start/server");
    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (!checkRateLimit(ip)) {
      throw new Error(
        "Zu viele Anfragen. Bitte warten Sie 15 Minuten bevor Sie erneut eine Anfrage senden.",
      );
    }

    // Persist / notify: currently just server-side log.
    // Wire up an email provider (e.g. Resend) later if outbound delivery is needed.
    console.log("[contact] new submission", {
      source: data.source ?? "unknown",
      name: data.name,
      email: data.email,
      phone: data.phone,
      project: data.project,
      messageLength: data.message.length,
      ip,
      at: new Date().toISOString(),
    });

    return { ok: true } as const;
  });
