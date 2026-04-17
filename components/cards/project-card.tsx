import type { PortfolioItem } from "@/lib/types";

type ProjectCardProps = {
  project: PortfolioItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
        {project.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
      <p className="mt-5 text-sm font-semibold text-foreground">{project.results}</p>
      <button
        type="button"
        className="mt-6 text-sm font-medium text-brand transition-colors duration-300 group-hover:text-blue-500"
        aria-label={`Open ${project.title} project details`}
      >
        {project.linkLabel} →
      </button>
    </article>
  );
}
