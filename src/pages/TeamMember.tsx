import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMemberData: Record<string, {
  name: string;
  initials: string;
  location: string;
  specialization: string;
  description: string;
  bio: string;
  qualifications: string[];
  services: string[];
  phone?: string;
  email?: string;
}> = {
  "sven-gruber": {
    name: "Sven Gruber",
    initials: "SG",
    location: "Hafencenter",
    specialization: "Physiotherapie & Osteopathie",
    description: "Inhaber Physiohandwerk",
    bio: "Sven Gruber ist der Inhaber von Physiohandwerk und verfügt über umfangreiche Erfahrung in Physiotherapie und Osteopathie. Mit seiner ganzheitlichen Herangehensweise betreut er Patienten mit verschiedensten Beschwerdebildern.",
    qualifications: [
      "Dipl. Physiotherapeut",
      "Osteopath in Ausbildung",
      "Manualtherapie",
      "Sportphysiotherapie"
    ],
    services: [
      "Physiotherapie",
      "Osteopathie",
      "Manuelle Therapie",
      "Sportphysiotherapie"
    ],
  },
  "auguste-siefert": {
    name: "Auguste Siefert",
    initials: "AS",
    location: "Hafencenter",
    specialization: "Physiotherapie",
    description: "Mitarbeiter Physiohandwerk Team im Hafencenter",
    bio: "Auguste Siefert ist Teil des Physiohandwerk Teams im Hafencenter und bietet professionelle physiotherapeutische Behandlungen an.",
    qualifications: [
      "Dipl. Physiotherapeut",
      "Manualtherapie"
    ],
    services: [
      "Physiotherapie",
      "Manuelle Therapie",
      "Rehabilitation"
    ],
  },
  "felix-hensler": {
    name: "Felix Hensler",
    initials: "FH",
    location: "Boulevard & Hafencenter",
    specialization: "Physiotherapie & Sportphysiotherapie",
    description: "Mitarbeiter Physiohandwerk Team im Hafencenter und am Boulevard",
    bio: "Felix Hensler arbeitet sowohl im Hafencenter als auch am Boulevard und ist spezialisiert auf Sportphysiotherapie. Er betreut Sportler und Patienten mit sportbedingten Verletzungen.",
    qualifications: [
      "Dipl. Physiotherapeut",
      "Sportphysiotherapie",
      "Manualtherapie"
    ],
    services: [
      "Physiotherapie",
      "Sportphysiotherapie",
      "Rehabilitation nach Sportverletzungen",
      "Prävention"
    ],
  },
  "tanja-holetzke": {
    name: "Tanja Holetzke",
    initials: "TH",
    location: "Hafencenter",
    specialization: "Physiotherapeutin",
    description: "Physiotherapeutin im Hafencenter",
    bio: "Tanja Holetzke ist Physiotherapeutin im Hafencenter Kreuzlingen und bietet umfassende physiotherapeutische Behandlungen an.",
    qualifications: [
      "Dipl. Physiotherapeutin",
      "Manualtherapie"
    ],
    services: [
      "Physiotherapie",
      "Manuelle Therapie",
      "Rehabilitation"
    ],
  },
  "nils-reinhard": {
    name: "Nils Reinhard",
    initials: "NR",
    location: "Boulevard",
    specialization: "Physiotherapeut",
    description: "Physiotherapeut am Boulevard",
    bio: "Nils Reinhard ist Physiotherapeut am Boulevard Standort und kümmert sich um die ganzheitliche Betreuung seiner Patienten.",
    qualifications: [
      "Dipl. Physiotherapeut",
      "Manualtherapie"
    ],
    services: [
      "Physiotherapie",
      "Manuelle Therapie",
      "Rehabilitation"
    ],
  },
  "isabel-specht": {
    name: "Isabel Specht",
    initials: "IS",
    location: "Hafencenter",
    specialization: "Physiotherapie",
    description: "Physiotherapeutin im Hafencenter",
    bio: "Isabel Specht ist Physiotherapeutin im Hafencenter und bietet professionelle Behandlungen für verschiedene Beschwerdebilder an.",
    qualifications: [
      "Dipl. Physiotherapeutin",
      "Manualtherapie"
    ],
    services: [
      "Physiotherapie",
      "Manuelle Therapie",
      "Rehabilitation"
    ],
  },
  "martin-huber": {
    name: "Martin Huber",
    initials: "MH",
    location: "Boulevard",
    specialization: "Physiotherapie",
    description: "Physiotherapeut am Boulevard",
    bio: "Martin Huber ist Physiotherapeut am Boulevard Standort in Kreuzlingen und behandelt Patienten mit verschiedenen Beschwerden.",
    qualifications: [
      "Dipl. Physiotherapeut",
      "Manualtherapie"
    ],
    services: [
      "Physiotherapie",
      "Manuelle Therapie",
      "Rehabilitation"
    ],
  },
  "nina-philipp": {
    name: "Nina Philipp",
    initials: "NP",
    location: "Hafencenter",
    specialization: "Heilpraktikerin & Masseurin",
    description: "Heilpraktikerin und Masseurin im Hafencenter",
    bio: "Nina Philipp ist Heilpraktikerin und Masseurin im Hafencenter und bietet ganzheitliche Behandlungen und Massagen an.",
    qualifications: [
      "Heilpraktikerin",
      "Dipl. Masseurin",
      "Wellness-Therapie"
    ],
    services: [
      "Medizinische Massage",
      "Wellness-Massage",
      "Heilpraktische Behandlungen",
      "Entspannungstherapie"
    ],
  },
  "gerald-radimirsch": {
    name: "Gerald Radimirsch",
    initials: "GR",
    location: "Boulevard",
    specialization: "Craniosacraltherapeut",
    description: "Craniosacraltherapeut am Boulevard",
    bio: "Gerald Radimirsch ist spezialisiert auf Craniosacraltherapie und bietet sanfte, ganzheitliche Behandlungen am Boulevard Standort an.",
    qualifications: [
      "Craniosacraltherapeut",
      "Dipl. Physiotherapeut",
      "Osteopathische Techniken"
    ],
    services: [
      "Craniosacraltherapie",
      "Physiotherapie",
      "Osteopathische Behandlungen",
      "Entspannungstherapie"
    ],
  },
};

const TeamMember = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? teamMemberData[slug] : null;

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Team-Mitglied nicht gefunden</h1>
          <Link to="/#about">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Team
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Link to="/#about">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Team
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{member.location}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h1>
                  <p className="text-xl text-primary font-semibold mb-4">
                    {member.specialization}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {member.description}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    Qualifikationen
                  </h2>
                  <ul className="space-y-2">
                    {member.qualifications.map((qual) => (
                      <li key={qual} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    Behandlungsangebote
                  </h2>
                  <ul className="space-y-2">
                    {member.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Termin vereinbaren
                </h2>
                <p className="text-muted-foreground mb-4">
                  Möchten Sie einen Termin mit {member.name.split(' ')[0]} vereinbaren? 
                  Kontaktieren Sie uns telefonisch oder per E-Mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#contact">
                    <Button>
                      <Phone className="mr-2 h-4 w-4" />
                      Termin vereinbaren
                    </Button>
                  </Link>
                  <Link to="/#locations">
                    <Button variant="outline">
                      <MapPin className="mr-2 h-4 w-4" />
                      Standort anzeigen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMember;
