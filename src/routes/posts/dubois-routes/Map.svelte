<script>
  import world from "$lib/data/110m.json";
  import * as topojson from "topojson-client";
  import routes from "$lib/data/routes-simple.json";

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

  import {
    geoOrthographic,
    geoPath,
    geoCentroid,
    geoEqualEarth,
    geoEquirectangular,
    geoMercator,
    geoInterpolate,
  } from "d3-geo";
  //import { geoBaker } from "d3-geo-projection";
  import { scaleLinear } from "d3-scale";
  import { max } from "d3-array";
  import { timer } from "d3-timer";
  import { draw } from "svelte/transition";

  let width = 600;
  $: height = width / 2;

  // Projection function
  $: projection = geoEquirectangular()
    .scale(height * 0.3) // geoEquirectangular
    .rotate([30, 0, 0]) // geoEquirectangular
    .translate([width / 2, height / 2]); // Where the projection is centered

  // Path generator
  $: path = geoPath().projection(projection);

  let tooltipData;

  import Globe from "./Globe.svelte";
  import Clip from "./Clip.svelte";
</script>

<div class="plate">
  <div class="chart-title">
    <h1>The Georgia Negro.</h1>
    <span>A Social Study</span>
    <span>By</span>
    <span>W.E. Burghardt Du Bois</span>
  </div>
  <div class="chart-container" bind:clientWidth={width}>
    <svg class="globes" {width} {height}>
      <!-- Globe -->
      <!-- svelte-ignore a11y-click-events-have-key-events --->
      <Globe cx={width * 0.25} {height} radius={height / 2} {tooltipData} />
      <Globe cx={width * 0.75} {height} radius={height / 2} {tooltipData} />
      <Clip id="globe-shape" {width} {height} />
      <!-- Borders / Outline -->
      <path
        d={path(outline)}
        fill="none"
        stroke="black"
        clip-path="url(#globe-shape)"
      />

      <!-- Countries -->
      {#each countries as country}
        <!-- svelte-ignore a11y-click-events-have-key-events --->
        <path
          class="country"
          d={path(country)}
          fill="transparent"
          stroke="none"
          on:click={() => {
            tooltipData = country;
          }}
          on:focus={() => {
            tooltipData = country;
          }}
          tabIndex="0"
          clip-path="url(#globe-shape)"
        />
      {/each}
      <!-- Routes -->
      {#each routes as route, i}
        <path
          in:draw={{ delay: 600 + 150 * i, duration: 1800 }}
          fill="none"
          stroke="black"
          d={path({
            type: "Feature",
            geometry: {
                type: "LineString",
            coordinates: route.coords
            },
          })}
        />
      {/each}
        <!-- Selected country Borders -->
      </svg
    >

    <div class="chart-desc">
      <p>
        This case is devoted to a series of charts, maps and other devi–ces
        designed to illustrate the development of the American Negro in a single
        typical state of the United States.
      </p>
      <p>"The problem of the 20th century is the problem of the color-line."</p>
    </div>
    <span class="caption"
      >Source: <a href="https://www.slavevoyages.org/voyage/database"
        >Trans-Atlantic Slave Trade Database</a
      ></span
    >
  </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  
    .plate {
      margin: 20vh auto;
      background: #e3cfbc;
      padding: 4px 16px;
      border-radius: 6px;
      text-transform: uppercase;
      text-align: center;
      font-family: "Public Sans", sans-serif;
    }
  
    .chart-title {
      display: flex;
      flex-direction: column;
      margin-bottom: 15vh;
      line-height: 1.2;
      font-family: "Public Sans", sans-serif;
      color: black;
    }
  
    .chart-title h1 {
      color: black;
      font-family: "Public Sans", sans-serif;
    }
  
    .chart-title h1 {
      font-weight: 700
    }
  
    .chart-title span {
      font-weight: 600
    }
  
    .chart-desc {
      margin: 15vh 5vh;
    }
  
    .chart-desc p {
      font-weight: 100;
      word-wrap: break-word; 
      line-height: 1.25;
      hyphens: auto;
    }
  
    .chart-desc :not(p:last-of-type) {
      text-align: left;
      letter-spacing: 1.25px;
      text-indent: 15%;
    }
  
    .globes {
      max-width: 968px;
      margin: 15vh 0;
    }
  
    svg {
      overflow: hidden;
      margin: 4px 0;
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
  
    .caption {
      text-align: right;
    }
    
  </style>