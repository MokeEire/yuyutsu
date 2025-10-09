---
layout: post
title: "What could go wrong with AI?"
description: "An overview of the ongoing harms, risks, and doomsday placards."
categories:
  - AI Policy
date: 2023-08-16
updated: 2024-07-18
published: true
image: https://images.unsplash.com/photo-1529027288157-572df421f425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
header: https://images.unsplash.com/photo-1529027288157-572df421f425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
---

As artificial intelligence develops, we need to be prepared for the risks as well as the rewards. 
The risks, as with many technologies, include misuse and accidental harm from human actions. 
These risks are more than enough to endanger our existence but AI also has potential to become more powerful than us. 
Although [scientists are loudly warning the public of the potentially catastrophic risks of AI](https://arxiv.org/abs/2306.12001), we also need to consider the many smaller, more likely scenarios which could leave humanity worse off, particularly if they occur together. 
To explore the likelihood and danger of each risk, let’s first define some terms. 

In this post I want to answer a few questions:

1. What are the risks of AI in its current state?
2. What are the risks of AI if it becomes much more intelligent?

To explore the likelihood and danger of each risk, I use the framework provided by BlueDot Impact, which is loosely based on the [Overview of Catastrophic AI Risks](https://www.safe.ai/ai-risk) published by the Center for AI Safety:

<aside>
💡 **Do you think risks arising from misuse, accidents, or rogue, agentic AI systems, are more likely to cause harm?**

Does this answer change when limiting your time horizon to 5 years, 15 years and 30 years?

</aside>


## Misuse

Misuse is intentional (human) behaviour that leverages AI to cause harm. 
We already see misuse of AI with tools like computer vision and generative AI.
Computer vision and facial recognition enable authoritarian governments to conduct more effective population surveillance.
China has used facial recognition technologies (FRT) [to profile and track Uyghurs](https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html), an ethnic muslim minority group, while Russia used FRT [to identify and arrest anti-government protesters, in some cases as a preventative measure](https://www.reuters.com/investigates/special-report/ukraine-crisis-russia-detentions/), shortly after Russia's invasion of Ukraine. 

But misuse is not limited to powerful authoritarian governments. 
Cybercriminals are leveraging generative AI and machine learning techniques to [better guess passwords, tailor content for social engineering attacks, and autonomously improve performance of cyberattacks](https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/exploiting-ai-how-cybercriminals-misuse-abuse-ai-and-ml).
Generative AI reduced the cost of conducting disinformation campaigns and enhanced the targeting with the capability to tailor content to individuals, given the right data. 
Advances in biotechnology suggest that [tools and techniques required for engineering pandemic-level biological weapons will be accessible to non-experts in the next decade](https://www.gcsp.ch/publications/delay-detect-defend-preparing-future-which-thousands-can-release-new-pandemics).
The concern is that generative AI could be combined with biological design tools to remove the complex technical hurdles to creating and unleashing a dangerous disease. 
There is debate about whether generative AI makes the process any easier than the internet already does. 
In [a red-teaming study examining the of planning a biological attack with or without access to an LLM assistant](https://www.rand.org/pubs/research_reports/RRA2977-2.html), researchers found that LLMs currently “do not meaningfully increase the viability of biological weapon attack planning”.

Even in cases where AI systems are being used to improve human health through the development of new drugs to combat disease, the researchers discovered [their algorithm could easily be manipulated to develop biological weapons instead](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9544280/).

The scale of these risks depends on the availability of high-quality AI models and actors’ ability to integrate the models into their existing processes. In the future, cybersecurity will likely need to use AI defensively to counter the enhanced capabilities of cybercriminals. If proprietary AI systems can outperform open-source models, coordination between AI companies and cybersecurity experts in government and private enterprise may offer an upper hand to the defensive side. Our information system has yet to come up with a solution to manage the deluge of content that existed before, or since, generative AI became widely available. There are some hopes that AI may enable real-time fact checking for high-profile discussions like political debates, but the monetary incentive to create engaging content (whereby “engaging” often equates to fear- or anger-inducing), and the polarized political environment, are two powerful forces that will continue to undermine the public’s ability to trust information with or without generative AI. 

## Accidents

Accidents are unanticipated or unknowingly harmful actions that occur in development or deployment of AI systems.
We see the consequences of accidents already in the form of algorithmic bias in systems that influence hiring decisions, criminal sentencing, and creditworthiness.
As AI systems are integrated into national defense decision-making, the risk of accidents becomes much larger, particularly in the context of nuclear war. 
To the degree that AI provides a competitive advantage, there will be pressure to prioritize progress over safety and diligence. 
Militaries will face pressure to deploy autonomous weapons prematurely to ensure victory in a conflict, especially if defeat is looking likely. 
Corporations will feel pressure to release AI-powered products before thoroughly testing the system to stay ahead of competitors. 
This arms race dynamic will increase the likelihood of accidents and the scale of these risks will increase as AI systems become more capable. 
With each successive accident, we will have an opportunity to revise our practices and the likelihood of future accidents will depend on our responses.

## Rogue, agentic AI systems

An important component of risks from rogue, agentic AI systems that is needed to distinguish them from misuse and accidents is active intent (though not necessarily malicious) of the AI systems themselves. 
In the near term, these kinds of risks seem least likely and least harmful, but I am very uncertain about these estimates. 
We do not have a good baseline for what kind of harm a rogue AI system could inflict. 
The likelihood of this risk depends heavily on advances in our ability to align AI systems, specify robust reward models, and account for the seemingly irreducible human error when specifying tasks. 
Without advances in these areas, it is difficult to see a long term future for humanity. 
If we do make progress, it seems likely that rogue AIs could still represent an infrequent threat similar to the threat of mass shootings in the present.

## Conclusion

I think misuse of AI is all but guaranteed. Accidents will be likely among competitive dynamics, but may motivate policy to reduce the likelihood of further accidents. 
Rogue AIs seem less likely in the near term, but this risk will increase dramatically if we do not make progress on AI alignment in the near future. 
It is important to consider how these risks are interdependent. 
Misuse could increase the frequency of accidents. 
If misuse is prevalent and accidents increase, the likelihood of losing control of AI systems may increase too.

## References

- https://arxiv.org/abs/2306.12001

- https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html

- https://www.reuters.com/investigates/special-report/ukraine-crisis-russia-detentions/

- https://www.gcsp.ch/publications/delay-detect-defend-preparing-future-which-thousands-can-release-new-pandemics

- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9544280/