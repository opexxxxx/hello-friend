
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Impressum = () => {
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

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Impressum</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p><strong>Mario Blazevic</strong></p>
                  <p>Spital Str. 14</p>
                  <p>74177 Bad Friedrichshall</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p><strong>Telefon:</strong> +49 15171847310</p>
                  <p><strong>E-Mail:</strong> info@mario-handwerker.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Steuerliche Angaben</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p><strong>Steuernummer:</strong> 2865032/59878</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Bankverbindung</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p><strong>Bank:</strong> VR Bank Heilbronn Schwäbisch Hall eG</p>
                  <p><strong>BLZ:</strong> 0415397006</p>
                  <p><strong>IBAN:</strong> DE50 6229 0110 0415 3970 06</p>
                  <p><strong>BIC:</strong> GENODES1SHA</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                 <div className="bg-white p-6 rounded-lg shadow-sm">
                   <p>Mario Blazevic</p>
                  <p>Spital Str. 14</p>
                  <p>74177 Bad Friedrichshall</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                  <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                  <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
