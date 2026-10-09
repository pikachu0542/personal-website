import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on building things, lessons learned, and what I'm working on.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <section>
        <div className="mb-3 font-mono text-[13px] text-accent">// blog</div>
        <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
          Writing
        </h1>
        <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-muted">
          Notes on building things and what I&apos;m learning along the way.
        </p>
      </section>

      {posts.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </section>
      ) : (
        <p className="text-muted">No posts yet. Check back soon.</p>
      )}
    </Container>
  );
}