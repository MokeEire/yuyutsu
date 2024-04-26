<script>
    export let cx;
    export let height;
    export let toolTipData;

    $: radius = height / 2
</script>

<!-- svelte-ignore a11y-click-events-have-key-events --->
<circle
  class="globe"
  stroke="black"
  cx={cx}
  cy={height/2}
  r={radius}
  on:click={() => {
    tooltipData = null;
  }}
  on:focus={() => {
    tooltipData = null;
  }}
  tabIndex="0"
/>

<style>
    .globe {
        fill: #6c96bb21;
    }
</style>
