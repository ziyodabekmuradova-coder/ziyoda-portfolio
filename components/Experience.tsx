import { Reveal } from "./Reveal";

const experience = [
  ["UX/UI & Graphic Designer", "Ziyoly.uz", "Present"],
  ["Graphic Designer", "Mathschool", "2024"],
  ["Graphic Designer", "Topskill", "Sep 2022 — Nov 2023"],
  ["Graphic Designer", "AIF Agency", "Nov 2021 — Aug 2022"],
];

export function Experience() {
  return (
    <section className="border-y border-black/10 bg-white/55">
      <div className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
            Experience
          </p>

          <h2 className="editorial-title text-5xl font-semibold md:text-7xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-black/10">
          {experience.map(([role, company, date], i) => (
            <Reveal key={company} delay={i * 70}>
              <div className="grid min-h-[88px] items-center border-b border-black/10 py-6 md:grid-cols-[2fr_1fr_1fr] md:gap-8">
                <div className="text-xl font-semibold tracking-[-0.025em]">
                  {role}
                </div>

                <div className="text-sm text-black/55">
                  {company}
                </div>

                <div className="text-xs font-medium uppercase tracking-[0.12em] text-black/40 md:text-right">
                  {date}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}