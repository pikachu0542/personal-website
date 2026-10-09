import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects built by ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <section>
        <div className="mb-3 font-mono text-[13px] text-accent">// projects</div>
        <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
          Things I&apos;ve built
        </h1>
        <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-muted">
          A selection of projects. Click any of them for the full story.
        </p>
      </section>

      {projects.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </section>
      ) : (
        <p className="text-muted">Projects coming soon.</p>
      )}
    </Container>
  );
}