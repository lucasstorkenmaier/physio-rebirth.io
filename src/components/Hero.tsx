import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-physio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Modern Physiotherapy Clinic"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary rounded-full">
            <p className="text-sm font-medium text-secondary-foreground">
              Ihre Gesundheit in besten Händen
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Physiotherapie
            <span className="block text-primary mt-2">und Osteopathie</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Die Physiotherapie Physiohandwerk in Kreuzlingen im Hafencenter und am Boulevard 
            bietet Ihnen mit einem erfahrenen Team verschiedene Therapieformen für Ihre Genesung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-base">
              <Calendar className="mr-2 h-5 w-5" />
              Termin buchen im Hafencenter
            </Button>
            <Button variant="outline" size="lg" className="text-base border-2 hover:border-primary">
              <MapPin className="mr-2 h-5 w-5" />
              Termin buchen am Boulevard
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>2 Standorte in Kreuzlingen</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">+41 52 550 30 80</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
