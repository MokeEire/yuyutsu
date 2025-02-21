<script>
  import { footerText, links } from "$lib/constants";
  const date = new Date();
  const year = date.getFullYear();
  export let sidebar = true;
</script>

{#if sidebar}
  <footer>
    <span>© Mark Barrett {year}.</span>
    <p>{footerText}</p>
  </footer>
{:else}
  <footer class="bottom">
    <div class="about-links">
      {#each links as { title, url, target, icon }}
        <div class="link-item">
          <a href={url} {target}><img src={icon} /><span>{title}</span></a>
        </div>
      {/each}
    </div>
    <span>© Mark Barrett {year}.</span>
    <p>{footerText}</p>
    <p>
      Built with <a href="https://kit.svelte.dev/">SvelteKit</a> using
      <a href="https://github.com/sharu725/yuyutsu">yuyutsu</a> as a template.
    </p>
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
    margin: 15vh 0 5vh;
  }

  .about-links {
    display: flex;
    margin-top: 16px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 50%;
    margin: 0 auto;
}

.link-item {
    flex-basis: calc(25% - 10px); /* Adjust the percentage for more or fewer items */
    text-align: center;
    margin-bottom: 16px;
    opacity: .7;
    filter: grayscale(1);
    transition: filter 200ms ease, transform 400ms ease; 
    line-height: 1;
}

.link-item a {
    text-decoration: none;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.link-item span {
    display: block;
}
.link-item:hover {
    opacity: 1;
    filter: grayscale(0);
    transform: translateY(-3px);
}

.link-item img {
    width: 100%;
    max-width: 24px; /* Adjust based on your preference */
    height: auto;
    border-radius: 8px; /* Optional: for rounded corners */
    margin-bottom: 8px;
}
</style>
