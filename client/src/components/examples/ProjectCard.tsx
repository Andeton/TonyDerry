import ProjectCard from '../ProjectCard';
import { Cog } from 'lucide-react';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProjectCard
        icon={Cog}
        title="Education Platform"
        tag="Education"
        details={[
          { label: "Stack", value: "OpenAI o1 + RAG + Notion AI" },
          { label: "Compliance", value: "EU AI Act–ready" },
          { label: "Business lift", value: "+58% MQL-to-demo conversions" },
        ]}
      />
    </div>
  );
}
