---
layout: post
title: "Dubois Challenge 2024: Plate 1"
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

**Please Note**: The language in this post is from, or referencing, scientific work from 1900. I thought it would be wrong to alter the wording because language is a powerful element of Du Bois' work, especially for readers in a modern context. However, I recognize race is a difficult subject for white people to navigate with appropriate awareness and compassion, so if you disagree with how this work is presented please reach out to me and let me know.

<Map />

The [Du Bois Visualization Challenge](https://www.datavisualizationsociety.org/news/2024/2/2/advance-your-data-viz-skills-with-the-weekly-2024-du-bois-visualization-challenge) honours the social scientist and data visualization pioneer, W.E.B. Du Bois.
Below is my (in progress) attempt to recreate the introductory visualization of _The Georgia Negro_ study, created by Du Bois for a scientific exhibit in Paris in 1900.

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
 recreate Du Bois' map, we don't actually need either dataset. 
We need the coordinates of the 5 slave trade routes and the polygons to depict the destinations of these African slaves to the western hemisphere.
For this, I used [geojson.io](https://geojson.io) to select the coordinates of the sources and destinations of the routes according to Du Bois' visualization while cross-referencing the locations with this [map](https://www.slavevoyages.org/voyage/database#maps) from the Trans Atlantic Slave Trade Database.
<!--
I opened the data using R and did some basic descriptive statistics checks and summarised the data to make sure I was getting the same results as the `route-pairs` summary file.
I initially summarised the number of voyages and slaves carried by the port of origin and arrival.
It turns out this was instructive because the `route-pairs` actually used the place of purchase rather than port of origin as the source.

One challenge was the ambiguity of geographic information.
For example, the most common route in the slave trade data was between "Costa da Mina" and "Bahia, port unspecified". 
Costa da Mina appears to be a region that encompasses modern day Ghana, Togo, Benin, and Nigeria, so I had to make the decision of how to plot this region on the map.
In cases like these, I chose a midpoint in the region.
 to plot the ~200 locations in the Trans-Atlantic Slave Trade Database. -->

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
