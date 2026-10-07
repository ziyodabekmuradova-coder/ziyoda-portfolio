import { Reveal } from "./Reveal";

const capabilities = [
  [
    "01",
    "Product Design",
    "From idea to a complete digital product experience.",
  ],
  [
    "02",
    "UI/UX Design",
    "Clean, intuitive and user-friendly interfaces.",
  ],
  [
    "03",
    "Mobile Apps",
    "iOS and Android product experiences.",
  ],
  [
    "04",
    "Web Design",
    "Landing pages, websites and responsive interfaces.",
  ],
  [
    "05",
    "Design Systems",
    "Consistent components, styles and scalable UI.",
  ],
  [
    "06",
    "Visual Design",
    "Branding, social media and marketing visuals.",
  ],
];

export function Capabilities() {
  return (
    <section className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
          Capabilities
        </p>

        <h2 className="editorial-title text-5xl font-semibold md:text-7xl">
          What I do
        </h2>
      </Reveal>

      <div className="mt-16 grid border-t border-black/10 md:grid-cols-2">
        {capabilities.map(([num, title, text], i) => (
          <Reveal
            key={num}
            delay={i * 40}
            className="border-b border-black/10 py-7 md:even:border-l md:even:pl-8 md:odd:pr-8"
          >
            <div className="flex gap-5">
              <span className="text-xs text-black/35">{num}</span>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-black/55">
                  {text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-24 border-t border-black/10 pt-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                Tools
              </p>

              <p className="mt-3 text-sm text-black/50">
                Tools I use to design, create and explore ideas.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3 text-lg font-medium tracking-[-0.02em]">
              <span>Figma</span>
              <span>Adobe Illustrator</span>
              <span>ChatGPT</span>
              <span>Adobe Photoshop</span>
              <span>Claude</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}