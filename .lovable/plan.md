## Ziel
Kontaktanfragen sicher per Email an **info@mario-handwerker.com** senden, plus automatische Bestätigung an den Absender.

## Voraussetzungen
1. **Lovable Cloud** aktivieren (Backend für Email-Versand & Rate-Limiting).
2. **Email-Domain** einrichten (Absender z.B. `noreply@mario-handwerker.com` – bessere Zustellbarkeit als Gmail-Absender).

## Umsetzung

### 1. Email-Infrastruktur
- Lovable Cloud einschalten
- Email-Domain-Setup starten (delegierte Subdomain, DNS via Setup-Dialog)
- Email-Queue-Infrastruktur provisionieren (Retries, DLQ, Suppression-Liste)

### 2. Email-Templates (React Email, im Corporate Design)
- **`contact-notification.tsx`** – interne Benachrichtigung an zholoovalexey89@gmail.com mit allen Formularfeldern: Name, Email, Telefon, Nachricht, Quelle (Homepage/Kontaktseite), Zeitstempel, IP.
- **`contact-confirmation.tsx`** – Bestätigung an den Absender mit einer Kopie seiner Anfrage und Hinweis auf Rückmeldung binnen 24h.

### 3. Sicherer Versand-Flow
Die bestehende Server-Function `submitContact` (`src/lib/contact.functions.ts`) wird erweitert:
- Zod-Validierung bleibt (schützt vor Injection/Overflow)
- Rate-Limit bleibt (max. 3 Anfragen / 15 Min / IP)
- **Neu:** nach erfolgreicher Validierung zwei Emails in die Queue legen:
  1. Interne Notification → zholoovalexey89@gmail.com
  2. Bestätigung → Email des Absenders
- Idempotenz-Key verhindert Doppelversand bei Retries
- Fehler-Nachrichten an den Client bleiben generisch (keine internen Details)

### 4. Sicherheitseigenschaften (bereits vorhanden + neu)
- ✅ Server-seitige Validierung (Zod)
- ✅ Rate-Limiting pro IP
- ✅ Keine rohen Server-Fehler an Client
- ✅ Email-Suppression-Liste (Bounces/Beschwerden automatisch geblockt)
- ✅ Queue mit Retry (keine verlorenen Anfragen)
- ✅ HTML-Escaping durch React Email (keine XSS in Emails)

## Was der Nutzer noch tun muss
- DNS-Records für die Email-Domain im Setup-Dialog eintragen (einmalig)
- Bis DNS verifiziert ist, werden Emails in die Queue geschrieben und automatisch versendet, sobald die Domain aktiv ist

## Nicht Teil dieses Plans
- Speichern der Anfragen in einer Datenbank (kann später ergänzt werden)
- Admin-Dashboard zum Einsehen der Anfragen