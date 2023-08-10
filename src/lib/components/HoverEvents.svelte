<script>
    export let xScale;
    export let yScale;
    export let data;
    export let margin;
    export let width;
    export let height;
    export let hoveredDate;
    export let maxDate;

    const handleMousemove = function (e) {
        hoveredDate = xScale.invert(e.offsetX - margin.left);
    };

    const handleMouseleave = function () {
        hoveredDate = maxDate;
    };

    const getPredValue = (date) =>
        data.filter((d) => new Date(d.when) >= date)[0]?.by;
</script>

<rect
    class="hover-listener"
    fill="transparent"
    {width}
    {height}
    on:mousemove={handleMousemove}
    on:mouseleave={handleMouseleave}
/>

<line
    x1={xScale(hoveredDate)}
    x2={xScale(hoveredDate)}
    y1={yScale(new Date(getPredValue(hoveredDate)))}
    y2={yScale(hoveredDate)}
    stroke="darkgrey"
    stroke-dasharray="2, 2"
    pointer-events="none"
/>

<style>
    rect {
        cursor: crosshair;
    }
</style>