<script>
  import { tweened } from "svelte/motion";
  import { quartInOut } from 'svelte/easing';


  import world from "$lib/data/110m.json";
  import * as topojson from "topojson-client";
  import rewind from "@turf/rewind";
  import routes from "$lib/data/routes-simple.json";
  import mapShapes from "$lib/data/mapShapes.json";

  let countries = topojson.feature(world, world.objects.countries).features;
  let featuresRewind = rewind(mapShapes, { reverse: true }).features;
  console.log(featuresRewind);
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
    geoPath,
    geoEquirectangular,
  } from "d3-geo";
  import { draw, fade, scale } from "svelte/transition";

  let width = 600;
  $: height = width / 2;

  // Projection function
  $: projection = geoEquirectangular()
    .scale(height * 0.3) // geoEquirectangular
    .rotate([30, 0, 0]) // geoEquirectangular
    .translate([width / 2, height / 2]); // Where the projection is centered

  // Path generator
  $: path = geoPath().projection(projection);

  let georgiaCoords = [-81.0753, 32.0967];

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
      <Globe cx={width * 0.25} {height} {tooltipData} />
      <Globe cx={width * 0.75} {height} {tooltipData} />
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
          tabIndex="0"
          clip-path="url(#globe-shape)"
        />
      {/each}

      {#each featuresRewind as shape}
        {#if shape.properties.type === "source"}
          <path
            d={path(shape)}
            fill={shape.properties.fill}
            stroke="none"
            opacity={shape.properties.opacity}
            tabIndex="0"
          />
        {:else if shape.properties.type === "destination"}
          <path
            in:fade={{ delay: 1000, duration: 5000, easing: quartInOut }}
            d={path(shape)}
            fill={shape.properties.fill}
            stroke="none"
            opacity={shape.properties.opacity}
            tabIndex="0"
          />
        {/if}
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
              coordinates: route.coords,
            },
          })}
        />
      {/each}
      <!-- Georgia point -->
      <circle
        cx={projection(georgiaCoords)[0]}
        cy={projection(georgiaCoords)[1]}
        r="4.5"
        fill="#fff"
        />
      <text
          class="georgia-label"
        fill="black"
        transform="translate({projection(georgiaCoords)})"
        dx="-5"
        dominant-baseline="middle"
        text-anchor="start"
        dy="1">&#10026;</text
      >
      <!-- Selected country Borders -->
    </svg>
    <div class="legend">
      <div class="legend-item">
        <span>&#8803;</span>
        <span>Routes of the African slave trade.</span>
      </div>
      <div class="legend-item">
        <span>&#10026;</span>
        <span>The State of Georgia.</span>
      </div>
    </div>

    <div class="chart-desc">
      <p>
        This case is devoted to a series of charts, maps and other devi–ces
        designed to illustrate the development of the American Negro in a single
        typical state of the United States.
      </p>
      <p>"The problem of the 20th century is the problem of the color-line."</p>
    </div>
    <p class="caption">
      Source: <a href="https://www.slavevoyages.org/voyage/database"
        >Trans-Atlantic Slave Trade Database</a
      >
    </p>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  .chart-container {
    width: 90%;
    margin: auto;
  }
  .plate {
    margin-bottom: 10vh;
    background: #e3cfbc;
    padding: 4px 16px;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Public Sans", sans-serif;
    opacity: 0.9;
  }

  .chart-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
    line-height: 1.2;
    font-family: "Public Sans", sans-serif;
    color: black;
  }

  .chart-title h1 {
    color: black;
    font-family: "Public Sans", sans-serif;
    font-size: 1rem;
  }

  .chart-title h1 {
    font-weight: 700;
    margin: 1rem 0 0;
  }

  .chart-title span {
    font-weight: 600;
  }

  .chart-desc {
    margin: 1.5rem 0 2rem;
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
    margin-bottom: 1rem;
  }

  .globes {
    max-width: 968px;
    margin: 5vh 0 3vh;
    opacity: 0.85;
  }

  svg {
    overflow: hidden;
    margin: 4px 0;
  }

  .legend {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin: 0 auto;
    width: fit-content;
    text-align: left;
    opacity: 0.75;
    font-size: 1.1rem;
  }

  .legend span {
    font-weight: 100;
  }

  .legend-item {
  }

  .caption {
    text-align: right;
  }

  .country {
    fill: #d7b0177a;
  }

</style>
