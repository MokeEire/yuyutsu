<script>
    import { onMount, onDestroy } from 'svelte';
    import { bibliography } from './BibliographyStore';
  
    export let claim
    export let title;
    export let authors;
    export let url;
    export let year;
  
    const citation = { title, authors, url, year };
  
    onMount(() => {
      bibliography.add(citation);
    });
  
    onDestroy(() => {
      bibliography.remove(citation);
    });
  </script>
  
  <style>
    .citation {
      position: relative;
    }
    .tooltip {
    visibility: hidden;
    font-size: .8rem;
    width: 280px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -140px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
    .citation:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
  </style>
  
  <a href="{url}" class="citation" target="_blank" rel="noopener noreferrer">
    {claim}<span class="tooltip">{authors}, {title} ({year})</span>
  </a>
  