export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8" data-testid="section-about">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          About Me
        </h2>
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            I'm Tony Derry, originally from Ukraine. After serving in the Territorial Defense Battalion, I moved with my family to the USA and began a new chapter. Following spinal surgery, I dedicated myself fully to AI — learning, experimenting, and creating.
          </p>
          <p>
            Today I work on custom GPTs, AI-driven visuals, animations, and automation tools. My mission is to share knowledge and build resources that make powerful AI tools practical and accessible for creators, entrepreneurs, and communities.
          </p>
        </div>
      </div>
    </section>
  );
}
