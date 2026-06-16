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
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Data Protection
          </h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: January 1, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Our Commitment to Your Data
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Zanoto AI Solutions (“the Company,” “we,” “us,” or “our") is
                committed to protecting the personal data of our users and their
                customers. We process data in accordance with Moroccan Law No.
                09-08 on the Protection of Individuals with Regard to the
                Processing of Personal Data, as well as applicable international
                standards.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                What Data We Process
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                In the course of providing WhatsApp automation, document
                collection, and appointment booking services, we may process:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Contact information:</strong> names, phone numbers,
                  email addresses, and business details.
                </li>
                <li>
                  <strong>Conversation data:</strong> messages and attachments
                  exchanged through WhatsApp Business automation.
                </li>
                <li>
                  <strong>Documents:</strong> files uploaded by end users for
                  verification, onboarding, or record-keeping.
                </li>
                <li>
                  <strong>Technical data:</strong> IP addresses, browser
                  information, and usage logs to maintain service security and
                  performance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                How We Use Data
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use personal data solely to deliver and improve our
                automation services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Operate WhatsApp lead capture and response workflows.</li>
                <li>Process, organize, and store documents on your behalf.</li>
                <li>Send appointment reminders and follow-up messages.</li>
                <li>Maintain system security, reliability, and support.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Data Security & Retention
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement administrative, technical, and organizational
                measures to protect personal data against unauthorized access,
                alteration, disclosure, or destruction. Data is retained only
                for as long as necessary to fulfill the purposes described in
                this policy or as required by Moroccan law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Your Rights
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Under Moroccan Law 09-08, individuals have rights regarding
                their personal data, including access, rectification, and
                deletion where applicable. To exercise your rights or ask
                questions about our data protection practices, please contact{" "}
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

export default DataProtection;
