import { useState } from "react";
import { MessageSquare, FileText, CalendarCheck, CheckCircle } from "lucide-react";

interface AutomationTab {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  animationSteps: string[];
}

const automations: AutomationTab[] = [
  {
    id: "whatsapp",
    title: "Capture de leads WhatsApp",
    subtitle: "Ne manquez plus aucun prospect",
    description:
      "Lorsqu’un client envoie un message à votre entreprise sur WhatsApp, notre IA le qualifie instantanément, répond aux questions courantes et planifie la prochaine étape — même pendant votre sommeil.",
    icon: MessageSquare,
    animationSteps: [
      "Nouveau message WhatsApp reçu...",
      "L’IA salue en darija ou en français...",
      "Qualifie le besoin et le budget...",
      "Prend rendez-vous ou envoie un devis !",
    ],
  },
  {
    id: "documents",
    title: "Collecte de documents",
    subtitle: "Arrêtez de courir après les documents",
    description:
      "Demandez, rappelez et organisez automatiquement les documents de vos clients via WhatsApp. Cartes d’identité, contrats, factures, photos — collectés et classés sans relance manuelle.",
    icon: FileText,
    animationSteps: [
      "Demande envoyée sur WhatsApp...",
      "Le client télécharge le document...",
      "L’IA valide et renomme le fichier...",
      "Enregistré sur votre tableau de bord instantanément !",
    ],
  },
  {
    id: "booking",
    title: "Prise de rendez-vous et réservation de services",
    subtitle: "Remplissez votre agenda plus rapidement",
    description:
      "Permettez à vos clients de consulter les disponibilités et de réserver directement via WhatsApp. Synchronisation avec votre agenda et envoi de rappels automatiques pour réduire les absences.",
    icon: CalendarCheck,
    animationSteps: [
      "Le client demande un créneau...",
      "L’IA vérifie les disponibilités en temps réel...",
      "Confirme la réservation en quelques secondes...",
      "Envoie un rappel avant la visite !",
    ],
  },
];

const AutomationsSection = () => {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [animationStep, setAnimationStep] = useState(0);

  const activeAutomation = automations.find((a) => a.id === activeTab)!;
  const IconComponent = activeAutomation.icon;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setAnimationStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= automations.find((a) => a.id === tabId)!.animationSteps.length) {
        clearInterval(interval);
      } else {
        setAnimationStep(step);
      }
    }, 800);
  };

  return (
    <section id="automations" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-subtle text-accent text-sm font-semibold mb-4">
            Les automatisations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Conçu pour le fonctionnement des entreprises marocaines
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment Zanoto AI gère les conversations répétitives et les tâches administratives
            qui ralentissent les PME marocaines au quotidien.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {automations.map((automation) => {
            const Icon = automation.icon;
            return (
              <button
                key={automation.id}
                onClick={() => handleTabChange(automation.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === automation.id
                    ? "bg-navy text-primary-foreground shadow-navy"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{automation.title}</span>
                <span className="sm:hidden">{automation.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="animate-fade-in" key={activeTab}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              {activeAutomation.title}
            </h3>
            <p className="text-accent font-semibold mb-4">
              {activeAutomation.subtitle}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {activeAutomation.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Aucun code requis</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Fonctionne avec WhatsApp Business</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Multilingue : darija, français, arabe</span>
              </div>
            </div>
          </div>

          {/* Animation Display */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8 min-h-[400px] flex flex-col items-center justify-center">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-teal flex items-center justify-center mb-8 animate-float">
                <IconComponent className="w-10 h-10 text-accent-foreground" />
              </div>

              {/* Animation Steps */}
              <div className="space-y-4 w-full max-w-sm">
                {activeAutomation.animationSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 ${
                      index <= animationStep
                        ? "bg-teal-subtle border border-accent/30 opacity-100 translate-x-0"
                        : "bg-muted opacity-40 translate-x-4"
                    }`}
                  >
                    {index <= animationStep ? (
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        index <= animationStep
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent/30" />
                <div className="w-3 h-3 rounded-full bg-accent/50" />
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationsSection;
