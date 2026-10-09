import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Post } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  // YAML turns an unquoted date into a Date object, so normalize to "YYYY-MM-DD"
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? "");

  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title ?? slug,
    date,
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    draft: data.draft ?? false,
    content,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

/** All published posts, newest first. Posts with `draft: true` are hidden. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}