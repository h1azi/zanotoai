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
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Terms of Use
          </h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: January 1, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Agreement to Terms
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms of Use constitute a legally binding agreement
                between you and Zanoto AI Solutions. By accessing or using our
                website and services, you agree that you have read, understood,
                and agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Service Description
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Zanoto AI Solutions provides AI-powered automation tools for
                Moroccan businesses, including WhatsApp lead capture, document
                collection workflows, appointment booking, and customer
                follow-up automation. You are granted a non-exclusive,
                non-transferable right to use the services for your business
                purposes. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  Reverse engineer, decompile, or attempt to derive the source
                  code of our technology.
                </li>
                <li>
                  Use our services to send spam, harassment, or unlawful
                  content through WhatsApp or any other channel.
                </li>
                <li>
                  Scrape, crawl, or use automated scripts to harvest data from
                  our platform without written consent.
                </li>
                <li>
                  Use the platform to process data in violation of Moroccan Law
                  No. 09-08 or any other applicable data protection law.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Disclaimer
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Our services are provided for business automation and
                administrative support purposes only. Zanoto AI Solutions is
                not a licensed professional advisor. Our AI tools do not
                constitute legal, financial, or other professional
                advice. You remain responsible for compliance with all laws and
                regulations applicable to your business.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Limitation of Liability
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                To the maximum extent permitted by law, Zanoto AI Solutions
                shall not be liable for any indirect, incidental, special, or
                consequential damages resulting from the use or inability to
                use our services. All services are provided "As Is" without
                warranties of any kind, except as expressly stated in a signed
                service agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Indemnification
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                You agree to defend and indemnify Zanoto AI Solutions against
                any claims, damages, or costs arising from your misuse of the
                platform or your violation of these terms or the rights of any
                third party.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Governing Law
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of the Kingdom of Morocco. Any disputes arising
                under these terms shall be subject to the exclusive
                jurisdiction of the courts of Morocco.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
