<script>
    export let height;
    export let width;
    export let xScale;
    export let label;
    export let margin;

    // Format our ticks as short date strings
    const TICK_LENGTH = 8;
    $: ticks = xScale.ticks(8)
    //$: ticks = isUnhovered ? xScale.ticks(6) : [hoveredDate];
</script>

{#each ticks as tick}
    <line
        x1={xScale(tick)}
        x2={xScale(tick)}
        y1={height-margin.bottom}
        y2={height-margin.bottom + TICK_LENGTH}
        stroke="#999"
    />
    <text
        x={xScale(tick)}
        y={height-margin.bottom + TICK_LENGTH}
        dy="6"
        dominant-baseline="hanging"
        text-anchor="middle"
        fill="#999"
    >
        {tick}
    </text>
{/each}

<text x={width} y={height+margin.bottom} 
    fill="#999"
    dominant-baseline="text-after-edge"
    text-anchor="end">
    {label}
</text>

<style>
    text {
        text-transform: uppercase;
        font-size: 0.9rem;
    }
</style>