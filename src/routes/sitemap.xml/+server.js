import { getPosts } from "$lib/server/posts";

export const prerender = true;

export function GET() {
  const urls = ["/", "/about/", "/blog/", ...getPosts().map((p) => `/blog/${p.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `<url><loc>https://pankaj-bit361.github.io/seovyn-fw-sveltekit${encodeURI(u)}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
