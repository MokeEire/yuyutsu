<script>
  import Categories from "$lib/components/Categories.svelte";
  export let post;
  $: ({ title, description, slug, categories, image, date } = post);
  $: actualDate = new Date(date);
  let hover = false;
  import { fade } from "svelte/transition";
</script>


<div class="post-item">
  
  <a data-sveltekit-prefetch class="post-link" href="/posts/{slug}"
    on:mouseover={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
    on:focus={() => (hover = true)}
    >
    <img width="100%" height="250" src={image} alt={title} />
    <h2 class:hover class="title">{title}</h2>
    <span class="date">{actualDate.toLocaleDateString({ weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>
    <p class="post-desc">{description}</p></a
  >
  
  <Categories {categories} />
</div>

<style>

  .hover {
    text-decoration: underline;
    transition: all 300ms ease;
  }
  .post-item {
    margin-bottom: 3rem;
    width: 30%;
    min-width: 300px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
  }
  
  .post-link {
    text-decoration: none;
  }
  .title {
    line-height: normal;
    transition: all 300ms ease;
  }

  h2 {
    font-size: 1.8rem;
  }
  img {
    object-fit: cover;
    object-position: center;
  }
  p {
    margin: 0 0 .5rem;
  }

  .date {
    font-size: .9rem;
    color: var(--text-light);
  }
  @media screen and (max-width: 768px) {
    img {
      height: 200px;
      object-position: center;
    }
  }
</style>

