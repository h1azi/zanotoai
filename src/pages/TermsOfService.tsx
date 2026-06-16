import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour à l’accueil
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Conditions d’utilisation
          </h1>
          <p className="text-muted-foreground mb-12">
            Date d’entrée en vigueur : 1er janvier 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Acceptation des conditions
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Les présentes conditions d’utilisation constituent un contrat juridiquement
                contraignant entre vous et Zanoto AI Solutions. En accédant ou en utilisant
                notre site web et nos services, vous reconnaissez avoir lu, compris et
                accepté ces conditions dans leur intégralité.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Description des services
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Zanoto AI Solutions fournit des outils d’automatisation basés sur l’IA aux
                entreprises marocaines, notamment la capture de leads WhatsApp, les
                workflows de collecte de documents, la réservation de rendez-vous et
                l’automatisation des relances client. Nous vous accordons un droit
                d’utilisation non exclusif et non transférable de nos services à des fins
                commerciales. Vous acceptez de ne pas :
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  Faire de l’ingénierie inverse, décompiler ou tenter de dériver le code
                  source de notre technologie.
                </li>
                <li>
                  Utiliser nos services pour envoyer du spam, du harcèlement ou tout
                  contenu illicite via WhatsApp ou tout autre canal.
                </li>
                <li>
                  Extraire, crawler ou utiliser des scripts automatisés pour récupérer des
                  données de notre plateforme sans consentement écrit.
                </li>
                <li>
                  Utiliser la plateforme pour traiter des données en violation de la loi
                  marocaine n° 09-08 ou de toute autre loi applicable sur la protection des
                  données.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Clause de non-responsabilité
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Nos services sont fournis à des fins d’automatisation commerciale et de
                support administratif uniquement. Zanoto AI Solutions n’est pas un
                conseiller professionnel agréé. Nos outils d’IA ne constituent pas des
                conseils juridiques, financiers ou autres. Vous restez responsable du
                respect de l’ensemble des lois et réglementations applicables à votre
                activité.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Dans la mesure maximale autorisée par la loi, Zanoto AI Solutions ne pourra
                être tenu responsable des dommages indirects, accessoires, spéciaux ou
                consécutifs résultant de l’utilisation ou de l’impossibilité d’utiliser nos
                services. Tous les services sont fournis « en l’état » sans garantie
                d’aucune sorte, sauf indication contraire dans un contrat de service signé.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Indemnisation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Vous acceptez de défendre et d’indemniser Zanoto AI Solutions contre toute
                réclamation, dommage ou coût découlant de votre mauvaise utilisation de la
                plateforme, de votre violation des présentes conditions ou des droits d’un
                tiers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Droit applicable
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Les présentes conditions sont régies et interprétées conformément aux lois
                du Royaume du Maroc. Tout litige découlant des présentes conditions sera
                soumis à la compétence exclusive des tribunaux marocains.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
