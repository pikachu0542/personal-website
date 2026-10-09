import Link from "next/link";
import { Post } from "@/types";
import { Tag, TagList } from "@/components/ui/Tag";
import { formatPostDate } from "@/lib/dates";

/** Card on the /blog list. The whole card is clickable via a stretched link on the title. */
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="relative flex flex-col gap-4 rounded-[28px] border border-line bg-card p-8 transition-colors focus-within:border-accent hover:border-accent">
      <div className="font-mono text-[13px] text-muted">
        {formatPostDate(post.date)} · {post.readingMinutes} min read
      </div>
      <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em]">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-[15px] leading-relaxed text-muted">{post.summary}</p>
      {post.tags.length > 0 && (
        <div className="mt-auto pt-2">
          <TagList>
            {post.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>
        </div>
      )}
    </article>
  );
}