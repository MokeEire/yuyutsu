<script>
    export let width = 400;
    export let height = 200;
    export let scaledX = false;
    export let scaledY = false;
    import { scaleLinear } from "d3-scale";

    let xScale = scaleLinear()
        .domain([0, 100]) // The range of inputs we want to map [min, max]
        .range([0,width]); // The range of outputs we want to return in px [min, max]

    let yScale = scaleLinear()
        .domain([0, 60])
        .range([height, 0])

    import data from "$lib/data/scatterplotData.js";
  </script>
    
<svg {width} {height}>
        {#each data as d}
            <circle 
                cx={scaledX ? xScale(d.grade) : d.grade}
                cy={scaledY ? yScale(d.hours) : d.hours}
            r={10}
            fill="purple"
            stroke="black"
            stroke-width="1"></circle>
        {/each}
</svg>
    
    <style>
    </style>