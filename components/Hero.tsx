import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const email =
    process.env.NEXT_PUBLIC_EMAIL || "ziyodabekmuradova@gmail.com";

  return (
    <section
      id="top"
      className="mx-auto min-h-[calc(100svh-72px)] max-w-site px-5 py-16 md:px-8 md:py-20"
    >
      <div className="grid min-h-[calc(100svh-112px)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 animate-reveal-up">
            <span className="h-2 w-2 rounded-full bg-electric" />
            Product Designer · UI/UX
          </div>

       <h1 className="editorial-title max-w-[850px] text-[clamp(3.5rem,6.2vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em] animate-reveal-up [animation-delay:100ms]">
  I turn{" "}
  <span className="text-[#3157D5]">ideas</span> into
  <br />
  things people <span className="text-[#3157D5]">love.</span>
</h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8 animate-reveal-up [animation-delay:180ms]">
            Hi, I&apos;m Ziyoda — a multidisciplinary designer with 4+ years
            of experience. I work across UI/UX, digital products, branding,
            graphic design and packaging, turning ideas into clear and
            engaging experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-reveal-up [animation-delay:260ms]">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              View my work
              <ArrowDown size={16} />
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3.5 text-sm font-medium transition hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-xs font-medium text-black/50 animate-reveal-up [animation-delay:340ms]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#41B883]" />
            Available for selected projects
          </div>
        </div>

        {/* RIGHT — PORTRAIT */}
        <div
          className="relative hidden h-[620px] items-center justify-center lg:flex"
          aria-hidden="true"
        >
          {/* Blue circle */}
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 translate-x-8 translate-y-2 rounded-full bg-[#DCE6FF] animate-float" />

          {/* Blue orbit */}
          <div className="absolute left-1/2 top-1/2 h-[370px] w-[220px] -translate-x-1/2 -translate-y-1/2 translate-x-8 translate-y-2 rotate-[25deg] rounded-[50%] border border-[#3157D5]/30" />

          {/* Portrait */}
          <div className="relative z-10 h-[500px] w-[380px] -translate-y-3 overflow-hidden rounded-[190px_190px_32px_32px] bg-black shadow-[0_35px_90px_rgba(0,0,0,0.16)]">
            <img
              src="/profile.jpg"
              alt="Ziyoda Usman"
              className="h-full w-full object-cover object-[58%_center]"
            />
          </div>

          {/* Design card */}
          <div className="absolute left-[5%] top-[14%] z-20 w-40 rotate-[-7deg] rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] animate-[float_6s_ease-in-out_infinite]">
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCE6FF] text-xs font-bold text-[#3157D5]">
                ✦
              </span>

              <ArrowUpRight size={14} className="text-black/40" />
            </div>

            <p className="mt-4 text-sm font-semibold">Design</p>

            <p className="mt-1 text-[11px] leading-4 text-black/45">
              UI/UX · Branding
              <br />
              Graphic · Packaging
            </p>
          </div>

          {/* Experience card */}
          <div className="absolute right-[4%] top-[10%] z-20 w-36 rotate-[6deg] rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] animate-[float_7s_ease-in-out_infinite]">
            <div className="flex items-end gap-1">
              <span className="h-4 w-2 rounded-full bg-[#3157D5]" />
              <span className="h-7 w-2 rounded-full bg-[#3157D5]/60" />
              <span className="h-10 w-2 rounded-full bg-[#3157D5]/35" />
            </div>

            <p className="mt-4 text-2xl font-semibold">4+</p>

            <p className="text-[11px] text-black/45">
              years
              <br />
              experience
            </p>
          </div>

          {/* Digital products card */}
          <div className="absolute bottom-[14%] left-[6%] z-20 w-44 rotate-[5deg] rounded-2xl bg-black p-4 text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)] animate-[float_5s_ease-in-out_infinite]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                Work
              </span>

              <ArrowUpRight size={14} />
            </div>

            <p className="mt-7 text-lg font-semibold">
              Digital products
            </p>

            <p className="mt-1 text-[11px] text-white/45">
              Simple · Useful · Clear
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}