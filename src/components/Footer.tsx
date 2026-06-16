import { ArrowRight, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Capture de leads WhatsApp", href: "#automations" },
    { label: "Collecte de documents", href: "#automations" },
    { label: "Appointment Booking", href: "#automations" },
    { label: "Tarifs", href: "#pricing" },
  ],
  company: [
    { label: "À propos de nous", href: "#about" },
    { label: "Clients fondateurs", href: "#founding" },
    { label: "Contact", href: "#meeting" },
  ],
  legal: [
    { label: "Politique de confidentialité", href: "/privacy-policy" },
    { label: "Conditions d’utilisation", href: "/terms-of-service" },
    { label: "Protection des données", href: "/data-protection" },
  ],
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Trial Banner */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
                <Shield className="w-5 h-5 text-teal" />
                <span className="font-semibold text-sm">Essai sans stress de 14 jours</span>
              </div>
              <p className="text-primary-foreground/80 hidden sm:block">
                Découvrez tout le potentiel de Zanoto AI sans risque
              </p>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => scrollToSection("#meeting")}
            >
              Commencer
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">Z</span>
              </div>
              <span className="font-serif text-xl font-semibold">Zanoto AI</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Automatisation IA pour les entreprises marocaines. Nous transformons WhatsApp en
              votre meilleur canal de vente et de support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">admin@zanotoai.com</span>
              </div>
            </div>
          </div>

          {/* Produit Links */}
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise Links */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentions légales Links */}
          <div>
            <h4 className="font-semibold mb-4">Mentions légales</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Zanoto AI. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
