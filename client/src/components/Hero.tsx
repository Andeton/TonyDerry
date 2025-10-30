import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/AI_neural_network_hero_background_41339854.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <div className="relative bg-white/5 dark:bg-black/70 backdrop-blur-md rounded-3xl p-8 md:p-12 space-y-6 border border-border/20 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
            <Sparkles className="h-4 w-4" />
            Agentic Workflows · Custom GPTs · Multimodal Automation · Compliance Ready
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
            Tony Derry — AI Creator &amp; Orchestrator
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            I design agentic systems, multimodal pipelines, and compliance-ready automations that monetize your ideas around the clock.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base text-[hsl(var(--foreground)/0.75)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              🚀 Automation that monetizes 24/7
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              🔒 SOC2 / EU AI Act–ready
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              ⚡ 42% faster launch cycles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
