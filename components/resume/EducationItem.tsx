import { EducationEntry } from "@/types";
import { Highlights, TimelineItem } from "./Timeline";
import { Tag, TagList } from "@/components/ui/Tag";

export function EducationItem({ entry }: { entry: EducationEntry }) {
  const subtitle = [entry.organization, entry.location, entry.gpa && `GPA ${entry.gpa}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <TimelineItem
      title={`${entry.degree} in ${entry.field}`}
      subtitle={subtitle}
      dates={entry.dates}
    >
      <Highlights items={entry.highlights} />
      {entry.honors && entry.honors.length > 0 && (
        <TagList>
          {entry.honors.map((h) => (
            <Tag key={h}>{h}</Tag>
          ))}
        </TagList>
      )}
    </TimelineItem>
  );
}