---
layout: post
title: "Dubois Challenge 2024: Slave Trade Routes"
description: "Celebrating a pioneer of data visualization"
categories:
  - dataviz
date: 2024-04-23
published: true
image: https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80
header: https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80
showHeader: false
---

<script>
  import Map from './Map.svelte'
</script>

<Map />

**Please Note**: Racial terminology in this post is from, or referencing, scientific work from the late 1800s and early 1900s. It's not clear to me whether to change the language or preserve the context, so I chose the latter because I felt the language is one of the elements which makes Du Bois' work so powerful. Race is often a sensitive subject for people, so if you have thoughts or comments about how this work is presented please reach out to me.

The [Du Bois Visualization Challenge](https://www.datavisualizationsociety.org/news/2024/2/2/advance-your-data-viz-skills-with-the-weekly-2024-du-bois-visualization-challenge) honours the social scientist and data visualization pioneer, W.E.B. Du Bois.
Below is my (in progress) attempt to recreate one of his plates from _The Georgia Negro_ study

# Process

1. Create the twin globes
2. Style the plates
3. Prepare the data
4. Draw the paths
5. Draw the regions

## Create the twin globes

## Style the plates

## Prepare the data

The data for this challenge is provided in the [GitHub repo](https://github.com/ajstarks/dubois-data-portraits/tree/master/challenge/2024/challenge04) in the `routes` and `route-pairs` CSV files.
I opened the data using R and did some basic descriptive statistics checks and summarised the data to make sure I was getting the same results as the `route-pairs` summary file.
I initially summarised the number of voyages and slaves carried by the port of origin and arrival.
It turns out this was instructive because the `route-pairs` actually used the place of purchase rather than port of origin as the source.

One challenge was the ambiguity of geographic information.
For example, the most common route in the slave trade data was between "Costa da Mina" and "Bahia, port unspecified". 
Costa da Mina appears to be a region that encompasses modern day Ghana, Togo, Benin, and Nigeria, so I had to make the decision of how to plot this region on the map.
In cases like these, I chose a midpoint in the region.
I used [geojson.io](https://geojson.io) to plot the ~200 locations, cross-referencing the locations in the data with the [map](https://www.slavevoyages.org/voyage/database#maps) in the Trans-Atlantic Slave Trade Database.

Sources for this part of the work:

- https://www.slavevoyages.org/blog/tag/intro-maps
- https://web.archive.org/web/20181030091133id_/https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B19B462581852D91BE63F59180DAAB7B/S0361541300003788a.pdf/div-class-title-ethnicities-of-enslaved-africans-in-the-diaspora-on-the-meanings-of-mina-again-div.pdf
- https://publications.iai.spk-berlin.de/servlets/MCRFileNodeServlet/Document_derivate_00001091/BIA_119_036_068.pdf
- https://www.quora.com/Was-Mina-the-Portuguese-name-for-Ghana
- https://en.wikipedia.org/wiki/Kingdom_of_Bonny
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10502851/
- https://www.cambridge.org/core/journals/international-review-of-social-history/article/expansion-of-slavery-in-benguela-during-the-nineteenth-century/4A502CB651CEA5CB1249605978352A87

## Draw the paths

## Draw the regions

<style>
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  .plate {
    margin: 20vh auto;
    background: #e3cfbc;
    padding: 4px 16px;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Public Sans", sans-serif;
  }

  .chart-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 15vh;
    line-height: 1.2;
    font-family: "Public Sans", sans-serif;
    color: black;
  }

  .chart-title h1 {
    color: black;
    font-family: "Public Sans", sans-serif;
  }

  .chart-title h1 {
    font-weight: 700
  }

  .chart-title span {
    font-weight: 600
  }

  .chart-desc {
    margin: 15vh 5vh;
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
  }

  .globes {
    max-width: 968px;
    margin: 15vh 0;
  }

  svg {
    overflow: hidden;
    margin: 4px 0;
  }

  path.country {
    cursor: pointer;
  }

  .caption {
    text-align: right;
  }
  
</style>
