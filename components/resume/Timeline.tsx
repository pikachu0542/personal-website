import { ReactNode } from "react";
import { DateRange } from "@/types";
import { formatDateRange } from "@/lib/utils";

/** Vertical line that holds a list of TimelineItems. */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative flex flex-col gap-6 border-l border-line pl-6 sm:pl-8">
      {children}
    </ol>
  );
}

interface TimelineItemProps {
  title: string;
  subtitle: ReactNode; // organization, location, etc.
  dates: DateRange;
  children?: ReactNode; // highlights, tags, extras
}

/** One card on the timeline. Shared by experience, education, and leadership. */
export function TimelineItem({ title, subtitle, dates, children }: TimelineItemProps) {
  return (
    <li className="relative">
      {/* dot on the line */}
      <span
        className="absolute -left-[31px] top-9 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background sm:-left-[39px]"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-4 rounded-[28px] border border-line bg-card p-7">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
          <div>
            <h3 className="text-xl font-extrabold">{title}</h3>
            <div className="text-[15px] text-muted">{subtitle}</div>
          </div>
          <div className="font-mono text-[13px] text-accent">
            {formatDateRange(dates)}
          </div>
        </div>
        {children}
      </div>
    </li>
  );
}

/** Bullet list for achievements. Renders nothing if the list is empty. */
export function Highlights({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-2 text-[15px] leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}