import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({ pages: "build", assets: "build" }),
    paths: { base: "/seovyn-fw-sveltekit" },
    prerender: { entries: ["*", "/sitemap.xml"] },
  },
};
