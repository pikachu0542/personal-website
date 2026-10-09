import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/resume/Timeline";
import { ExperienceItem } from "@/components/resume/ExperienceItem";
import { EducationItem } from "@/components/resume/EducationItem";
import { LeadershipItem } from "@/components/resume/LeadershipItem";
import { SkillGroup } from "@/components/resume/SkillGroup";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { leadership } from "@/data/leadership";
import { skills } from "@/data/skills";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Experience, education, leadership, and skills for ${site.name}.`,
};

export default function ResumePage() {
  return (
    <Container className="flex flex-col gap-[72px] pb-12 pt-2">
      {/* Page intro */}
      <section className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 font-mono text-[13px] text-accent">// resume</div>
          <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
            Experience &amp; education
          </h1>
        </div>
        {site.resumeUrl && (
          <a
            href={site.resumeUrl}
            download
            className="rounded-[14px] bg-accent px-6 py-3.5 text-[15px] font-extrabold text-on-accent"
          >
            Download PDF
          </a>
        )}
      </section>

      {experience.length > 0 && (
        <section className="flex flex-col gap-8">
          <SectionHeader label="// work" title="Experience" />
          <Timeline>
            {experience.map((e) => (
              <ExperienceItem key={e.id} entry={e} />
            ))}
          </Timeline>
        </section>
      )}

      {education.length > 0 && (
        <section className="flex flex-col gap-8">
          <SectionHeader label="// school" title="Education" />
          <Timeline>
            {education.map((e) => (
              <EducationItem key={e.id} entry={e} />
            ))}
          </Timeline>
        </section>
      )}

      {leadership.length > 0 && (
        <section className="flex flex-col gap-8">
          <SectionHeader label="// leading" title="Leadership" />
          <Timeline>
            {leadership.map((e) => (
              <LeadershipItem key={e.id} entry={e} />
            ))}
          </Timeline>
        </section>
      )}

      {skills.length > 0 && (
        <section className="flex flex-col gap-8">
          <SectionHeader label="// toolbox" title="Skills" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {skills.map((c) => (
              <SkillGroup key={c.id} category={c} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}