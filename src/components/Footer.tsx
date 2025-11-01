import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">P</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Physiohandwerk</h3>
                <p className="text-xs text-muted-foreground">Kreuzlingen</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Ihre Physiotherapie und Osteopathie in Kreuzlingen
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <span>+41 52 550 30 80</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <span>info@physiotherapiekreuzlingen.ch</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Hauptstrasse 67, 8280 Kreuzlingen</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Dienstleistungen
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                Über uns
              </a>
              <a href="#locations" className="block text-muted-foreground hover:text-primary transition-colors">
                Standorte
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Physiohandwerk Kreuzlingen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
