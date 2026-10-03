<script>
  import { base } from "$app/paths";
  import "../app.css";
  let { children } = $props();
</script>

<header>
  <a class="brand" href="{base}/">Pawprint Dog Training</a>
  <nav><a href="{base}/">Home</a><a href="{base}/about/">About</a><a href="{base}/blog/">Blog</a></nav>
</header>
<main>{@render children()}</main>
<footer>© Pawprint Dog Training</footer>
