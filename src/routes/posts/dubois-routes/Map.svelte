<script>
  import { tweened } from "svelte/motion";
  import { quartInOut } from "svelte/easing";

  import world from "$lib/data/110m.json";
  import * as topojson from "topojson-client";
  import rewind from "@turf/rewind";
  import routes from "$lib/data/routes-simple.json";
  import mapShapes from "$lib/data/mapShapes.json";
  export let clip = true;

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

  import { geoPath, geoEquirectangular } from "d3-geo";
  import { draw, fade, scale } from "svelte/transition";

  let width = 600;
  $: height = width / 2;

  // Projection function
  $: projection = geoEquirectangular()
    .scale(height * 0.325) // geoEquirectangular
    .rotate([30, -2.5, 0]) // geoEquirectangular
    .translate([width / 2, height / 2]); // Where the projection is centered

  // Path generator
  $: path = geoPath().projection(projection);

  let georgiaCoords = [-81.0753, 32.0967];

  let tooltipData;

  import Globe from "./Globe.svelte";
  import Clip from "./Clip.svelte";
</script>
 
  <div class="chart-container" bind:clientWidth={width}>
    <svg class="globes" {width} {height}>
        <!-- Globe -->
      <!-- svelte-ignore a11y-click-events-have-key-events --->
      <Globe cx={width * 0.25} {height} {tooltipData} />
      <Globe cx={width * 0.75} {height} {tooltipData} />
    {#if clip}
      <Clip id="globe-shape" {width} {height} />
    {/if}
      <!-- Borders / Outline -->
      <path
        d={path(outline)}
        fill="none"
        stroke="black"
      clip-path={clip ? "url(#globe-shape)" : ""}
      />
    <path
      d="M {width * 0.25}, 0 A {width * 0.25} {height * 0.5} 0 0 1 {width *
        0.5}, {height * 0.5}"
      id="globe-text-left"
      fill="none"
      stroke="none"
    />
    <path
      d="M {width * 0.5}, {height * 0.5} A {width * 0.25} {height *
        0.5} 0 0 1 {width * 0.75}, 0"
      id="globe-text-right"
      fill="none"
      stroke="none"
    />
    <text
      dy="-6"
      text-transform="upper"
      opacity=".7"
      font-weight="100"
      font-size="{width / 900}rem"
      clip-path={clip ? "" : "url(#globe-shape)"}
    >
      <textPath href="#globe-text-left" startOffset="27%" textLength="50%">
        Distribution of
      </textPath>
    </text>
    <text
      dy="-6"
      text-transform="upper"
      opacity=".7"
      font-weight="100"
      font-size="{width / 900}rem"
      clip-path={clip ? "" : "url(#globe-shape)"}
    >
      <textPath href="#globe-text-right" startOffset="35%" textLength="50%">
        the Negro Race
      </textPath>
    </text>
      <!-- Countries -->
      {#each countries as country}
        <!-- svelte-ignore a11y-click-events-have-key-events --->
        <path
          class="country"
          d={path(country)}
          fill="transparent"
          stroke="none"
          tabIndex="0"
        clip-path={clip ? "url(#globe-shape)" : ""}
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
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  .chart-container {
    width: 90%;
    margin: auto;
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

  .country {
    fill: #d7b0177a;
  }
</style>
