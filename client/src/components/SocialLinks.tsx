import { ExternalLink, MessageCircle, Linkedin, Coffee } from "lucide-react";
import KoFiWidget from "@/components/KoFiWidget";

export default function SocialLinks() {
  const links = [
    {
      name: "Telegram",
      description: "@TonyDerry",
      url: "https://t.me/TonyDerry",
      icon: MessageCircle,
    },
    {
      name: "LinkedIn",
      description: "Connect professionally",
      url: "https://www.linkedin.com/in/ai-gen-td/",
      icon: Linkedin,
    },
    {
      name: "Ko-fi",
      description: "Support the studio",
      url: "https://ko-fi.com/tonyderry",
      icon: Coffee,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8" data-testid="section-social">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Get in Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Email, Telegram, LinkedIn, or Ko-fi — pick the channel that fits your next collaboration.
          </p>
        </div>
        <KoFiWidget />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 flex-wrap">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base md:text-lg hover-elevate px-6 py-4 rounded-md border border-border transition-all duration-200"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                <Icon className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">{link.name}</div>
                  <div className="text-sm text-muted-foreground">{link.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
