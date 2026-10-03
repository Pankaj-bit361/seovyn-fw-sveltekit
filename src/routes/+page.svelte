<script>
  import { base } from "$app/paths";
  let { data } = $props();
</script>

<svelte:head>
  <title>Pawprint Dog Training</title>
  <meta name="description" content="Positive dog training classes and private lessons in Denver" />
</svelte:head>

<h1>Pawprint Dog Training</h1>
<p class="tagline">Positive dog training classes and private lessons in Denver</p>
<p>Pawprint teaches puppy classes, basic obedience and leash manners in Denver, using reward-based methods only.</p>
<p>Classes are small, six dogs at most, and we also offer private lessons at your home for dogs who find groups stressful.</p>
<h2>From the blog</h2>
<ul class="posts">
  {#each data.posts as post}<li><a href="{base}/blog/{post.slug}/">{post.title}</a></li>{/each}
</ul>
