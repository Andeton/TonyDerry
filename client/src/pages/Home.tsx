import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <SocialLinks />
      <Footer />
    </div>
  );
}
