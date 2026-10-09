import Link from "next/link";
import { Project } from "@/types";

/** Large gradient tile for the featured project. */
export function FeaturedProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex min-h-[260px] flex-col justify-between rounded-[28px] bg-brand p-9 text-white md:col-span-6"
    >
      <div className="font-mono text-[13px] opacity-85">featured project</div>
      <div>
        <h3 className="mb-2.5 text-[34px] font-extrabold tracking-[-0.02em] sm:text-[38px]">
          {project.title}
        </h3>
        <p className="mb-4 max-w-[380px] text-base leading-relaxed opacity-90">
          {project.summary}
        </p>
        <div className="font-mono text-[13px]">
          {project.technologies.slice(0, 3).join(" · ")} →
        </div>
      </div>
    </Link>
  );
}

/** Smaller white tile for other projects. */
export function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex min-h-[260px] flex-col justify-between rounded-[28px] border border-line bg-card p-7 transition-colors hover:border-accent md:col-span-3"
    >
      <div className="h-14 w-14 rounded-2xl bg-chip" aria-hidden="true" />
      <div>
        <h3 className="mb-2 text-[22px] font-extrabold">{project.title}</h3>
        <p className="mb-3.5 text-[15px] leading-relaxed text-muted">{project.summary}</p>
        <div className="font-mono text-xs text-accent">
          {project.technologies.slice(0, 2).join(" · ")}
        </div>
      </div>
    </Link>
  );
}