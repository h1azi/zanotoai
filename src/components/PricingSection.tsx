import { Check, Sparkles, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Workflows WhatsApp personnalisés pour votre entreprise",
  "Collecte de documents et relances automatiques",
  "Réservation de rendez-vous et synchronisation d’agenda",
  "Onboarding dédié en darija, français ou arabe",
  "Support prioritaire par notre équipe basée au Maroc",
  "Revue et mises à jour d’optimisation mensuelles",
];

const PricingSection = () => {
  const scrollToMeeting = () => {
    const element = document.querySelector("#meeting");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-subtle text-accent text-sm font-semibold mb-4">
            Tarifs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une automatisation qui s’autofinance
          </h2>
          <p className="text-lg text-muted-foreground">
            Invest in a system that captures more leads, chases fewer documents,
            and keeps your calendar full — from day one.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-hero p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Conçu pour les PME marocaines
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Solutions d’automatisation sur mesure
              </h3>
              <p className="text-primary-foreground/80 max-w-xl mx-auto">
                Every business is different. We build a tailored WhatsApp and
                document automation stack around your exact workflows and goals.
              </p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* One-Time Fee */}
                <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      Construction et activation de l’automatisation
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A one-time setup fee covers custom workflow engineering,
                    WhatsApp Business integration, document collection setup,
                    and personalized onboarding in your language.
                  </p>
                </div>

                {/* Monthly Support */}
                <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      Support et maintenance continus
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Continuous monitoring, improvements, and optimization so your
                    automation keeps getting better.
                  </p>
                  <p className="text-accent font-bold text-lg">
                    À partir de 2 500 MAD/mois
                  </p>
                  <p className="text-muted-foreground text-xs">
                    pour les workflows WhatsApp essentiels
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-subtle flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="teal" size="lg" onClick={scrollToMeeting}>
                  Planifier un appel de découverte
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  Obtenez un devis personnalisé selon les besoins de votre entreprise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
