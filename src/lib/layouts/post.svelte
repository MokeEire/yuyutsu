<script>
  import Seo from "$lib/components/Seo.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import { siteTitle } from "$lib/constants";

  export let data;
  export let title, description, date, categories, edit, image, header;

  const seo = {
    title: `${title} | ${siteTitle}`,
    description,
    image,
  };

  $: recentPosts = data.posts
</script>

<Seo {...seo} />

<h1>{title}</h1>
<caption class="post-desc">{description}</caption>
<p class="date">{date}</p>
<Categories {categories} />
<img class = "post-img" width="100%" height="300" src={header} alt={title} />

<slot />
<p class="edit"><a href={edit} target="_blank">Edit this page</a></p>

<style>
  .date {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 0.5rem;
    font-family: var(--title-font);
  }

  .post-img {
    margin: .5rem 0 1.5rem 0;
  }

  .post-desc {
    color: var(--text-color);
    width: 100%;
    font-style: italic;
    text-align: inherit;
  }

  .edit {
    display: flex;
  }
  .edit a {
    margin-left: auto;
  }
  img {
    object-fit: cover;
    object-position: center;
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
