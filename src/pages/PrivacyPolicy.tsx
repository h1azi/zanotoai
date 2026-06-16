import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
            Politique de confidentialité
          </h1>
          <p className="text-muted-foreground mb-12">
            Date d’entrée en vigueur : 1er janvier 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Introduction et portée
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Zanoto AI Solutions (« la Société », « nous », « notre » ou « nos »)
                fournit une automatisation basée sur l’IA aux entreprises marocaines.
                Cette politique de confidentialité explique comment nous collectons,
                utilisons, stockons et protégeons les données personnelles lorsque vous
                utilisez notre site web ou nos services. En utilisant notre plateforme,
                vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Collecte de données
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nous collectons des informations via les formulaires de contact, les
                demandes de réservation, les technologies de suivi automatisé (cookies,
                analytiques) et nos services d’automatisation WhatsApp. Ces données
                peuvent inclure :
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Informations d’identification :</strong> nom complet, raison
                  sociale et fonction professionnelle.
                </li>
                <li>
                  <strong>Données de contact :</strong> adresse e-mail, numéro de
                  téléphone et localisation de l’entreprise au Maroc.
                </li>
                <li>
                  <strong>Métadonnées techniques :</strong> adresse IP, type de
                  navigateur, informations sur l’appareil et habitudes d’utilisation.
                </li>
                <li>
                  <strong>Données de service :</strong> messages WhatsApp, documents et
                  données de rendez-vous traités via nos automatisations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Utilisation de vos données
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nous traitons les données personnelles pour fournir, maintenir et
                améliorer nos services, notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Assurer la capture de leads et le support client sur WhatsApp.</li>
                <li>Collecter, organiser et stocker des documents en votre nom.</li>
                <li>Envoyer des rappels de rendez-vous et des messages de relance.</li>
                <li>Fournir une assistance client et des mises à jour de service.</li>
                <li>Respecter les obligations légales et réglementaires marocaines.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Partage d’informations
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Nous ne vendons pas de données personnelles. Nous ne partageons les
                informations qu’avec des prestataires de confiance nécessaires au
                fonctionnement de notre plateforme, ou lorsque la loi marocaine ou une
                demande légale valide l’exige. Tous nos prestataires sont contractuellement
                tenus de protéger vos données.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Sécurité et conservation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Nous utilisons des garanties administratives, techniques et physiques
                conformes aux normes de l’industrie pour protéger les données
                personnelles. Les données sont conservées uniquement pendant la durée
                nécessaire à la fourniture de nos services ou conformément à la loi
                marocaine, y compris la loi n° 09-08 relative à la protection des données.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Vos droits
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Selon la législation applicable, vous pouvez avoir le droit d’accéder à,
                de corriger ou de supprimer vos données personnelles. Pour toute demande
                relative à la confidentialité, veuillez contacter{" "}
                <a
                  href="mailto:admin@zanotoai.com"
                  className="text-teal hover:underline"
                >
                  admin@zanotoai.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
