import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar } from "lucide-react";

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Unsere <span className="text-primary">Standorte</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Besuchen Sie uns an beiden Standorten im Hafencenter und am Boulevard in Kreuzlingen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Hafencenter</h3>
                  <p className="text-muted-foreground">
                    Hauptstrasse 67<br />
                    8280 Kreuzlingen
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+41 52 550 30 80</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                <Calendar className="mr-2 h-5 w-5" />
                Termin buchen im Hafencenter
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Boulevard</h3>
                  <p className="text-muted-foreground">
                    Boulevard Sven Gruber<br />
                    8280 Kreuzlingen
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+41 52 550 30 80</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                <Calendar className="mr-2 h-5 w-5" />
                Termin buchen am Boulevard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
