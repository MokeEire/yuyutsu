<script>
    export let id = "circle";
    export let width;
    export let height;
</script>
<defs>
    <clipPath id={id}>
      <circle cx={width*.25}
      cy={height/2}
      r={height/2} />
      <circle cx={width*.75}
      cy={height/2}
      r={height/2} />
    </clipPath>
  </defs>