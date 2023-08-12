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
          >A dual line chart showing Donald Trump and Joe Biden's likelihood of
          electoral victory diverging over time. At the final point, on November
          3rd, Biden has an 89 in 100 chance of winning, and Trump has 10 in 100.</desc
        >
        <g transform="translate({margin.left} {margin.top})">
          <AxisX
            height={innerHeight}
            {xScale}
          />
    
          <line 
            x1={xScale(new Date())}
            x2={xScale(new Date())}
            y1={innerHeight}
            y2={0}
            stroke="red"
            stroke-dasharray="8, 4"
            pointer-events="none"/>
          {#each tweenedData as d, i}
          <path d="M {xScale(new Date(d.when))} {yScale(0.1)} C {xScale(new Date(d.when))} {yScale(0.1)}, {(xScale(new Date(d.when))+xScale(new Date(d.by)))/2} {yScale(d3.timeYear.count(new Date(d.when), new Date(d.by)))}, {xScale(new Date(d.by))} {yScale(0.1)}" stroke="black" stroke-width=2
      fill="transparent" in:draw={{duration: 1200, delay: 400}} out:fade={{duration: 1200}} 
          class="pred-line"
          class:current={i===step}/>
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
    height: 80vh;
    max-width: 100%;
		border-radius: 5px;
  }

  .pred-line {
    opacity: .25;
    stroke-width: 1;
  }

  .pred-line.current {
    stroke: coral;
    stroke-linecap: round;
    opacity: 1;
    stroke-width: 3;
  }

  </style>