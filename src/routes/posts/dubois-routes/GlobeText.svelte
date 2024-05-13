<script>
    export let width;
    export let height;
    export let clip;

</script>

<path
      d="M {width * 0.25}, 0 A {width * 0.25} {height * 0.5} 0 0 1 {width *
        0.5}, {height * 0.5}"
      id="globe-text-left"
      fill="none"
      stroke="none"
    />
    <path
      d="M {width * 0.5}, {height * 0.5} A {width * 0.25} {height *
        0.5} 0 0 1 {width * 0.75}, 0"
      id="globe-text-right"
      fill="none"
      stroke="none"
    />
    <text
      dy="-6"
      text-transform="upper"
      opacity=".7"
      font-weight="100"
      font-size="{width / 900}rem"
      clip-path={clip ? "" : "url(#globe-shape)"}
    >
      <textPath href="#globe-text-left" startOffset="27%" textLength="50%">
        Distribution of
      </textPath>
    </text>
    <text
      dy="-6"
      text-transform="upper"
      opacity=".7"
      font-weight="100"
      font-size="{width / 900}rem"
      clip-path={clip ? "" : "url(#globe-shape)"}
    >
      <textPath href="#globe-text-right" startOffset="35%" textLength="50%">
        the Negro Race
      </textPath>
    </text>