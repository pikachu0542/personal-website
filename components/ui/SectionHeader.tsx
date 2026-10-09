import Link from "next/link";

interface SectionHeaderProps {
  label: string; // small mono label, e.g. "// projects"
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({ label, title, href, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-t border-line pt-6">
      <div>
        <div className="mb-2.5 font-mono text-[13px] text-accent">{label}</div>
        <h2 className="text-3xl font-extrabold tracking-[-0.03em] sm:text-[40px]">
          {title}
        </h2>
      </div>
      {href && (
        <Link href={href} className="text-[15px] font-extrabold text-accent">
          {linkLabel ?? "See all"} →
        </Link>
      )}
    </div>
  );
}