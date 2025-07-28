---
layout: post
title: "The AI is getting faster"
description: "Is it going to continue at this pace?"
categories:
  - AI Policy
date: 2023-08-09
published: true
edit: https://github.com/mokeeire/yuyutsu/blob/master/src/routes/posts/ai-progress/%2Bpage.md
image: https://media.tenor.com/M4njES4jiw4AAAAC/leon-airplane-the-movie.gif
header: https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80
---

The history of artificial intelligence is littered with expert forecasts which have underestimated either the speed of technological progress or the difficulty of the problem.
As part of week 1 of BlueDot's AI Safety course, I studied the development of AI over the past decade and offered a forecast of AI progress in the near future.

In summary: we will see some revolutionary advancements in AI over the next 3-5 years, but we will only see incremental progress in the next year or two.

## What does AI need to make progress?

### Better algorithms

Algorithms have improved significantly since the success of deep learning in the 2010s, with advances in neural network architecture performance and flexibility of machine learning models across tasks in vision, strategy, and language.
While progress is often attributed to the increased availability of computation and data, researchers found that [improvements in algorithms were at least as important as increased compute availability](https://epochai.org/blog/revisiting-algorithmic-progress) in domains like computer vision. 
Most improvements in algorithms were "compute-augmenting algorithmic advances" focused on getting better performance from less computational power.
Going forward, improving the "explainability" of the underlying algorithms will be vital for AI progress. 
*Explainability* means the party responsible for deploying an AI system can explain how the models work, how they process data, and how they reach particular conclusions.
This will be important for AI progress in part because legislators have already latched onto this concept as a basis for regulating the industry, and because explainability will inform our understanding of AI systems' **alignment**, or how the systems align with human values.

### More compute

Increasing computational power has been a crucial driver of AI progress alongside algorithmic improvements throughout the deep learning revolution. 
One reason compute has been so important to AI progress is due to its scalability: increasing computing power is often much easier than improving a complex algorithm.
[The graph of the Top 500 supercomputers](https://www.top500.org/statistics/perfdevel/) suggests top computers might be due for a significant advance in the near future, though computers towards the bottom of the list (which are still very powerful) are improving much more slowly.
The supercomputer currently ranked #500 is about as powerful as the top supercomputer in 2010.
This trend could concentrate control over AI research priorities among a select few supercomputer owners.

### More data

While the amount of data is consistently growing, it is less clear whether newly available data is also increasingly _useful_, compared to past data.
In systems where we are refining data collection and management, the utility of data is likely to improve.
Fields which rely on web-scraped data from the internet may experience a deluge of new content as a result of generative AI use, but this data may not be as valuable.
It may also amplify existing biases in models by using AI-generated output as input data.

## What might slow AI down?

### It has slowed down each time before

AI has historically progressed in leaps and lulls.
If we use history to gauge a base rate for AI progress, we would expect a slower period of progress to follow significant advances.
Considering we are on the tail end of the deep learning revolution, it might be reasonable to expect the next few years to be a quieter period where progress is building towards the next big advance.
However, the huge increase in investment in the industry, combined with the wide availability of data and compute that did not exist in prior periods of AI activity might suggest that this lull, if indeed we are in one, might be shorter than the last.

### Governments might just do something

Another potential obstacle to accelerating AI capabilities is the potential of government intervention.
Based on their relative proactivity in the realm of data privacy, it seems more likely that the European Union will lead the efforts to enforce safety practices in AI development than the US.
US Senate Majority Leader [Chuck Schumer has also indicated interest in developing legislation around AI](https://www.csis.org/analysis/sen-chuck-schumer-launches-safe-innovation-ai-age-csis), but the framework appears to prioritize market innovation over the risks to society.
The levers that determine safety and progress in AI development are still ambiguous to legislators, which is a hurdle for drafting effective legislation.
Politicians may not act until a catalyzing event provides a clearer example of what needs regulation.
Some examples of such catalyzing events that have garnered media attention over the past few years:

- [Google employee claimed that their AI chatbot system was sentient](https://www.theguardian.com/technology/2022/jun/12/google-engineer-ai-bot-sentient-blake-lemoine)
- [An open letter from AI experts calling for a pause on training AI systems](https://futureoflife.org/open-letter/pause-giant-ai-experiments/)
- [Robots using AI language models told the UN that AI could do a better job governing than humans](https://www.rte.ie/news/2023/0707/1393383-ai-robots-rule-the-world/)

We will likely see governments around the world institute some meaningful laws to enforce safe practices in AI development in the next few years.
Hopefully we do not have to wait for a catastrophe to react.

## References

- [But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk) + [Gradient descent, how neural networks learn](https://www.youtube.com/watch?v=IHZwWFHWa-w), Chapters 1-2 from [3Blue1Brown's Neural networks/Deep Learning series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) (2017)

- [Visualizing the deep learning revolution](https://medium.com/@richardcngo/visualizing-the-deep-learning-revolution-722098eb9c5), by Richard Ngo (2023)

- [A short introduction to machine learning](https://www.alignmentforum.org/posts/qE73pqxAZmeACsAdF/a-short-introduction-to-machine-learning), by Richard Ngo (2021)

- [The AI Triad and What It Means for National Security Strategy](https://cset.georgetown.edu/wp-content/uploads/CSET-AI-Triad-Report.pdf), a paper from Georgetown's Center for Security and Emerging Technologies written by Ben Buchanan (2020)

- [How ChatGPT Works Technically](https://www.youtube.com/watch?v=bSvTVREwSNw), a video breaking down the processes of ChatGPT, currently the most well known large language model (2023)

- [Algorithmic progress in computer vision](https://arxiv.org/abs/2212.05153), a paper