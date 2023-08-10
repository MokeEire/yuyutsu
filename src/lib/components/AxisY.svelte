<script>
    export let width;
    export let yScale;

    // Format our ticks as short date strings
    import { timeFormat } from "d3-time-format";
    const dateFormat = timeFormat("%Y");

    const TICK_LENGTH = 8;
    const ticks = yScale.ticks(8)
</script>

{#each ticks as tick}
    <text
        x="0"
        dx="-4"
        y={yScale(new Date(tick))}
        text-anchor="end"
        dominant-baseline="middle"
        fill="#999"
    >
    {dateFormat(tick)}
    </text>
    <line 
        x1="0" 
        x2={width} 
        y1={yScale(new Date(tick))} 
        y2={yScale(new Date(tick))} 
        stroke="#999" 
    />
{/each}