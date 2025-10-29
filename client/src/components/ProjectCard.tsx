import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export default function ProjectCard({ icon: Icon, title, subtitle, description }: ProjectCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-200" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <Icon className="w-12 h-12 mb-6 text-primary" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {subtitle}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
