import { useEffect } from "react";
import { Calendar, CheckCircle } from "lucide-react";

const meetingBenefits = [
  "Session de découverte de 15 minutes, sans engagement",
  "Découvrez comment l’automatisation WhatsApp s’adapte à votre entreprise",
  "Obtenez des réponses à toutes vos questions",
  "Recevez une proposition d’automatisation personnalisée",
];

const MeetingSection = () => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/clientservices-zanotoaisolutions?text_color=0580ed&primary_color=00ffcb",
        parentElement: document.getElementById("calendly-inline-container"),
      });
    }
  }, []);

  return (
    <section id="meeting" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
            <Calendar className="w-4 h-4" />
            Réserver votre session
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à automatiser votre entreprise ?
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Planifiez un appel de découverte gratuit avec notre équipe. Nous examinerons vos
            workflows, vous montrerons ce qui est possible sur WhatsApp et vous proposerons un
            plan d’automatisation adapté à votre entreprise marocaine.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {meetingBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="w-5 h-5 text-teal" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Calendly Inline Widget */}
          <div
            id="calendly-inline-container"
            className="calendly-inline-widget w-full rounded-xl overflow-hidden bg-white shadow-xl"
            data-url="https://calendly.com/clientservices-zanotoaisolutions?text_color=0580ed&primary_color=00ffcb"
            style={{ minWidth: "320px", height: "700px" }}
          />

          <p className="text-primary-foreground/60 text-sm mt-6">
            Aucun engagement requis · Planification en 2 minutes seulement
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetingSection;
