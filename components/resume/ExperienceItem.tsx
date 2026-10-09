import { ExperienceEntry } from "@/types";
import { Highlights, TimelineItem } from "./Timeline";
import { Tag, TagList } from "@/components/ui/Tag";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const subtitle = [entry.organization, entry.location, entry.employmentType]
    .filter(Boolean)
    .join(" · ");

  return (
    <TimelineItem title={entry.role} subtitle={subtitle} dates={entry.dates}>
      <Highlights items={entry.highlights} />
      {entry.technologies && (
        <TagList>
          {entry.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagList>
      )}
    </TimelineItem>
  );
}