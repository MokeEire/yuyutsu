---
layout: post
title: "Notes on Better Data Visualizations with Svelte+D3"
description: "Documenting my progress through a fantastic data viz course"
categories:
  - dataviz
date: 2024-04-04
published: false
image: https://images.unsplash.com/photo-1529027288157-572df421f425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
header: https://images.unsplash.com/photo-1529027288157-572df421f425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
---

<script>
    import Scatterplot from './Scatterplot.svelte';
</script>

# Intro

Course is divided into four modules that are focused on creating different types of visualizations: 1) a scatterplot, 2) a beeswarm chart, 3) an interactive map, and 4) a scrollytelling piece.

Some of the components of Svelte we'll be using:

- Reactivity
- Data bindings
- State management
- Tweening

Some of the JavaScript elements that will be valuable to understand:

- Data types
- Array methods
- Ternary operators

Some useful links:
- [Steph Dietz' blog](https://www.steph-dietz.com/)
- [Geoff Rich' blog](https://geoffrich.net/)
- [The Svelte Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte)
- [Arrow functions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript Data Types](https://javascript.info/types)

# Svelte & D3 Fundamentals

Svelte is a JavaScript compiler which abstracts interaction with the DOM (Document Object Model)

Svelte is built using `.svelte` files, each usually representing a *"component"*.
Each `.svelte` file can have up to 3 elements: a `<script>` tag, markup, and a `<style>` tag.
One powerful aspect of Svelte is that the logic written in the `<script>` tag can be used in the markup.

Why use Svelte?
- It is designed with visualization in mind (created by Guardian data journalist)
- Reactivity is built in intuitively
- We are in a moment where the data viz community is voicing frustrations with D3 and excitement is building with Svelte

# Building a Scatterplot with Svelte & D3

In this module we'll be building a scatterplot which:
- is responsive
- has hover interactions, and
- has meaningful peripheral elements.

## Draw your first SVG element

First thing to do: draw the circles.

<Scatterplot />

This scatterplot is created using the following code where `width=400` and `height=300`.

```svelte
<svg {width} {height}>
        {#each data as d}
        <circle 
        cx={d.grade}
        cy={d.hours}
        r={10}
        fill="purple"
        stroke="black"
        stroke-width="1"></circle>
    {/each}
    </svg>
```

There are a few things going wrong here, namely the data is not scaled. 
We need to create scaling functions using D3 so that when we supply a value of 100 (representing 100%), it is placed at the far end of the axis rather than at 100 pixels, which is the default or unscaled value. 
First we'll create the scale for the X-axis with the following code

```javascript
let xScale = scaleLinear()
        .domain([0, 100]) // The range of inputs we want to map [min, max]
        .range([0, width]); // The range of outputs we want to return in px [min, max]
```

<Scatterplot scaledX=True/>

The Y-axis is a little trickier because coordinates with SVG are counterintuitive. 
We are used to coordinate systems where the origin point `(0,0)` is in the bottom left corner (assuming we're looking at positive values). 
With SVG, the origin point `(0,0)` is in the top left corner, so when we scale the values using d3's `scaleLinear()` function, we flip the values supplied to `.range()` such that the lower bound is the height and the upper bound is 0 (again, considering only positive values).

<Scatterplot scaledX=True scaledY=True />

## Draw Axes, Gridlines, and Labels

### 1. Draw the Axes using SVG

### 2. Transform the Axes using CSS

Why use translate?
https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/

### 3. 