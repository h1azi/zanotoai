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
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: January 1, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Introduction and Scope
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Zanoto AI Solutions ("the Company," "we," "us," or "our")
                provides AI-powered automation for Moroccan businesses. This
                Privacy Policy explains how we collect, use, store, and protect
                personal data when you use our website or services. By using our
                platform, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Data Collection
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collect information through direct input (contact forms,
                booking requests), automated tracking technologies (cookies,
                analytics), and our WhatsApp automation services. This may
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Identifying Information:</strong> full names, business
                  names, and professional roles.
                </li>
                <li>
                  <strong>Contact Data:</strong> email addresses, phone
                  numbers, and business locations in Morocco.
                </li>
                <li>
                  <strong>Technical Metadata:</strong> IP addresses, browser
                  type, device information, and usage patterns.
                </li>
                <li>
                  <strong>Service Data:</strong> WhatsApp messages, documents,
                  and appointment data processed through our automations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                How We Use Your Data
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We process personal data to provide, maintain, and improve our
                services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Delivering WhatsApp lead capture and customer support automation.</li>
                <li>Collecting, organizing, and storing documents on your behalf.</li>
                <li>Sending appointment reminders and follow-up messages.</li>
                <li>Providing customer support and service updates.</li>
                <li>Complying with Moroccan legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Information Sharing
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We do not sell personal data. We share information only with
                trusted service providers necessary to operate our platform, or
                when required by Moroccan law or a valid legal request. All
                service providers are contractually bound to protect your data.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Security and Retention
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We use industry-standard administrative, technical, and
                physical safeguards to protect personal data. Data is retained
                only as long as needed to provide our services or as required by
                Moroccan law, including Law No. 09-08 on data protection.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Your Rights
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Depending on applicable law, you may have the right to access,
                correct, or delete your personal data. For any privacy-related
                requests, please contact{" "}
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
