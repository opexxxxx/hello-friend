
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Allaround-Handwerker</h3>
            <p className="text-primary-foreground/80">
              Ihr zuverlässiger Partner für alle Handwerksleistungen
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <Link
              to="/contact"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Kontakt
            </Link>
            <Link 
              to="/impressum" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Datenschutz
            </Link>
          </div>
          
          <div className="text-center text-sm text-primary-foreground/60 mt-8">
            © {new Date().getFullYear()} Allaround-Handwerker. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
