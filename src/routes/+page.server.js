import { getPosts } from "$lib/server/posts";

export const load = () => ({ posts: getPosts().slice(0, 6) });
