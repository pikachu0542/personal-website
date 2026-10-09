import { Markdown } from "@/components/ui/Markdown";

/** Project descriptions use the shared Markdown renderer. */
export function ProjectDescription({ markdown }: { markdown: string }) {
  return <Markdown markdown={markdown} />;
}