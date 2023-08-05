<script>
  import Categories from "$lib/components/Categories.svelte";
  export let post;
  $: ({ title, description, slug, categories, image } = post);
</script>


<div class="post-item">
  
  <a data-sveltekit-prefetch class="post-link" href="/posts/{slug}"
    >
    <img width="100%" height="250" src={image} alt={title} />
    <h3 class="title">{title}</h3>
    <p class="post-desc">{description}</p></a
  >
  
  <Categories {categories} />
</div>

<style>
  .post-item {
    margin-bottom: 3rem;
    width: 30%;
    min-width: 300px;
    padding: 16px;
  }
  
  .post-link {
    text-decoration: none;
  }
  .title {
    line-height: normal;
  }
  a:hover {
    text-decoration: underline;
  }
  a:hover > .post-desc {
    text-decoration: none !important;
  }

  h2 {
    font-size: 1.8rem;
  }
  img {
    object-fit: cover;
    object-position: center;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 200px;
      object-fit: contain;
      object-position: center;
    }
  }
</style>

