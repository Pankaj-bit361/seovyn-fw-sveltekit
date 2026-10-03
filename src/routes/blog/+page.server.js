import { getPosts } from "$lib/server/posts";

export const load = () => ({ posts: getPosts() });
