<script>
  export let step;
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  
  export let data
  import * as d3 from "d3";
  import AxisX from "$lib/components/AxisX.svelte";
  import AxisY from "$lib/components/AxisY.svelte";

  import { fade, draw } from 'svelte/transition';
  //import HoverEvents from "$lib/components/HoverEvents.svelte";
  //import Tooltip from "$lib/components/Tooltip.svelte";
  let height = 400;
  let width = 400;

  const margin = { top: 30, right: 50, bottom: 30, left: 40 };

  let innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;

  import { scaleLinear, scaleTime } from "d3-scale";
  //import Line from "./lib/Line.svelte";
  const minDate = d3.utcYear.offset(new Date(data[0].when), -10);
  const maxPredDate = d3.utcYear.offset(new Date(data[data.length - 1].by), 10);
  
  $: xScale = scaleTime()
    .domain([d3.min(data, (d) => new Date(d.when)), d3.max(data, (d) => new Date(d.by))]) // INPUT
    .nice()
    .range([0, innerWidth]); // OUTPUT

  $: yScale = scaleLinear()
    .domain([0, d3.max(data, (d) => d3.timeYear.count(new Date(d.when), new Date(d.by)))]) // INPUT
    .range([innerHeight, 0]); // OUTPUT
  
  

  $: tweenedData = data.filter((d, i) => i <= step);


</script>
  
 <div class="chart-container" 
    bind:offsetWidth={width}
    bind:offsetHeight={height}>
      <h1>How experts have forecasted AI</h1>
      <svg
        {width}
        {height}
        aria-labelledby="chart-title"
        aria-describedby="chart-description"
        role="img"
      >
        <title id="chart-title">How experts have forecasted AI</title>
        <desc id="chart-description"
          >A chart showing forecasts of AI progress by domain experts from 1965-Present.</desc
        >
        <g transform="translate({margin.left} {margin.top})">
          <AxisX
            height={innerHeight}
            {xScale}
          />
          <!-- Line indicating present -->
          <line 
            x1={xScale(new Date())}
            x2={xScale(new Date())}
            y1={innerHeight+10}
            y2={0}
            stroke="red"
            stroke-width=1.5
            stroke-dasharray="8, 4"
            pointer-events="none"/>
          <!-- Present label -->
          <text x={xScale(new Date())-10} y="0"
              dominant-baseline="hanging"
              paint-order="stroke" 
              text-anchor="end">Today</text>

          <!-- Create path for each data point -->
          {#each tweenedData as d, i}
          <path d="M {xScale(new Date(d.when))} {yScale(0.1)} C {xScale(new Date(d.when))} {yScale(0.1)}, {(xScale(new Date(d.when))+xScale(new Date(d.by)))/2} {yScale(d3.timeYear.count(new Date(d.when), new Date(d.by)))}, {xScale(new Date(d.by))} {yScale(0.1)}" stroke="black" stroke-width=2
                fill="transparent" 
                in:draw={{duration: 1200, delay: 200}} 
                out:fade={{delay:300, duration: 1200}} 
          class="pred-line"/>
          <!-- Create path for each data point -->
          {#if i===step}
            <path d="M {xScale(new Date(d.when))} {yScale(0.1)} C {xScale(new Date(d.when))} {yScale(0.1)}, {(xScale(new Date(d.when))+xScale(new Date(d.by)))/2} {yScale(d3.timeYear.count(new Date(d.when), new Date(d.by)))}, {xScale(new Date(d.by))} {yScale(0.1)}" stroke="black" stroke-width=2
              fill="transparent" 
              in:draw={{duration: 1200, delay: 200}} out:fade={{delay:100, duration: 600}} 
              class="current pred-line"/>
            <line x1={xScale(new Date(d.when))+5} x2={xScale(new Date(d.by))-5}
              y1={yScale(0.2)} y2={yScale(0.2)} 
              class="pred-distance"
              stroke="grey" stroke-dasharray="4, 2"
              pointer-events="none"
              in:draw={{duration: 1200, delay: 200}} out:fade={{duration: 120}}/>
            <text x={(xScale(new Date(d.when))+xScale(new Date(d.by)))/2} y={yScale(1.25)}
              class="pred-distance"
              dominant-baseline="top"
              paint-order="stroke" 
              text-anchor="middle"
              in:fade={{duration: 1200, delay: 200}} out:fade={{duration: 120}}>{d3.timeYear.count(new Date(d.when), new Date(d.by))} years</text>
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

  .pred-line {
    opacity: .2;
    stroke-width: .9;
  }

  .pred-line.current {
    stroke: coral;
    stroke-linecap: round;
    opacity: 1;
    stroke-width: 3;
  }

  text.pred-distance {
    font-size: 14px;
    fill: var(--text-color);
    stroke: var(--bg-color);
    stroke-width: 6;
  }

  line.pred-distance {
    background-color: var(--bg-color);
  }

  </style>