import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8" data-testid="section-cta">
      <div className="relative isolate overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/90 via-primary to-primary-foreground/20 p-8 md:p-16 text-center text-primary-foreground shadow-xl">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Next steps to explore</h2>
          <p className="text-base md:text-lg opacity-80">
            Choose how you want to engage. Each tool surfaces personalized recommendations so you can move from curiosity to launch-ready within days.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-left text-primary-foreground">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-full flex-col items-start gap-3 rounded-2xl bg-background/20 px-6 py-6 text-left"
              data-testid="cta-roi-calculator"
            >
              <a href="https://cal.com/tonyderry/roi-calculator" target="_blank" rel="noopener noreferrer">
                <span className="text-lg font-semibold">📊 Interactive ROI Calculator</span>
                <span className="text-sm font-normal opacity-80">
                  Model projected savings and revenue impact across your funnels.
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-full flex-col items-start gap-3 rounded-2xl bg-background/20 px-6 py-6 text-left"
              data-testid="cta-readiness-assessment"
            >
              <a href="https://cal.com/tonyderry/readiness-assessment" target="_blank" rel="noopener noreferrer">
                <span className="text-lg font-semibold">✅ Readiness Assessment Tool</span>
                <span className="text-sm font-normal opacity-80">
                  Benchmark governance, data assets, and team workflows against best practice.
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-full flex-col items-start gap-3 rounded-2xl bg-background/20 px-6 py-6 text-left"
              data-testid="cta-download-pdf"
            >
              <a href="https://drive.google.com/uc?export=download&id=5PromptFrameworks" target="_blank" rel="noopener noreferrer">
                <span className="text-lg font-semibold">📥 Download “5 Prompt Frameworks”</span>
                <span className="text-sm font-normal opacity-80">
                  Get the playbook that doubles engagement across email, socials, and community drops.
                </span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-sm md:text-base opacity-80">
            Join the community newsletter for agentic workflow breakdowns, launch recaps, and compliance templates.
          </p>
        </div>
        <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-foreground/30 blur-3xl" />
      </div>
    </section>
  );
}
