import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centers content and sets the max width and side padding used on every page. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}