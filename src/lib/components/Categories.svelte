<script>
  export let categories;
</script>

<ul class="categories">
  {#each categories as category}
    <li>
      <a data-sveltekit-prefetch rel="external" href={`/categories/${category}`}>{category}</a>
    </li>
  {/each}
</ul>

<style>
  .categories {
    display: flex;
    margin-bottom: .75rem;
    padding: 0;
    list-style: none;
  }
  .categories a {
    margin-right: 1rem;
    padding: .25rem 0.75rem;
    border-radius: 0.2rem;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 300;
    box-shadow: inset 0 0 5px var(--text-light);
    transition-duration: 300ms;
    font-family: var(--title-font);
  }
  .categories a:hover {
    color: white;
    background-color: rgb(97, 97, 97);
  }
</style>
