import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactBanner } from "@/components/contact/ContactBanner";
import { FeaturedProjectTile, ProjectTile } from "@/components/projects/ProjectTile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { hobbies } from "@/data/hobbies";
import { formatDateRange } from "@/lib/utils";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

const tileLabel = "font-mono text-[13px] text-muted";
const tile = "flex flex-col gap-5 rounded-[28px] border border-line bg-card p-8 md:col-span-4";
const tileLink = "text-sm font-extrabold text-accent";

export default function HomePage() {
  // Big tile = first featured project; the next two fill the smaller tiles.
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p !== featured).slice(0, 2);

  const topSkills = skills.flatMap((c) => c.skills).slice(0, 8);
  const recentRoles = experience.slice(0, 2);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <Container className="flex flex-col gap-[72px] pb-12 pt-2">
      <Hero />

      {/* Projects */}
      <section className="flex flex-col gap-6">
        <SectionHeader
          label="// projects"
          title="Selected work"
          href="/projects"
          linkLabel="All projects"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {featured && <FeaturedProjectTile project={featured} />}
          {others.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Latest writing */}
      {latestPosts.length > 0 && (
        <section className="flex flex-col gap-6">
          <SectionHeader
            label="// blog"
            title="Latest writing"
            href="/blog"
            linkLabel="All posts"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* About */}
      <section className="flex flex-col gap-6">
        <SectionHeader label="// about" title="A bit more about me" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className={tile}>
            <div className={tileLabel}>skills</div>
            <ul className="flex flex-wrap gap-2">
              {topSkills.map((s) => (
                <li
                  key={s.name}
                  className="rounded-full bg-chip px-3.5 py-2 text-sm font-semibold text-accent"
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </article>

          <article className={tile}>
            <div className={tileLabel}>experience</div>
            {recentRoles.map((e) => (
              <div key={e.id}>
                <div className="text-[17px] font-extrabold">{e.role}</div>
                <div className="text-sm text-muted">
                  {e.organization} · {formatDateRange(e.dates)}
                </div>
              </div>
            ))}
            <Link href="/resume" className={tileLink}>
              Full résumé →
            </Link>
          </article>

          <article className={tile}>
            <div className={tileLabel}>off the clock</div>
            <div className="text-[28px] font-extrabold leading-tight tracking-[-0.02em]">
              {hobbies.map((h) => h.title).join(", ")}
            </div>
            <Link href="/hobbies" className={tileLink}>
              See hobbies →
            </Link>
          </article>
        </div>
      </section>

      <ContactBanner />
    </Container>
  );
}