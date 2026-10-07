import { ArrowUpRight } from "lucide-react";
import { projects } from "../projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  const featured = projects.slice(0, 4);
  const remaining = projects.slice(4);
  return (
    <section id="work" className="section-anchor mx-auto max-w-site px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 border-t border-black/10 pt-7 md:flex-row md:items-end">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">Selected work</p><h2 className="editorial-title max-w-3xl text-5xl font-semibold md:text-7xl">A selection of digital products, interfaces and visual experiences.</h2></div>
          <a href="#contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition hover:text-electric">Start a project <ArrowUpRight size={16} /></a>
        </div>
      </Reveal>
      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-24">
        {featured.map((project, i) => <Reveal key={project.title} delay={i * 60}><ProjectCard project={project} /></Reveal>)}
      </div>
      <div className="mt-24 grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {remaining.map((project, i) => <Reveal key={project.title} delay={i * 50}><ProjectCard project={project} compact /></Reveal>)}
      </div>
    </section>
  );
}
