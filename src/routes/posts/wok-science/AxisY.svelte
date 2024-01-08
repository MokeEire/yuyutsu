<script>
    export let width;
    export let yScale;
    export let label;
    export let margin;


    const TICK_LENGTH = 8;
    $: ticks = yScale.ticks(8)
</script>

{#each ticks as tick}
    <text
        x={margin.left} 
        dx="-4"
        y={yScale(tick)}
        text-anchor="end"
        dominant-baseline="middle"
        fill="#999"
    >
    {tick}
    </text>
    <line 
        x1={margin.left} 
        x2={width} 
        y1={yScale(tick)} 
        y2={yScale(tick)} 
        stroke="#999" 
    />
{/each}
<text x={0} y={0} 
    fill="#999"
    text-anchor="end"
        transform="rotate(-90)">
    {label}
</text>