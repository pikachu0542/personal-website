import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { Tag, TagList } from "@/components/ui/Tag";
import { ProjectLinks } from "@/components/projects/ProjectLinks";

/**
 * Card used on the /projects grid.
 * The whole card is clickable via a stretched link on the title (after:absolute inset-0).
 * The external links sit above it (z-10), so we never nest one <a> inside another.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { thumbnail } = project;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-card transition-colors focus-within:border-accent hover:border-accent">
      <div className="relative aspect-[3/2] w-full bg-chip">
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="text-[22px] font-extrabold">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-[15px] leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-auto flex flex-col gap-4 pt-2">
          <TagList>
            {project.technologies.slice(0, 4).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>
          <ProjectLinks links={project.links} variant="compact" />
        </div>
      </div>
    </article>
  );
}