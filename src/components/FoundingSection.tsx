import { Sparkles, Lock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  {
    icon: Sparkles,
    title: "Configuration gratuite",
    description:
      "Nous configurons votre automatisation WhatsApp, vos flux de documents et votre workflow de réservation sans frais de mise en œuvre.",
  },
  {
    icon: Lock,
    title: "Garantie de tarif bloqué",
    description:
      "Votre tarif de support mensuel est bloqué à vie — il n’augmente jamais, même à mesure que nous grandissons.",
  },
  {
    icon: Users,
    title: "Accès direct",
    description:
      "Travaillez directement avec notre équipe. Pas de tickets de support, pas d’attente — juste une aide rapide et personnalisée.",
  },
];

const FoundingSection = () => {
  const scrollToMeeting = () => {
    const element = document.querySelector("#meeting");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="founding" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-subtle text-accent text-sm font-semibold mb-4">
              Disponibilité limitée
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Devenez un client fondateur
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are onboarding our first 5 founding businesses in Morocco. In
              exchange for early feedback, you get free setup and a rate that
              never increases.
            </p>
          </div>

          {/* Spots counter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/40 bg-teal-subtle">
              <span className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-3 h-3 rounded-full bg-accent" />
                ))}
              </span>
              <span className="text-accent font-semibold text-sm">
                5 places fondatrices disponibles
              </span>
            </div>
          </div>

          {/* Perks */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {perks.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-subtle flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="teal"
              size="lg"
              onClick={scrollToMeeting}
              className="group"
            >
              Réserver une place fondatrice
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Appel de 15 minutes · Sans engagement · Places limitées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingSection;
