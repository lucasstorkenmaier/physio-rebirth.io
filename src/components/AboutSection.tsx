import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Sven Gruber",
    initials: "SG",
    location: "Hafencenter",
    specialization: "Physiotherapie & Osteopathie",
  },
  {
    name: "Auguste Siefert",
    initials: "AS",
    location: "Hafencenter",
    specialization: "Physiotherapie",
  },
  {
    name: "Felix Hensler",
    initials: "FH",
    location: "Boulevard",
    specialization: "Physiotherapie & Sportphysiotherapie",
  },
  {
    name: "Tanja Holetzke",
    initials: "TH",
    location: "Hafencenter",
    specialization: "Physiotherapie",
  },
  {
    name: "Nils Reinhard",
    initials: "NR",
    location: "Boulevard",
    specialization: "Physiotherapie",
  },
  {
    name: "Isabel Specht",
    initials: "IS",
    location: "Hafencenter",
    specialization: "Physiotherapie",
  },
  {
    name: "Martin Huber",
    initials: "MH",
    location: "Boulevard",
    specialization: "Physiotherapie",
  },
  {
    name: "Nina Philipp",
    initials: "NP",
    location: "Hafencenter",
    specialization: "Physiotherapie",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ihr Weg zur <span className="text-primary">Genesung</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Die Physiotherapie Physiohandwerk in Kreuzlingen im Hafencenter und am Boulevard 
              können Ihnen mit ihrem ganzen Physiotherapeutenteam verschiedene Therapieformen anbieten.
            </p>
            <p>
              Angefangen von der Physiotherapie bis hin zur Osteopathie. Desweiteren arbeitet 
              die Physiotherapie Physiohandwerk in Kreuzlingen mit anderen medizinischen 
              Berufsgruppen zusammen.
            </p>
            <p className="font-semibold text-foreground">
              Unser Ziel ist es, mit Ihnen einen gemeinsamen Weg zu finden, wie wir Ihnen am 
              besten helfen können.
            </p>
            <p>
              Wir betrachten uns zu allererst als Coach, der Ihnen mit Rat und Tat zur 
              Verfügung steht. Mit unserer gemeinsamen Berufserfahrung sind wir stolz Ihnen ein 
              gutes Bild von dem geben zu können, was Sie brauchen.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Unser <span className="text-primary">Team</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member.specialization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
