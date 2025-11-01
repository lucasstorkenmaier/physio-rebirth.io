import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">P</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Physiohandwerk</h1>
              <p className="text-xs text-muted-foreground">Kreuzlingen</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dienstleistungen
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Über uns
            </a>
            <a href="#locations" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Standorte
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>

          <Button variant="hero" size="lg" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" />
            Termin buchen
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
