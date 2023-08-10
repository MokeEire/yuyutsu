<script>
  import { footerText } from "$lib/constants";
  const date = new Date();
  const year = date.getFullYear();
  export let sidebar = true
</script>

{#if sidebar}
  <footer>
    <span>© Mark Barrett {year}.</span>
    <p>{footerText}</p>
  </footer>
{:else}
  <footer class="bottom">
    <span>© Mark Barrett {year}.</span>
    <p>{footerText}</p>
    <p>Built with <a href="https://kit.svelte.dev/">SvelteKit</a> using <a href="https://github.com/sharu725/yuyutsu">yuyutsu</a> as a template.</p>
  </footer>
{/if}


<style>
  footer {
    color: #ddd;
    font-size: 0.9rem;
  }

  footer.bottom {
    color: var(--text-color);
    text-align: center;
  }
</style>
