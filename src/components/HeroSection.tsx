import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const heroFeatures = [
  "WhatsApp-first automation",
  "Document collection on autopilot",
  "Speaks Darija, French & Arabic",
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="animate-fade-up" />

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your WhatsApp,{" "}
            <span className="text-gradient-teal bg-gradient-to-r from-teal to-teal-light">
              Turned Into a Sales Machine
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Stop losing Moroccan customers to missed messages and paperwork delays.
            Zanoto AI automates WhatsApp conversations, document collection, and
            follow-ups — so you can focus on running your business.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#meeting")}
              className="group"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("#automations")}
            >
              See How It Works
            </Button>
          </div>

          <div
            className="flex flex-wrap gap-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {heroFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-light" />
                <span className="text-sm font-medium text-teal-light">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
