import { ArrowUpRight } from "lucide-react";
import type { Project } from "../projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`group ${project.featured ? "" : ""}`}>
      <a href="#contact" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4">
        <div className={`overflow-hidden rounded-[28px] ${compact ? "aspect-[1.25/1]" : "aspect-[1.42/1]"}`}>
          <ProjectVisual src={project.image} title={project.title} tone={project.tone} compact={compact} />
        </div>
        <div className="flex items-start justify-between gap-5 pt-5">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-black/45"><span>{project.number}</span><span>·</span><span>{project.year}</span></div>
            <h3 className="text-2xl font-semibold tracking-[-0.035em] transition group-hover:text-electric md:text-3xl">{project.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55">{project.description}</p>
            <p className="mt-3 text-xs font-medium text-black/45">{project.category}</p>
          </div>
          <span className="mt-1 flex shrink-0 items-center gap-1 text-sm font-medium text-black/55 transition group-hover:translate-x-0.5 group-hover:text-black">View project <ArrowUpRight size={15} /></span>
        </div>
      </a>
    </article>
  );
}
