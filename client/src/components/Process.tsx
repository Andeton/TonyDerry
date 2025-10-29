import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    description:
      "Needs analysis and opportunity mapping aligned to your growth targets and governance requirements.",
  },
  {
    title: "Design & Build",
    description:
      "Custom GPTs, automations, and multimodal pipelines crafted with iterative feedback loops.",
  },
  {
    title: "Compliance Integration",
    description:
      "SOC2 and EU AI Act artifacts, risk registers, and documentation produced alongside the build.",
  },
  {
    title: "Launch",
    description:
      "Cloud or on-prem deployment, change management, and enablement materials for your team.",
  },
  {
    title: "Monitoring & Improvement",
    description:
      "Drift detection, human feedback loops, and analytics dashboards to maintain performance.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-muted/30" data-testid="section-process">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">A transparent delivery playbook</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Five stages keep projects accountable to outcomes, governance, and long-term ownership.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 text-left">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-border/70 bg-background/80 p-8 shadow-sm" data-testid={`step-${step.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              <CheckCircle className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2 text-sm md:text-base text-muted-foreground">
          <p><span className="font-medium text-foreground">Tools:</span> Notion AI, Linear, Loom</p>
          <p><span className="font-medium text-foreground">Transparency:</span> You receive access to working artifacts at every step.</p>
        </div>
      </div>
    </section>
  );
}
