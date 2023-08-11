---
layout: post
title: "AI forecasts timeline"
description: "How have AI predictions fared throughout history?"
categories:
  - AI Policy
date: "3rd August 2023"
published: true
edit: https://github.com/sharu725/yuyutsu/blob/master/src/routes/posts/second-post/%2Bpage.md
image: https://picsum.photos/1000/250
header: https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80
---

I compiled a list of forecasts about AI's future and wanted to display them on a timeline.
How far into the future have they been looking?
Have they been right?
Currently this is scatterplot based on the code from [Connor Rothschild's helpful workshop](https://github.com/connorrothschild/iib-svelte-workshop-chart/tree/master), but I am aiming to build it into a timeline/chord diagram in future.

<script>
  import Scrolly from "$lib/components/Scrolly.svelte";
  import AIPred from "$lib/components/AIPred.svelte";
  // Format our ticks as short date strings
  import { timeFormat } from "d3-time-format";
  const dateFormat = timeFormat("%Y");

  // Use predictions JSON as scroll steps
  import steps from "$lib/data/ai-pred.json";

  let currentStep
  
</script>

<section>
  <div class="section-container">
    <div class="sticky">
        <AIPred step={currentStep} data={steps}/>
      </div>
    <div class="steps-container">
      <Scrolly bind:value={currentStep}>
        {#each steps as {when, who, what, by, category}, i}
          <div class="step" class:active={currentStep === i}>
            <div class="step-content">
              <h1>By {dateFormat(new Date(by))}</h1>
              <p>{what}</p>
              <caption>{who} in {dateFormat(new Date(when))}</caption>
            </div>
          </div>
        {/each}
        <div class="spacer" />
      </Scrolly>
    </div>
  </div>
</section>

<style>
.spacer {
    height: 40vh;
  }

  .sticky {
    position: sticky;
    top: 10%;
		flex: 1 1 60%;
    width: 60%;
  }

  .section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
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
	
  .steps-container,
  .sticky {
    height: 100%;
  }

  .steps-container {
    flex: 1 1 40%;
    z-index: 10;
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