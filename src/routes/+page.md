---
layout: page
title: Home
description: "A blog about making the world better and visualizing data."
---

<script>
  import PostItem from "$lib/components/PostItem.svelte";
  import Pagination from "$lib/components/Pagination/Pagination.svelte";
  import { paginatedPosts } from "$lib/components/Pagination/paginatedPosts";
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle, siteDescription, links, mePic } from "$lib/constants";
  export let data;

  $: ({ posts } = data);
</script>

<div class="card-about">
    <img src="{mePic}" alt="Your Name" class="about-image">
    <h3>Welcome!</h3>
    <div class="about-text">
      <p>My name is Mark. I am an analyst, policy researcher, and data visualization designer.</p>
      <p>I am interested in improving effective governance and the decision-making of key institutions that impact problems like climate change, AI policy, and housing.</p>
    </div>
    <div class="about-links">
        {#each links as { title, url, target, icon }}
        <div class="link-item">
          <a href="{url}" {target}><img src="{icon}"/><span>{title}</span></a>
        </div>
        {/each}
    </div>

</div>


<hr/>

<div class="projects-container">
{#each $paginatedPosts as post}
  <PostItem {post} />
{/each}
</div>

<Pagination items={posts} itemsPerPage={3} />

<style>
.card-about {
  margin: 24px 0; /* Add some space to the top and bottom */
  color: #333; /* Change the font color */
  background-color: #f9f9f9; /* Add a light background color */
  padding: 24px; /* Add some padding */
  border-radius: 8px; /* Round the corners a bit */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  line-height: 1.6;
  border-left: 5px solid #007bff; /* Bold, colored border line for emphasis */
}

.card-about h3 {
  margin-top: 0;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .card-about {
        padding: 16px;
        margin: 16px 0;
    }
    .about-image {
    width: 40% !important;
}
}

.about-image {
    width: 40%; /* Responsive image width */
    max-width: 160px; /* Maximum size */
    height: auto;
    border-radius: 20%; /* Circular image */
    margin: 16px;
    padding: 8px;
    float: right;
}

.about-text {
  margin: 16px 0;
}

.about-links {
    display: flex;
    margin-top: 16px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.link-item {
    flex-basis: calc(25% - 10px); /* Adjust the percentage for more or fewer items */
    text-align: center;
    margin-bottom: 16px;
    opacity: .7;
    filter: grayscale(1);
    transition: filter 320ms ease, transform 800ms ease; 
}

.link-item a {
    text-decoration: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    font-family: var(--header-font);
    font-size: 16px;
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

  .projects-container {
    display: flex;
    max-width: 1000px;
    margin: 3rem auto;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
