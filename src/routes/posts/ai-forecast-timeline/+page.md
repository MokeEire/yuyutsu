---
layout: post
title: "A history of AI forecasts"
description: "Predictions are hard, especially about AI's future."
categories:
  - AI Policy
  - Dataviz
date: 2023-08-03
published: true
image: "/posts/ai-forecast-timeline/header.png"
header: https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80
---

<section class="body-text">
  I compiled a list of forecasts about AI's future and wanted to display them on a timeline.
  How far into the future have they been looking?
  Have they been right?
  With the help of Connor Rothschild's <a href="https://github.com/connorrothschild/iib-svelte-workshop-chart/tree/master">Svelte+D3 workshop</a> and <a href="https://www.connorrothschild.com/post/svelte-scrollytelling">scrollytelling tutorial</a>, I put together a timeline/chord diagram to see what our brightest minds have predicted about AI's.
</section>

<script>
  import Scrolly from "$lib/components/Scrolly.svelte";
  import AIPred from "./AIPred.svelte";
  // Format our ticks as short date strings
  import { timeFormat } from "d3-time-format";
  const dateFormat = timeFormat("%Y");

  // Use predictions JSON as scroll steps
  import steps from "$lib/data/ai-pred.json";

  let currentStep
  // Useful things:
  //- https://www.svgviewer.dev/
</script>

<section>
  <div class="section-container">
    <div class="sticky">
        <AIPred step={currentStep} data={steps}/>
      </div>
    <div class="steps-container">
      <Scrolly bind:value={currentStep}>
        {#each steps as {when, who, biolink, what, by, category, ref, reflink}, i}
          <div class="step" class:active={currentStep === i}>
            <div class="step-content">
            <p class="date"><a href={biolink}>{who}</a> in {dateFormat(new Date(when))}</p>
              <h2 class="pred-by">{category}</h2>
              <h3 class="pred-by">By {dateFormat(new Date(by))}</h3>
              {#each what as w}
                <p>{@html w}</p>
                {/each}
              <caption><a href={reflink}>Source</a></caption>
            </div>
          </div>
        {/each}
        <div class="spacer" />
      </Scrolly>
    </div>
  </div>
</section>

<section class="body-text">
  So far, none of these predictions have been correct.
</section>

<style>
  section.body-text {
    margin: 0 auto;
    max-width: 1000px;
  }
  .sticky {
    position: sticky;
    top: 10%;
		flex: 1 1 50%;
    width: 50%;
  }

  .section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
    position: relative;
  }

  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    font-size: 1rem;
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: .5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    text-align: left;
		width: 75%;
		margin: auto;
		max-width: 500px;
  }

	.step.active .step-content {
		background: white;
		color: black;
	}

  .step-content > caption {
    text-align: right;
    font-size: .9rem;
    font-family: var(--title-font);
  }
	
  .steps-container,
  .sticky {
    height: 100%;
  }

  .steps-container {
    flex: 1 1 50%;
    z-index: 10;
  }

  .date {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.8;
    font-family: var(--title-font);
    margin-bottom: 0;
  }

  .pred-by {
    margin-top: -12px;
  }

  .spacer {
      height: 40vh;
    }

  /* Comment out the following line to always make it 'text-on-top' */
  @media screen and (max-width: 768px) {
    .section-container {
      flex-direction: column-reverse;
    }
    .sticky {
      width: 95%;
			margin: auto;
    }
  }
</style>