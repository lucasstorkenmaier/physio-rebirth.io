import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ServiceCard = ({ title, description, image, delay = 0 }: ServiceCardProps) => {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent">
          Erfahren Sie mehr
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
