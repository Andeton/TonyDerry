export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8" data-testid="section-about">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            I design and deploy custom GPT systems and multimodal pipelines that reduce time-to-market and unlock new revenue streams.
          </p>
        </div>
        <div className="space-y-6" data-testid="about-milestones">
          <h3 className="text-xl font-semibold text-foreground">Recent milestones (2024–2025)</h3>
          <ul className="space-y-3 text-sm md:text-base text-foreground/90">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Launched agentic platforms for both SMBs and enterprise.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Delivered RAG systems with agent monitoring and drift detection.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Implemented on-device inference and compliance workflows for the EU AI Act.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Built partner ecosystem integrations spanning ComfyUI, Notion AI, Runway, and NVIDIA NIM.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border/60 p-6" data-testid="about-values">
          <h3 className="text-xl font-semibold text-foreground mb-4">Values</h3>
          <ul className="space-y-3 text-sm md:text-base text-foreground/90">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Ethical data sourcing
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Carbon-aware infrastructure
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Transparency and long-term outcomes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
