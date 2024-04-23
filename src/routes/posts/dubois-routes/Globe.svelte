<script>
    export let cx;
    export let height;
    export let radius;
    export let toolTipData;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events --->
<circle
  class="globe"
  fill="#d7b89c"
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
