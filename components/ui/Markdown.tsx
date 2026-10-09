/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */
import ReactMarkdown, { Components } from "react-markdown";

// Each markdown element gets site styling. `node` is dropped so it never reaches the DOM.
const components: Components = {
  p: ({ node, ...props }) => <p className="text-[18px] leading-[1.75]" {...props} />,
  // "#" renders as an <h2> element: the page title is already the page's <h1>,
  // and a page should only have one. It's styled as the largest heading.
  h1: ({ node, ...props }) => (
    <h2 className="mt-10 text-3xl font-extrabold tracking-[-0.025em]" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="mt-8 text-2xl font-extrabold tracking-[-0.02em]" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.01em]" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="mt-4 text-lg font-extrabold" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="flex list-disc flex-col gap-2 pl-6 text-[18px] leading-[1.7] marker:text-accent" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="flex list-decimal flex-col gap-2 pl-6 text-[18px] leading-[1.7] marker:font-semibold marker:text-accent" {...props} />
  ),
  a: ({ node, href, ...props }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-semibold text-accent underline underline-offset-4"
        {...props}
      />
    );
  },
  strong: ({ node, ...props }) => <strong className="font-extrabold" {...props} />,
  // Inline code. Inside a fenced block, <pre> below resets this styling.
  code: ({ node, ...props }) => (
    <code className="rounded-md bg-chip px-1.5 py-0.5 font-mono text-[0.9em] text-accent" {...props} />
  ),
  pre: ({ node, ...props }) => (
    <pre
      className="overflow-x-auto rounded-[20px] border border-line bg-background p-5 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-foreground"
      {...props}
    />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-accent pl-5 text-[18px] leading-[1.7] text-muted" {...props} />
  ),
  hr: ({ node, ...props }) => <hr className="my-4 border-line" {...props} />,
  img: ({ node, alt, ...props }) => (
    <img alt={alt ?? ""} className="rounded-[20px] border border-line" {...props} />
  ),
};

/** Removes the shared leading indentation, so you can indent text inside a template literal. */
function dedent(text: string): string {
  const lines = text.replace(/^\n+|\s+$/g, "").split("\n");
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)![0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join("\n");
}

/** Renders markdown with the site's styling. Used for project descriptions and blog posts. */
export function Markdown({ markdown }: { markdown: string }) {
  return (
    <div className="flex max-w-[720px] flex-col gap-5 [&>:first-child]:mt-0">
      <ReactMarkdown components={components}>{dedent(markdown)}</ReactMarkdown>
    </div>
  );
}