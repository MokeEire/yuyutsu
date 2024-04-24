---
layout: post
title: "Dubois Challenge 2024: Slave Trade Routes"
description: "Celebrating a pioneer of data visualization"
categories:
  - dataviz
date: 2024-04-23
published: true
image: https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80
header: https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80
showHeader: false
---

**Please Note**: Racial terminology in this post is from, or referencing, scientific work from the late 1800s and early 1900s. It's not clear to me whether to change the language or preserve the context, so I chose the latter because I felt the language is one of the elements which makes Du Bois' work so powerful. If you feel I should change it, please let me know. I am open to hearing other views.

The [Du Bois Visualization Challenge](https://www.datavisualizationsociety.org/news/2024/2/2/advance-your-data-viz-skills-with-the-weekly-2024-du-bois-visualization-challenge) honours the social scientist and data visualization pioneer, W.E.B. Du Bois.
Below is my (in progress) attempt to recreate one of his plates from _The Georgia Negro_ study

<script>
    import world from "$lib/data/110m.json";
  import * as topojson from "topojson-client";

  let countries = topojson.feature(world, world.objects.countries).features;

  let borders = topojson.mesh(
    world,
    world.objects.countries,
    (a, b) => a !== b
  );

  let outline = topojson.mesh(
    world,
    world.objects.countries,
    (a, b) => a === b
  );


  import { geoOrthographic, geoPath, geoCentroid, geoEqualEarth, geoEquirectangular, geoMercator, geoStereographic } from "d3-geo";
  //import { geoBaker } from "d3-geo-projection";
  import { scaleLinear } from "d3-scale";
  import { max } from "d3-array";
  import { timer } from "d3-timer";

  let width = 600;
  $: height = width/2;

  // Projection function
  $: projection = geoEquirectangular()
    //.scale(height * .35) // geoEqualEarth
    //.rotate([25, -10, -0]) // geoEqualEarth
    .scale(height * .3) // geoEquirectangular
    .rotate([30, 0, 0]) // geoEquirectangular
    //.scale(height * .3) // geoMercator
    //.rotate([30, -0, -10]) // geoMercator
    .translate([width / 2, height / 2]); // Where the projection is centered

  // Path generator
  $: path = geoPath().projection(projection);

  let tooltipData;

  import Globe from "./Globe.svelte";
</script>

<div class="chart-container" bind:clientWidth={width}>
  <h1>A Rotating Globe of Data</h1>
  <h2>Population by Country, 2021</h2>
    <svg {width} {height} >
      <!-- Globe -->
      <!-- svelte-ignore a11y-click-events-have-key-events --->
      <Globe cx={width*.25} {height} radius={height/2} {tooltipData} />
      <Globe cx={width*.75} {height} radius={height/2} {tooltipData} />
      <!-- Countries -->
      {#each countries as country}
        <!-- svelte-ignore a11y-click-events-have-key-events --->
        <path
          d={path(country)}
          stroke="none"
          on:click={() => {
            tooltipData = country;
          }}
          on:focus={() => {
            tooltipData = country;
          }}
          tabIndex="0"
        />
      {/each}
  
      <!-- Borders -->
      <path d={path(borders)} fill="none" stroke="#fefefe80" />
      <!-- Selected country Borders -->
    </svg>
  
</div>

<style>
  .chart-container {
    max-width: 968px;
    margin: 0 auto;
  }

  svg {
    overflow: visible;
  }


  path {
    cursor: pointer;
  }

  path:focus {
    outline: none;
  }

  h1,
  h2 {
    color: white;
    text-align: center;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 200;
    margin-bottom: 1rem;
  }
  
</style>