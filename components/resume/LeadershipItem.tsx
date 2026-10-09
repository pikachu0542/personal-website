import { LeadershipEntry } from "@/types";
import { Highlights, TimelineItem } from "./Timeline";

export function LeadershipItem({ entry }: { entry: LeadershipEntry }) {
  const subtitle = [entry.organization, entry.location].filter(Boolean).join(" · ");

  return (
    <TimelineItem title={entry.role} subtitle={subtitle} dates={entry.dates}>
      <Highlights items={entry.highlights} />
    </TimelineItem>
  );
}