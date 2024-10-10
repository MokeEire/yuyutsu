<script>
  import Seo from "$lib/components/Seo.svelte";
  import BibliographyList from "$lib/components/Citations/BibliographyList.svelte";
  import CiteArticle from "$lib/components/Citations/CiteArticle.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import { siteTitle } from "$lib/constants";
  import {format} from "date-fns";

  export let data;
  export let title, description, date, categories, image, header, showHeader = true;

  const seo = {
    title: `${title} | ${siteTitle}`,
    description,
    image,
  };

  $: recentPosts = data.posts;

  $: actualDate = new Date(date);

</script>

<Seo {...seo} />

<div class="post-header">
  <Categories {categories} />
  <h1>{title}</h1>
  {#if description}
    <caption class="post-desc">{description}</caption>
    {/if}
    {#if date}
    <p class="date">{format(actualDate, "d MMM yyyy")}</p>
    {/if}
  {#if showHeader}
  <img class="post-img" width="100%" height="300" src={header} alt={title} />
  {/if}
</div>
<hr>

<slot />

<BibliographyList />

<style>
  .post-header {
    max-width: 1000px;
  }

  h1 {
    line-height: 1.3;
  }
  .post-desc {
    color: var(--text-color);
    width: 100%;
    font-style: italic;
    text-align: inherit;
  }

  .date {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.8;
    margin: 0.5rem 0;
    font-family: var(--title-font);
  }

  .post-img {
    margin: 0.5rem 0 1.5rem 0;
    object-fit: cover;
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  a {
    text-decoration: underline 0.15em rgba(255, 255, 255, 0);
    color: var(--brand-color);
    transition: all 390ms ease-in-out;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    img {
      height: 200px;
      object-fit: contain;
      object-position: center;
    }
  }
</style>
