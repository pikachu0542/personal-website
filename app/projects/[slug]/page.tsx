import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Tag, TagList } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ImageCarousel } from "@/components/projects/ImageCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectDescription } from "@/components/projects/ProjectDescription";

// In Next.js 15+, route params arrive as a Promise.
type Props = { params: Promise<{ slug: string }> };

// Pre-build one page per project at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { links, thumbnail, images } = project;
  const buttonBase = "rounded-[14px] px-6 py-3.5 text-[15px] font-extrabold";

  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <Link href="/projects" className="text-[15px] font-extrabold text-accent">
        ← All projects
      </Link>

      {/* Title + meta */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="mb-3 font-mono text-[13px] text-accent">// project</div>
          <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[998px] text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>

        {(links?.live || links?.repo) && (
          <div className="flex flex-wrap gap-3">
            <ProjectLinks links={project.links} variant="buttons" />
          </div>
        )}
      </section>

      <ImageCarousel images={[thumbnail, ...(images ?? [])]} />
      
      {/* Description */}
      <section className="flex flex-col gap-8">
        <SectionHeader label="// the story" title="About this project" />
        <div className="rounded-[28px] border border-line bg-card p-8 sm:p-12">
          <ProjectDescription markdown={project.description ?? project.summary} />
        </div>
      </section>

      {/* Technologies */}
      <section className="flex flex-col gap-8">
        <SectionHeader label="// stack" title="Built with" />
        <div className="rounded-[28px] border border-line bg-card p-8 sm:p-10">
          <TagList gap="gap-3">
              {project.technologies.map((t) => (
                <Tag key={t} size="lg">{t}</Tag>
              ))}
          </TagList>
        </div>
      </section>
    </Container>
  );
}