import { Reveal } from "./Reveal";

const steps = [
  ["01", "Discover", "I understand the goals, audience and project needs."],
  ["02", "Plan", "I define the structure, direction and key ideas."],
  ["03", "Create", "I turn ideas into clear and engaging designs."],
  ["04", "Test", "I review, test and improve the experience."],
  ["05", "Refine", "I polish the final design based on feedback."],
];
export function Process() {
  return <section id="process" className="section-anchor mx-auto max-w-site px-5 py-24 md:px-8 md:py-36"><Reveal><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">Process</p><h2 className="editorial-title text-5xl font-semibold md:text-7xl">How I work</h2></Reveal><div className="mt-16 grid border-l border-black/10 md:grid-cols-5 md:border-l-0 md:border-t">{steps.map(([num, title, text], i) => <Reveal key={num} delay={i * 50} className="border-b border-black/10 py-7 pl-6 md:border-b-0 md:border-l md:pl-6 md:pt-7"><div className="text-xs font-medium text-black/35">{num}</div><h3 className="mt-12 text-xl font-semibold tracking-[-0.025em] md:mt-16">{title}</h3><p className="mt-2 text-sm leading-6 text-black/55">{text}</p></Reveal>)}</div></section>;
}
