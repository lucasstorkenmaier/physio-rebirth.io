import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

import servicePhysio from "@/assets/service-physio.jpg";
import serviceShockwave from "@/assets/service-shockwave.jpg";
import serviceSports from "@/assets/service-sports.jpg";
import serviceOsteo from "@/assets/service-osteo.jpg";
import serviceNeedling from "@/assets/service-needling.jpg";

const services = [
  {
    title: "Physiotherapie",
    description: "Was ist Physiotherapie? Die verschiedenen Anwendungsbereiche und Behandlungsmethoden des Physiotherapeuten sollen dem Patienten dabei helfen seine Bewegungs- und Funktionsfähigkeit wiederzuerlangen.",
    image: servicePhysio,
  },
  {
    title: "Stosswellentherapie",
    description: "Stosswellen sind hochenergetische Druckwellen. Sie sind ähnlich wie Schallwellen und sich mit Energie bei einer ansteigenden Geschwindigkeit fortbewegen. Die Therapie ist eine bewährte Behandlungsmethode.",
    image: serviceShockwave,
  },
  {
    title: "Sportphysiotherapie",
    description: "Sportphysiotherapie ist eine Spezialdisziplin der Physiotherapie. Die Therapieform gewinnt aufgrund neuester Erkenntnisse immer mehr an Bedeutung für die Rehabilitation und Prävention von Sportverletzungen.",
    image: serviceSports,
  },
  {
    title: "Osteopathietechniken",
    description: "Die Osteopathie ist eine ganzheitliche manuelle Heilmethode. Sie hat zum Ziel, die Selbstheilungskräfte des Körpers zu aktivieren und das funktionelle Gleichgewicht wiederherzustellen.",
    image: serviceOsteo,
  },
  {
    title: "Dry Needling",
    description: "Dry Needling ist eine punktgenaue Triggerpunkt-Therapie. Beim nadeln handelt es sich um eine sehr wirksame Ergänzung zur aktiveren und das funktionelle Gleichgewicht behandeln.",
    image: serviceNeedling,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Unsere <span className="text-primary">Dienstleistungen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verschiedene Therapieformen für Ihre individuelle Genesung und Rehabilitation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
