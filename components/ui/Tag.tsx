import { ReactNode } from "react";

const sizes = {
  sm: "px-3.5 py-1.5 text-sm",
  lg: "px-5 py-2.5 text-base",
};

/** Small rounded pill used for skills, technologies, honors, etc. */
export function Tag({
  children,
  size = "sm",
}: {
  children: ReactNode;
  size?: keyof typeof sizes;
}) {
  return (
    <li className={`rounded-full bg-chip font-semibold text-accent ${sizes[size]}`}>
      {children}
    </li>
  );
}

export function TagList({ children, gap = "gap-2" }: { children: ReactNode; gap?: string }) {
  return <ul className={`flex flex-wrap ${gap}`}>{children}</ul>;
}