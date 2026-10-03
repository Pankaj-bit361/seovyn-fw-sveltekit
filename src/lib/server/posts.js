import matter from "gray-matter";
import { marked } from "marked";

const files = import.meta.glob("/src/posts/*.md", { query: "?raw", import: "default", eager: true });

function parse(path, raw) {
  const { data, content } = matter(raw);
  const slug = path.split("/").pop().replace(/\.md$/, "");
  return { slug, title: data.title, date: String(data.date ?? "").slice(0, 10), description: data.description ?? "", published: data.published !== false, content };
}

export function getPosts() {
  return Object.entries(files)
    .map(([path, raw]) => parse(path, raw))
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}

export function getPost(slug) {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`/${slug}.md`));
  if (!entry) return null;
  const post = parse(...entry);
  return { ...post, html: marked.parse(post.content) };
}
