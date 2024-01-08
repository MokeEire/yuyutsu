---
layout: post
title: Wok Science
description: Visualizing the physical properties of Woks (from J. Kenji Lopez Alt's new book)
categories:
  - cooking
date: "10th April 2021"
edit: https://github.com/sharu725/yuyutsu/blob/master/src/routes/posts/example-content/%2Bpage.md
image: https://picsum.photos/id/1083/800/350
published: false
---



<script>
  import Scrolly from "$lib/components/Scrolly.svelte";
  import WokViz from "./WokViz.svelte";

  const steps = [
    '<p>The first quality is <strong>specific heat capacity</strong>, which is the amount of energy in joules needed to heat a gram of material by a certain number of degrees.</p>',
    '<p>However, when we think about heating a gram of a material we are not considering that a cast iron pan is going to weigh a lot more than an aluminium pan of the same size. The <strong>density</strong> of the material is measured in grams per cubic inch.</p>',
    '<p>From this we get <strong>volumetric heat capacity</strong> which is the energy required to heat a cubic inch by a certain number of degrees</p>'
  ]

  let currentStep
</script>

<section>
  <p>I love to cook. 
I also love to integrate technology, data, and specifically data visualization into activities where it's arguably superfluous.
A similar nerdiness (and much more expertise) is what drew me to J. Kenji Lopez Alt's videos and cookbooks.
I recently received his new book "The Wok" and wanted to practice my d3 and Svelte skills with some of the interesting things Kenji talks about.
</p>
  <div class="section-container">
    <div class="steps-container">
      <Scrolly bind:value={currentStep}>
        {#each steps as text, i}
          <div class="step" class:active={currentStep === i}>
            <div class="step-content">
            {@html text}
            </div>
          </div>
        {/each}
        <div class="spacer" />
      </Scrolly>
    </div>
    <div class="sticky">
      <WokViz step={currentStep} data={steps}/>
      </div>
  </div>
</section>


<style>
  section.body-text {
    margin: 0 auto;
    max-width: 1000px;
  }
  .sticky {
    position: sticky;
    top: 25%;
		flex: 1 1 50%;
    width: 60%;
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