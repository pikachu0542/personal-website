import { Project } from "@/types";

/** Nicer labels for known keys. Any other key still shows, using a label made from its name. */
const knownLabels: Record<string, { short: string; long: string }> = {
  live: { short: "Live", long: "Visit site" },
  repo: { short: "Code", long: "View code" },
  blog: { short: "Blog", long: "Read blog" },
};
const knownOrder = Object.keys(knownLabels);

/** "demoVideo" becomes "Demo video" */
function humanize(key: string): string {
  const spaced = key.replace(/([A-Z])/g, " $1").trim().toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

interface LinkItem {
  key: string;
  href: string;
  short: string;
  long: string;
}

function getLinkItems(links: Project["links"]): LinkItem[] {
  return Object.entries(links ?? {})
    .filter((entry): entry is [string, string] => typeof entry[1] === "string" && entry[1] !== "")
    .map(([key, href]) => {
      const label = knownLabels[key];
      return {
        key,
        href,
        short: label?.short ?? humanize(key),
        long: label?.long ?? humanize(key),
      };
    })
    .sort((a, b) => {
      // Known keys first, in a fixed order; everything else after, in the order written
      const ai = knownOrder.indexOf(a.key);
      const bi = knownOrder.indexOf(b.key);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
}

interface ProjectLinksProps {
  links?: Project["links"];
  /** "compact" = small text links (cards). "buttons" = full buttons (detail page). */
  variant: "compact" | "buttons";
}

/** Shows every link provided in the project's data. Renders nothing if there are none. */
export function ProjectLinks({ links, variant }: ProjectLinksProps) {
  const items = getLinkItems(links);
  if (items.length === 0) return null;

  if (variant === "compact") {
    return (
      // relative + z-10 keeps these clickable above the card's full-card link
      <ul className="relative z-10 flex flex-wrap gap-x-4 gap-y-1 text-sm font-extrabold text-accent">
        {items.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {item.short} ↗
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-[14px] px-6 py-3.5 text-[15px] font-extrabold ${
            i === 0 ? "bg-accent text-on-accent" : "bg-chip text-accent"
          }`}
        >
          {item.long}
        </a>
      ))}
    </div>
  );
}