import { useState } from "react";
import { GraduationCap, Sparkles, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      icon: GraduationCap,
      title: "Education Platform",
      tag: "Education",
      details: [
        { label: "Stack", value: "OpenAI o1 + RAG + Notion AI" },
        { label: "Compliance", value: "EU AI Act–ready" },
        { label: "Business lift", value: "+58% MQL-to-demo conversions" },
      ],
    },
    {
      icon: Sparkles,
      title: "Creator Economy",
      tag: "Creator Economy",
      details: [
        { label: "Stack", value: "Llama 3.2 + MidJourney + Telegram bots" },
        { label: "Outcome", value: "Saved 20 hours per week in content ops" },
      ],
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      tag: "E-commerce",
      details: [
        { label: "Stack", value: "Runway Gen-3 + ComfyUI pipelines" },
        { label: "Outcome", value: "37% faster time-to-market" },
      ],
    },
  ];

  const filters = ["All", "Education", "E-commerce", "Creator Economy"] as const;
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.tag === activeFilter,
  );

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-muted/30" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Operational wins with compliance baked in</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Benchmark stacks, compliance notes, and measurable outcomes. Toggle the filters to surface the launch most relevant
            to your roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3" data-testid="project-filter-group">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
                data-testid={`project-filter-${filter.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              tag={project.tag}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
