import { LucideIcon, Bot, Workflow, ShieldCheck, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  proof: string;
  investment: string;
  timeline: string;
}

const services: Service[] = [
  {
    icon: Bot,
    title: "Agentic Platforms",
    description:
      "Design and orchestration of AI agents for operations and sales.",
    proof: "Deploys on-prem via NVIDIA NIM",
    investment: "from $3k",
    timeline: "2–4 weeks",
  },
  {
    icon: Workflow,
    title: "Multimodal Brand Systems",
    description:
      "Automation of visual, video, and text assets under one brand system.",
    proof: "Integrates Runway Gen-3, MidJourney, ComfyUI",
    investment: "from $2k",
    timeline: "1–3 weeks",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Automation",
    description:
      "AI solutions with built-in SOC2 / EU AI Act reporting packs.",
    proof: "Ships with automated compliance dashboards",
    investment: "from $5k",
    timeline: "4–6 weeks",
  },
  {
    icon: FlaskConical,
    title: "Synthetic Data Tooling",
    description:
      "Generation of synthetic datasets for training and evaluation.",
    proof: "Uses RAG + local models (Llama 3.2)",
    investment: "from $4k",
    timeline: "3–5 weeks",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-8" data-testid="section-services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Programs built for 2025 launches</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Each engagement bundles orchestration, compliance, and enablement so you ship confidently and scale responsibly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="h-full border-border/70"
                data-testid={`card-service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <p className="text-sm italic text-foreground/80">Proof: {service.proof}</p>
                  <div className="flex items-center justify-between text-sm font-medium text-foreground/90">
                    <span>Investment: {service.investment}</span>
                    <span>Timeline: {service.timeline}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
