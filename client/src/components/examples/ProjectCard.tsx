import ProjectCard from '../ProjectCard';
import { Cog } from 'lucide-react';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProjectCard
        icon={Cog}
        title="n8n Workflows"
        subtitle="Automation pipelines for AI experiments."
        description="I design and share n8n workflows that connect GPTs, image/video generators, and external tools into one seamless automation system."
      />
    </div>
  );
}
