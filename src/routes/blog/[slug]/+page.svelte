<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.post.title} | Pawprint Dog Training</title>
  <meta name="description" content={data.post.description} />
</svelte:head>

<article>
  <h1>{data.post.title}</h1>
  <p class="meta">{data.post.date}</p>
  {@html data.post.html}
</article>
