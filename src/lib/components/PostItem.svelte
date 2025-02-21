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
    margin: .5rem;
    width: 30%;
    min-width: 300px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 400ms ease; 
    border-radius: 8px;
  }
  .post-item:hover {
    background-color: var(--bg-light);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
}
  .post-link {
    text-decoration: none;
    margin-bottom: 16px;
  }
  .title {
    line-height: normal;
    transition: all 300ms ease;
    margin-bottom: 0;
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

