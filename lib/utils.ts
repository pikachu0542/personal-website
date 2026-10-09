import { DateRange } from "@/types";

/** "2025-06" to "2025-present" becomes "2025 – now"; a same-year range becomes "2024". */
export function formatDateRange({ start, end }: DateRange): string {
  const year = (d: string) => d.slice(0, 4);
  const endLabel = end === "present" ? "now" : year(end);
  return year(start) === endLabel ? year(start) : `${year(start)} – ${endLabel}`;
}