import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Markdown } from "@/components/ui/Markdown";
import { Tag, TagList } from "@/components/ui/Tag";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatPostDate } from "@/lib/dates";

// In Next.js 15+, route params arrive as a Promise.
type Props = { params: Promise<{ slug: string }> };

// Pre-build one page per post at build time.
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <Link href="/blog" className="text-[15px] font-extrabold text-accent">
        ← All posts
      </Link>

      <section className="flex flex-col gap-6">
        <div>
          <div className="mb-3 font-mono text-[13px] text-accent">
            {formatPostDate(post.date)} · {post.readingMinutes} min read
          </div>
          <h1 className="max-w-[820px] text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-[56px]">
            {post.title}
          </h1>
          {post.summary && (
            <p className="mt-4 max-w-[640px] text-lg leading-relaxed text-muted">
              {post.summary}
            </p>
          )}
        </div>
        {post.tags.length > 0 && (
          <TagList>
            {post.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>
        )}
      </section>

      <article className="rounded-[28px] border border-line bg-card p-8 sm:p-12">
        <Markdown markdown={post.content} />
      </article>
    </Container>
  );
}