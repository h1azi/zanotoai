import { MessageCircle, FileCheck, Globe, Users } from "lucide-react";

const values = [
  {
    icon: MessageCircle,
    title: "WhatsApp-First",
    description:
      "Moroccans live on WhatsApp. Every automation we build starts where your customers already are.",
  },
  {
    icon: FileCheck,
    title: "Document Flows That Work",
    description:
      "Stop chasing clients for files. We turn document collection into a simple WhatsApp conversation.",
  },
  {
    icon: Globe,
    title: "Built for Local Languages",
    description:
      "Fluent automation in Darija, French, and Modern Standard Arabic — the way your customers actually talk.",
  },
  {
    icon: Users,
    title: "Empowering Moroccan Teams",
    description:
      "We don’t replace your people — we remove the busywork so they can focus on sales and service.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-subtle text-accent text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Automation Built for{" "}
              <span className="text-accent">Moroccan Business Reality</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We started Zanoto AI because we saw Moroccan business owners
                drowning in manual follow-ups, missed WhatsApp leads, and
                endless document chasing. Sales were slipping through the cracks
                while teams spent hours on repetitive admin.
              </p>
              <p>
                Our mission is simple: use practical AI to handle the
                conversations, reminders, and paperwork that slow Moroccan SMBs
                down. We believe the best technology disappears into your
                workflow and just gets results.
              </p>
              <p className="font-semibold text-foreground">
                Today we help service businesses, clinics, real-estate agencies,
                salons, and e-commerce sellers across Morocco turn WhatsApp into
                their most reliable growth channel.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 border border-border hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
