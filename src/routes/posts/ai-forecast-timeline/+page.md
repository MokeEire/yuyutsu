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
header: https://picsum.photos/1000/250
---

I compiled a list of forecasts about AI's future and wanted to display them on a timeline.
How far into the future have they been looking?
Have they been right?
Currently this is scatterplot based on the code from [Connor Rothschild's really helpful workshop](https://github.com/connorrothschild/iib-svelte-workshop-chart/tree/master), but I aim to build it into a timeline/chord diagram in future.

<script>
  import AIPred from "$lib/components/AIPred.svelte";
</script>

<AIPred />
