import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/AI_neural_network_hero_background_41339854.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Tony Derry — AI Creator · Custom GPTs · Visual Automation
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Building custom GPTs, AI visuals, and automation workflows to make advanced AI accessible for creators and entrepreneurs.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary/90 hover:bg-primary backdrop-blur-md border border-primary-border text-lg px-8 py-6 h-auto"
          data-testid="button-kofi-support"
        >
          <a 
            href="https://ko-fi.com/tonyderry" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Support on Ko-fi
          </a>
        </Button>
      </div>
    </section>
  );
}
