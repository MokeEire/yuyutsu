<script>
    export let step;

    let data = [
    {
      material: "Carbon Steel", 
      density: 7.85, 
      spec_heat: 0.49, 
      volume_heat: 3.85,
      conductivity: 54, 
      zero: 0,
      colour: "#325E69"
    },
    {
      material: "Stainless Steel",
      density: 7.5,
      spec_heat: 0.5,
      volume_heat: 3.75,
      conductivity: 45,
      zero: 0,
      colour: "#C4C3C2"
    },
    {
      material: "Cast Iron",
      density: 7,
      spec_heat: 0.46,
      volume_heat: 3.22,
      conductivity: 80,
      zero: 0,
      colour: "#5E5E5E"
    },
    {
      material: "Aluminium",
      density: 2.7,
      spec_heat: 0.92,
      volume_heat: 2.48,
      conductivity: 204,
      zero: 0, 
      colour: "#BFBFBF"
    },
    {
      material: "Copper",
      density: 8.94,
      spec_heat: 0.38,
      volume_heat: 3.4,
      conductivity: 386,
      zero: 0,
      colour: "#B96342"
    }
  ];
  import { scaleLinear, scaleSqrt } from "d3-scale";
  import { extent, min, max } from "d3-array";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { forceSimulation, forceY, forceX, forceCollide } from "d3-force";

  import AxisX from "./AxisX.svelte";
  import AxisY from "./AxisY.svelte";

  import { fade, slide } from 'svelte/transition';
  //import HoverEvents from "$lib/components/HoverEvents.svelte";
  //import Tooltip from "$lib/components/Tooltip.svelte";
  let height;
  let width;
  let xlabel, ylabel;
  const margin = { top: 30, right: 30, bottom: 30, left: 30 };

  const tweenOptions = {
    delay: 0,
    duration: 1000,
    easing: cubicOut,
  };

  const tweenedX = tweened(
    data.map((d) => d.zero),
    tweenOptions
  );

  const tweenedY = tweened(
    data.map((d) => d.spec_heat),
    tweenOptions
  );

  $: tweenedData = data.map((d, index) => ({
    x: $tweenedX[index],
    y: $tweenedY[index],
    name: d.material,
    colour: d.colour
  }));

  function setTween(dimension, key) {
    dimension.set(data.map((d) => +d[key]));
  }

  $: {
    if (step == 0) {
      setTween(tweenedX, "zero");
      setTween(tweenedY, "spec_heat");
      ylabel = "Specific Heat Capacity (J/g°C)";
    }
    if (step == 1) {
      setTween(tweenedX, "density");
      setTween(tweenedY, "spec_heat");
      xlabel = "Density (g/cm³)";
      ylabel = "Specific Heat Capacity (J/g°C)";
    }
    if (step == 2) {
      setTween(tweenedX, "density");
      setTween(tweenedY, "volume_heat");
      ylabel = "Volumetric Heat Capacity (J/cm³°C)";
    }
  }
  
    $: innerHeight = height - margin.top - margin.bottom;
    $: innerWidth = width - margin.left - margin.right;


  
    //import Line from "./lib/Line.svelte";
    // X axis: heat capacity
    $: xScale = scaleLinear()
      .domain([0, max(data, (d) => d.density)]) // INPUT
      .range([margin.left, innerWidth-margin.right]) // OUTPUT
      .nice();
  
    // Y axis: density
    $: yScale = scaleLinear()
      .domain([0, max($tweenedY, (d) => d)]) // INPUT
      .range([innerHeight-margin.bottom, 0]) // OUTPUT
      .nice();
  
  </script>

<div class="chart-container" 
    bind:offsetWidth={width}
    bind:offsetHeight={height}>
      <h1>Materials physical properties</h1>
      <svg
        width = {width}
        {height}
        aria-labelledby="chart-title"
        aria-describedby="chart-description"
        role="img"
        transition:slide
      >
        <title id="chart-title">Materials physical properties</title>
        <desc id="chart-description"
          >A chart showing the physical properties of different cookware materials.</desc
        >
        <g transform="translate({margin.left} {margin.top})" transition:slide|global>
          
          {#if step >= 1}
          <AxisX
          height={innerHeight}
          width={innerWidth}
          margin={margin}
          {xScale}
          label={xlabel}
        />
          {/if}
          <AxisY
          height={innerHeight}
          width={innerWidth}
          margin={margin}
          {yScale}
          label={ylabel}
        />
          <!-- Create path for each data point -->
          {#each tweenedData as d, i}
          <circle 
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={5}
            fill={d.colour}
            stroke="black"
            stroke-width="1"
            opacity=".9"></circle>
            {#if step >= 1}
              <text 
              x={xScale(d.x)}
              y={yScale(d.y)}
              text-anchor="end"
              opacity=".9">{d.name}</text>
            {/if}
          {/each}

         </g>
        
      </svg>
    </div>
  
  <style>
    h1 {
      font-size: 28px;
      line-height: 34px;
      color: #222;
      margin-bottom: 10px;
      text-align: center;
      font-weight: 600;
    }
    .chart-container {
    height: 50vh;
    max-width: 100%;
		border-radius: 5px;
  }


  </style>