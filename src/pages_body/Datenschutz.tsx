
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). Nachfolgend informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Datenerfassung auf unserer Website</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p><strong>Server-Logfiles</strong></p>
                <p>Beim Besuch dieser Website werden keine personenbezogenen Daten automatisiert erfasst und es werden keine Cookies verwendet.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Kontaktformular</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>
                  Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (z. B. Telefonnummer, E-Mail-Adresse, Projektbeschreibung) zum Zweck der Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert und per E-Mail übertragen.
                </p>
                <p className="mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                </p>
                <p className="mt-4">
                  In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO – aus unserem berechtigten Interesse an der effizienten Bearbeitung von Anfragen – oder auf Art. 6 Abs. 1 lit. a DSGVO, sofern Ihre Einwilligung eingeholt wurde.
                </p>
                <p className="mt-4">
                  Die Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                </p>
                <p className="mt-4">
                  Die Übermittlung der Daten per E-Mail erfolgt unverschlüsselt. Bitte übermitteln Sie keine sensiblen Informationen über dieses Formular.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Keine Cookies</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>Auf unserer Website werden keine Cookies oder vergleichbare Technologien zur Wiedererkennung der Besucher eingesetzt.</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. SSL-/TLS-Verschlüsselung</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p className="mt-4">
                  Wenn die SSL-/TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="list-disc pl-5">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht</li>
                  <li>Einschränkung der Verarbeitung Ihrer Daten</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                </ul>
                <p className="mt-2">
                  Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Verantwortlicher</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                 <p>
                   <strong>Mario Blazevic</strong><br />
                   Spital Str. 14<br />
                   74177 Bad Friedrichshall<br />
                   E-Mail: <a href="mailto:info@mario-handwerker.com">info@mario-handwerker.com</a><br />
                   Telefon: +49 15171847310
                 </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Aktualisierung der Datenschutzerklärung</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Datenschutz;
