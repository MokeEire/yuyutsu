---
layout: post
title: "Du Bois Viz Challenge 2024: Plate 1"
description: "Celebrating a pioneer of data visualization"
categories:
  - dataviz
date: 2024-04-23
published: true
image: /posts/routes.png
header: /posts/routes.png
showHeader: false
---

<script>
  import Map from './Map.svelte'
</script>

**Please Note**: The language in this post is directly from W.E.B. Du Bois' scientific study in 1900. [Here](https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge04/original-plate-01.jpg) is the original piece. It felt wrong to alter the wording because the language is a powerful element of Du Bois' work, especially for readers in a modern context. However, race is a difficult subject for white people to navigate with appropriate awareness and compassion, so please reach out with any thoughts about the way this work is presented.

<div class="plate">
  <div class="chart-title">
    <h1>The Georgia Negro.</h1>
    <span>A Social Study</span>
    <span>By</span>
    <span>W.E. Burghardt Du Bois</span>
  </div>
  <Map />
<div class="legend">
      <div class="legend-item">
        <span>&#8803;</span>
        <span>Routes of the African slave trade.</span>
      </div>
      <div class="legend-item">
        <span>&#10026;</span>
        <span>The State of Georgia.</span>
      </div>
    </div>
    <div class="chart-desc">
      <p>
        This case is devoted to a series of charts, maps and other devi–ces
        designed to illustrate the development of the American Negro in a single
        typical state of the United States.
      </p>
      <p>"The problem of the 20th century is the problem of the color-line."</p>
    </div>
    <p class="caption">
      Source: <a href="https://www.slavevoyages.org/voyage/database"
        >Trans-Atlantic Slave Trade Database</a
      >
    </p>
    </div>

This is part of the [Du Bois Visualization Challenge](https://www.datavisualizationsociety.org/news/2024/2/2/advance-your-data-viz-skills-with-the-weekly-2024-du-bois-visualization-challenge) - an annual challenge which honours the social scientist and data visualization pioneer, W.E.B. Du Bois.

# Process

I started out using code from Connor Rothschild's lesson [Create an Interactive Globe Visualization With Svelte + D3.js](https://www.newline.co/courses/better-data-visualizations-with-svelte/what-we-ll-be-building-globe).
This included using an SVG circle as the background of the globe and using the [`d3-geo`](https://github.com/d3/d3-geo) and [TopoJSON](https://github.com/topojson) libraries to render countries' borders and shapes.
The development process went something along the lines of:

1. Create the twin globes
2. Prepare the data
3. Draw the paths
4. Draw the regions

## Create the twin globes

The first challenge was creating the twin globes Du Bois uses to show the two different sides of the world.
I used two SVG `circle` elements, their centres placed at 25% and 75% of the chart's width, to create the visual outline of the two globes.
Next I needed to plot the countries' borders.
I tried a few different [projections](https://d3js.org/d3-geo/projection), but didn't come across one which looked right.
[`geoEquirectangular()`](https://d3js.org/d3-geo/cylindrical#geoEquirectangular) looked very close, but I still needed to figure out how to restrict the elements to those within the two globes.
To do this, I used [SVG `clipPath` elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Clipping_and_masking) which were identical in size to the circles used for the two globes.
For example, here is the map without clipping:

<Map clip={false} />


## Prepare the data

The data for this challenge is provided in the [GitHub repo](https://github.com/ajstarks/dubois-data-portraits/tree/master/challenge/2024/challenge04) in the `routes` and `route-pairs` CSV files.
To recreate Du Bois' map, we don't actually need either dataset.
In fact, neither dataset is even helpful for recreating Du Bois' work (though they have inspired a future extension of this work).
We need the coordinates of the 5 slave trade routes and the polygons to depict the destinations of these African slaves to the western hemisphere.
This did in fact require the manual (gasp!) effort to draw these custom paths and polygons and export them into JSON format. 
I cross-referenced the locations in Du Bois' visualization with the [map](https://www.slavevoyages.org/voyage/database#maps) from the Trans Atlantic Slave Trade Database used [geojson.io](https://geojson.io) to select the coordinates of the sources and destinations of each route.

In the future, I am hoping to extend this visual to incorporate the more granular data of individual slave trade routes.

<!--
I opened the data using R and did some basic descriptive statistics checks and summarised the data to make sure I was getting the same results as the `route-pairs` summary file.
I initially summarised the number of voyages and slaves carried by the port of origin and arrival.
It turns out this was instructive because the `route-pairs` actually used the place of purchase rather than port of origin as the source.

One challenge was the ambiguity of geographic information.
For example, the most common route in the slave trade data was between "Costa da Mina" and "Bahia, port unspecified".
Costa da Mina appears to be a region that encompasses modern day Ghana, Togo, Benin, and Nigeria, so I had to make the decision of how to plot this region on the map.
In cases like these, I chose a midpoint in the region.
 to plot the ~200 locations in the Trans-Atlantic Slave Trade Database. -->

## Draw the paths

As mentioned above, I generated the JSON for the routes with an online tool.
The routes look something like this:

```
{
      "Source": "\"Western Africa\"",
      "Destination": "\"Brazil\"",
      "coords": [
        [
          14.7587,
          -22.1929
        ],
        [
            -38.4388, -12.9200
        ]
      ]
    }
```

Using Svelte, I created an SVG `<path>` element for each route, and used the [`draw`](https://svelte.dev/docs/svelte-transition#draw) transition to animate the routes from their source to their destination.

## Draw the regions

I ran into an interesting problem when drawing the regions - [the points of polygon geometries need to be arranged in anti-clockwise order](https://imfeld.dev/writing/introduction_to_geojson).
Unfortunately I had not adhered to this rule when creating the polygons and I didn't really want to go back and re-do all that work.
Thankfully, there is a library that will rearrange the points to be in the order you need: [`turf.js`](https://turfjs.org/docs/#rewind) (also see [this StackOverflow post](https://stackoverflow.com/questions/49311001/d3-js-drawing-geojson-incorrectly)).
With this problem solved, I drew the regions and used Svelte's [`fade`](https://svelte.dev/docs/svelte-transition#fade) transition on the destination shapes.
This transition, in combination with the animated routes, are meant to emphasize Du Bois' static representation  of the migration of slaves beyond their initial landing point.

# References

- https://www.slavevoyages.org/blog/tag/intro-maps
- https://web.archive.org/web/20181030091133id_/https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B19B462581852D91BE63F59180DAAB7B/S0361541300003788a.pdf/div-class-title-ethnicities-of-enslaved-africans-in-the-diaspora-on-the-meanings-of-mina-again-div.pdf
- https://publications.iai.spk-berlin.de/servlets/MCRFileNodeServlet/Document_derivate_00001091/BIA_119_036_068.pdf
- https://www.quora.com/Was-Mina-the-Portuguese-name-for-Ghana
- https://en.wikipedia.org/wiki/Kingdom_of_Bonny
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10502851/
- https://www.cambridge.org/core/journals/international-review-of-social-history/article/expansion-of-slavery-in-benguela-during-the-nineteenth-century/4A502CB651CEA5CB1249605978352A87

<style>
  .plate {
    margin-bottom: 10vh;
    background: #e3cfbc;
    padding: 4px 16px;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Public Sans", sans-serif;
    opacity: 0.9;
  }

  .chart-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
    line-height: 1.2;
    font-family: "Public Sans", sans-serif;
    color: black;
  }

  .chart-title h1 {
    color: black;
    font-family: "Public Sans", sans-serif;
    font-size: 1.1rem;
  }

  .chart-title h1 {
    font-weight: 700;
    margin: 1rem 0 0;
  }

  .chart-title span {
    font-weight: 600;
  }

  .chart-desc {
    margin: 1.5rem 0 2rem;
  }

  .chart-desc p {
    font-weight: 100;
    word-wrap: break-word;
    line-height: 1.25;
    hyphens: auto;
  }

  .chart-desc :not(p:last-of-type) {
    text-align: left;
    letter-spacing: 1.25px;
    text-indent: 15%;
    margin-bottom: 1rem;
  }

  .legend {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin: 0 auto;
    width: fit-content;
    text-align: left;
    opacity: 0.75;
    font-size: 1.1rem;
  }

  .legend span {
    font-weight: 100;
  }

  .legend-item {
  }

  .caption {
    text-align: right;
  }
</style>