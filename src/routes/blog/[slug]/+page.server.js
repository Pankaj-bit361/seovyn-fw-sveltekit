import { error } from "@sveltejs/kit";
import { getPost, getPosts } from "$lib/server/posts";

export const entries = () => getPosts().map((p) => ({ slug: p.slug }));

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) error(404, "Not found");
  return { post };
}
