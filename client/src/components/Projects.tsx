import { Cog, Image, MessageSquare } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      icon: Cog,
      title: "n8n Workflows",
      subtitle: "Automation pipelines for AI experiments.",
      description: "I design and share n8n workflows that connect GPTs, image/video generators, and external tools into one seamless automation system."
    },
    {
      icon: Image,
      title: "ComfyUI Creations",
      subtitle: "Advanced image and animation workflows.",
      description: "From surreal visuals to practical templates, I develop ComfyUI setups that let creators move beyond presets and unlock new levels of creativity."
    },
    {
      icon: MessageSquare,
      title: "Custom GPTs",
      subtitle: "AI assistants for real use cases.",
      description: "Tailored GPT agents designed for workflow building, automation guidance, and creative ideation. Each assistant is practical, accessible, and monetizable."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-muted/30" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-foreground">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
