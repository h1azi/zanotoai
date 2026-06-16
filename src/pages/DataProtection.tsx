import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DataProtection = () => {
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
            Protection des données
          </h1>
          <p className="text-muted-foreground mb-12">
            Date d’entrée en vigueur : 1er janvier 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Notre engagement envers vos données
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Zanoto AI Solutions (« la Société », « nous », « notre » ou « nos ») s’engage
                à protéger les données personnelles de ses utilisateurs et de leurs clients.
                Nous traitons les données conformément à la loi marocaine n° 09-08 relative
                à la protection des personnes physiques à l’égard du traitement des données
                à caractère personnel, ainsi qu’aux normes internationales applicables.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Données que nous traitons
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Dans le cadre de la fourniture de nos services d’automatisation WhatsApp, de
                collecte de documents et de réservation de rendez-vous, nous pouvons traiter
                :
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Informations de contact :</strong> noms, numéros de téléphone,
                  adresses e-mail et informations sur l’entreprise.
                </li>
                <li>
                  <strong>Données de conversation :</strong> messages et pièces jointes
                  échangés via l’automatisation WhatsApp Business.
                </li>
                <li>
                  <strong>Documents :</strong> fichiers téléchargés par les utilisateurs finaux
                  pour vérification, intégration ou archivage.
                </li>
                <li>
                  <strong>Données techniques :</strong> adresses IP, informations sur le
                  navigateur et journaux d’utilisation pour maintenir la sécurité et les
                  performances du service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Comment nous utilisons les données
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nous utilisons les données personnelles uniquement pour fournir et améliorer
                nos services d’automatisation :
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Assurer la capture de leads et les réponses sur WhatsApp.</li>
                <li>Traiter, organiser et stocker des documents en votre nom.</li>
                <li>Envoyer des rappels de rendez-vous et des messages de relance.</li>
                <li>Assurer la sécurité, la fiabilité et le support du système.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Sécurité et conservation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Nous mettons en œuvre des mesures administratives, techniques et
                organisationnelles pour protéger les données personnelles contre tout accès,
                altération, divulgation ou destruction non autorisés. Les données sont
                conservées uniquement pendant la durée nécessaire aux finalités décrites
                dans cette politique ou conformément à la législation marocaine.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Vos droits
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Conformément à la loi marocaine n° 09-08, les personnes disposent de droits
                concernant leurs données personnelles, notamment l’accès, la rectification et
                la suppression lorsque cela est applicable. Pour exercer vos droits ou poser
                des questions sur nos pratiques de protection des données, veuillez contacter{" "}
                <a
                  href="mailto:admin@zanotoai.com"
                  className="text-teal hover:underline font-medium"
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

export default DataProtection;
