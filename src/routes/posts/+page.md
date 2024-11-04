---
layout: page
title: Blog
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

<h1>Blog</h1>

<div class="projects-container">
{#each $paginatedPosts as post}
  <PostItem {post} />
{/each}
</div>

<Pagination items={posts} />

<style>

  .projects-container {
    display: flex;
    max-width: 1000px;
    margin: 3rem auto;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
