<script>
    export let xScale;
    export let yScale;
    export let hoveredDate;
    export let data;
    export let color;

    const getYValue = (date) =>
        data.filter((d) => new Date(d.when) >= date)[0]?.by;
    

    const getWhatValue = (date) =>
        data.filter((d) => new Date(d.when) >= date)[0]?.what;

    // Format our ticks as short date strings
    import { timeFormat } from "d3-time-format";
    const dateFormat = timeFormat("%Y");
</script>

<circle
    cx={xScale(hoveredDate)}
    cy={yScale(new Date(getYValue(hoveredDate)))}
    r="7.5"
    fill="seagreen"
    stroke="#f0f0f0"
    pointer-events="none"
/>
<text
    x={xScale(hoveredDate)}
    dx="12"
    y={yScale(new Date(getYValue(hoveredDate)))}
    pointer-events="none"
    text-anchor="start"
    dominant-baseline="hanging"
    fill="#212121"
    stroke="#f0f0f0"
    paint-order="stroke" 
    stroke-width="5"
>
    <tspan class="tooltip-year" x={xScale(hoveredDate)} stroke-width="7.5">
        {dateFormat(new Date(getYValue(hoveredDate)))}
    </tspan>
    <tspan x={xScale(hoveredDate)} dy="20" dx="20" font-size=.8rem stroke-width="10">
        {getWhatValue(hoveredDate)}
    </tspan>
    <tspan x={xScale(hoveredDate)} 
    dy="16" stroke-width="8" dx="20" font-size=.8rem>
        Predicted in {dateFormat(hoveredDate)}
    </tspan>

</text>

<style>
    text {
        font-weight: 600;
    }

    .tooltip-year {
        font-family: var(--header-font);
        font-size: 1.2rem;
    }
</style>