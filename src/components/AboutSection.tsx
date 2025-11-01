const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ihr Weg zur <span className="text-primary">Genesung</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Die Physiotherapie Physiohandwerk in Kreuzlingen im Hafencenter und am Boulevard 
              können Ihnen mit ihrem ganzen Physiotherapeutenteam (Sven Gruber, Auguste Siefert 
              und Felix Hensler) verschiedene Therapieformen anbieten.
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
      </div>
    </section>
  );
};

export default AboutSection;
