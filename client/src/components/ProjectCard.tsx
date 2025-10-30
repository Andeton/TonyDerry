import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  tag: string;
  details: { label: string; value: string }[];
}

export default function ProjectCard({ icon: Icon, title, tag, details }: ProjectCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-200" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <Icon className="w-12 h-12 mb-6 text-primary" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
            {title}
          </h3>
          <span className="mb-4 inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {tag}
          </span>
          <ul className="space-y-3 text-sm md:text-base text-foreground/90">
            {details.map((detail) => (
              <li key={detail.label} className="leading-relaxed">
                <span className="font-semibold text-foreground">{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
