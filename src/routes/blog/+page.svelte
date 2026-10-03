<script>
  import { base } from "$app/paths";
  let { data } = $props();
</script>

<svelte:head><title>Blog | Pawprint Dog Training</title></svelte:head>

<h1>Blog</h1>
<ul class="posts">
  {#each data.posts as post}<li><a href="{base}/blog/{post.slug}/">{post.title}</a> <span class="meta">{post.date}</span></li>{/each}
</ul>
