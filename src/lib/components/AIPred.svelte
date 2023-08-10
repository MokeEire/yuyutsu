<script>
    import data from "$lib/data/ai-pred.json";
    import * as d3 from "d3";
    console.log(data);
  
    const margin = { top: 30, right: 50, bottom: 30, left: 40 };
  
    let height = 400;
    let width = 400;
  
    let innerHeight = height - margin.top - margin.bottom;
    $: innerWidth = width - margin.left - margin.right;
  
    import { scaleLinear, scaleTime } from "d3-scale";
    //import Line from "./lib/Line.svelte";
  
    
  
    const minDate = d3.utcYear.offset(new Date(data[0].when), -10);
    const maxDate = new Date(data[data.length - 1].when);
    const minYear = 1960;
    const maxYear = 2050;
    const minPredDate = new Date(data[0].by);
    const maxPredDate = d3.utcYear.offset(new Date(data[data.length - 1].by), 10);
    
    $: xScale = scaleTime()
      .domain([minDate, maxPredDate]) // INPUT
      .range([0, innerWidth]); // OUTPUT
  
    $: yScale = scaleTime()
      .domain([minDate, maxPredDate]) // INPUT
      .range([innerHeight, 0]); // OUTPUT

  
    import AxisX from "$lib/components/AxisX.svelte";
    import AxisY from "$lib/components/AxisY.svelte";
    import HoverEvents from "$lib/components/HoverEvents.svelte";
    import Tooltip from "$lib/components/Tooltip.svelte";
  
    let hoveredDate = maxDate;
  </script>
  
  <div class="outer">
    <div class="chart-container" bind:clientWidth={width}>
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
            {hoveredDate}
            isUnhovered={hoveredDate === maxDate}
          />
          <AxisY width={innerWidth} {yScale} />
          <line 
            x1={xScale(minDate)}
            x2={xScale(maxPredDate)}
            y1={yScale(minDate)}
            y2={yScale(maxPredDate)}
            stroke="darkgrey"
            stroke-dasharray="8, 4"
            pointer-events="none"/>
          {#each data as d}
          <circle
          cx={xScale(new Date(d.when))}
          cy={yScale(new Date(d.by))}
              r={5}
              fill='plum'
              stroke='black'
          />
          <text
            x={xScale(new Date(d.when))}
            dx = "12"
            y={yScale(new Date(d.by))}
            dy = "-8"
            text-anchor="start"
            dominant-baseline="top"
            fill="#212121">
            {d.who}
          </text>
          {/each}

          <HoverEvents
          width={innerWidth}
          height={innerHeight}
          {xScale}
          {yScale}
          {data}
          {margin}
          {maxDate}
          bind:hoveredDate
        />

        <Tooltip
          {hoveredDate}
          {xScale}
          {yScale}
          data={data}
          color={"#5768ac"}
        />
        </g>
        
      </svg>
    </div>
  </div>
  
  <style>
    .outer {
      padding: 15px;
      background: #f0f0f0;
      box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }
    h1 {
      font-size: 28px;
      line-height: 34px;
      color: #222;
      margin-bottom: 10px;
      text-align: center;
      font-weight: 600;
    }
  </style>