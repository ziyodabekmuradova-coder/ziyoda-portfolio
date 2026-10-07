import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="section-anchor border-y border-black/10 bg-white/55"
    >
      <div className="mx-auto grid max-w-site gap-14 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-[1fr_.72fr] lg:gap-24">
        
        {/* LEFT */}
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
            About
          </p>

          <h2 className="editorial-title max-w-2xl text-5xl font-semibold md:text-7xl">
            A little about me
          </h2>

          <div className="mt-9 max-w-xl space-y-5 text-base leading-7 text-black/60 md:text-lg md:leading-8">
            <p>
              Hi, I&apos;m Ziyoda — a multidisciplinary designer with 4+ years
              of experience.
            </p>

            <p>
              I design digital products with a strong focus on usability,
              visual clarity and meaningful user experiences.
            </p>

            <p>
              I enjoy working on educational platforms, mobile applications,
              websites and digital products — from the first idea and user
              flow to the final interface.
            </p>
          </div>

          <div className="mt-10 flex gap-12 border-t border-black/10 pt-5 text-sm">
            <div>
              <div className="text-black/40">Based in</div>
              <div className="mt-1 font-medium">Uzbekistan</div>
            </div>

            <div>
              <div className="text-black/40">Working</div>
              <div className="mt-1 font-medium">Globally</div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — PORTRAIT */}
        <Reveal delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[#e8e9e6]">
            <img
              src="/profile.jpg"
              alt="Ziyoda Usman"
              className="h-full w-full object-cover object-[58%_center]"
            />

            {/* subtle frame */}
            <div className="pointer-events-none absolute inset-6 rounded-[26px] border border-white/40" />

            {/* label */}
            <div className="absolute bottom-7 left-7 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/60 backdrop-blur-sm">
              Product Designer
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}