import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "E-commerce Startup",
    role: "Aug 2025",
    quote:
      "With Tony we accelerated time-to-market by 37% and doubled Instagram engagement.",
  },
  {
    name: "FinTech Partner",
    role: "Jul 2025",
    quote:
      "The built-in compliance automation helped us pass SOC2 without stress.",
  },
  {
    name: "Education Platform",
    role: "Oct 2025",
    quote:
      "Agentic workflows reduced manual ops by 18 hours a week.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8" data-testid="section-testimonials">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Social Proof</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="bg-gradient-to-r from-[hsl(var(--primary)/1)] to-[hsl(var(--accent)/1)] bg-clip-text text-transparent">Late-2025 results from real partners</span>
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--foreground)/0.8)]">
            Rotating clips and spotlight reels are available on request. Here are the highlights in their own words.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {testimonials.map((testimonial) => {
            const fallback =
              testimonial.name
                .match(/[A-Za-z0-9]/g)
                ?.slice(0, 2)
                .join("")
                .toUpperCase() ?? "TD";

            return (
              <Card
                key={testimonial.name}
                className="h-full border-border/70"
                data-testid={`testimonial-${testimonial.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <CardContent className="flex flex-col gap-6 p-6">
                  <p className="text-base text-[hsl(var(--foreground)/0.9)] leading-relaxed">“{testimonial.quote}”</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
