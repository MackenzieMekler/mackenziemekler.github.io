---
title: My Toolbox Intro and Western Blots
date: 2024-10-28
tags: toolbox
---

### The Toolbox

When I was in high school my math teacher Mr. MacFarlane frequently lectured us on our “mathematical toolboxes”. He used to say that as we learned different problem solving techniques (differentiation rules, L’Hopital, integration by parts, and more) it was like adding tools to a toolbox that we could use to break down problems. He would always tell us that we had freedom to choose any tools that we had acquired and advised us to use them creatively because many problems in calculus can be solved much more easily using less advanced techniques if they were used right. 

As a first year PhD student, I once again feel as if I am building up my toolbox. Every class I hear new techniques. Every day in lab I run experiments that I have never seen. And with every paper I dissect graphs from methods I did not know were possible. It is this toolbox that I am using to answer my exam questions and more importantly it is with this toolbox that I will be approaching my thesis project this time next year. 

With this in mind, I wanted to find a way to organize my tools and to understand them (and their implications on research) more extensively. That is what I hope to do with this series. I will take experiments that I see from anywhere I write on them. As of now I plan to explain how they work, what form their results take, their strengths, their weaknesses, and possibly example use cases. 

### The Western Blot

I think there is no better place to start for this task than the Western blot. From what I have seen so far, this technique finds its way into most cancer research papers and every single subfield. 

Western blots are used to measure a protein’s level in a sample. This has so many implications for measuring pathway activity, gene expression, mutations, and more.

This technique revolves around antibodies. In a brief overview, each organism has an antibody for a near infinite number of antigens (this is super interesting but I will not be talking about it here). Good news: this near infinite repertoire includes your protein of interest! Scientists leverage this in order to create antibodies that are specialized to bind to specific proteins AND that have detection molecules attached to them. This ensures that we are able to find the antibody:protein complex later in the process these detection molecules can be based on chemoluminescence, fluorescence, radioactivity, enzyme-activity, and more. 

In order to use these antibodies, the cells of interest are lysed and protein is extracted from them. The necessary antibodies are then mixed with the protein sample and this is run through a gel. The gel acts to separate the various proteins in the sample by weight. After adequate separation, the sample is imaged/detected in a way that depends on what is attached to the antibody and the data is analyzed! 

### Western Blot Experiment Example

This experiment was taken from the paper: (*i am going to use my csc paper*)

In this paper, the researchers are investigating the effect of a drug on a subpopulation of cells in tumors termed cancer stem cells. In the second figure of the paper, the researchers need to evaluate the “stemness” of these cells by looking at the expression levels of various proteins. This makes running a Western blot a clear choice! It is relatively easy for common proteins and it is a gold standard in comparing/measuring protein levels. 

![Example Blot](/assets/graphics/2024-10-28-my-toolbox-intro-and-western-blots/example-blot.png "Example Blot")

The researchers identified Oct-4, Sox-2, Nanog, Fibronectin, and Vimentin as stem cell markers. They also used E-cadherin as a non-stem cell marker. 

Quickly you may notice that I ignored about half of the columns. Beta-actin is being used as a loading control in this experiment. Loading controls are housekeeping genes that are expressed at very stable levels in a certain cell line. This stable expression allows us to see when there were more cells/more protein in general present in a certain sample. This ensures that we don’t just assume that a protein level goes up or down when in actuality it was just the overall protein level in the sample that was variable. 

Now that all of this is established, lets analyze our blot!

The first thing to note is that all of our loading controls look very consistent from frame to frame for the most part. This means that direct comparisons will probably be pretty good. Starting with Oct-4 we see the band of protein get smaller and dimmer which both indicate a lower protein level. This is seen to some extent across all of the stem cell markers perhaps most pronounced in Vimentin. 

The opposite is observed in the E-cadherin where the band appears to get stronger going from left to right across our different treatment groups. 

The authors use this blot to say that the treatment causes a decrease in stem-like cells (lower expression of stem cell protein markers and higher expression of non-stem markers). 

Western blots can also be quantified. This is done using saturation of an area and normalizing this value to your loading control. There are mixed feelings about quantifying your Western blots. If you want to say that something is happening significantly, quantification is necessary. This is like saying one drug is better than another or that a drug has a significant effect on a target. Additionally, I think that quantification of multiple replicates is always good practice. However, as in this assay, if you simply want to show a trend up or down, it is not necessary to quantify your blots. 

### When Do I Do a Western?

Western blots are a gold standard for measuring protein and they are a good experiment for a variety of situations. Comparing levels of protein between different samples and test cases is a very good use case of a Western blot as was done in this paper. Another option would be to confirm gene upregulation/downregulation data from qPCR, RNA-seq, and a variety of other methods. We are taught that transcription ≠ translation so confirmation with a Western blot is a good idea. 

Additionally, when making a knockdown model or a knockout model, it is important to confirm that you have actually accomplished what you claim. This is done with often with a Western Blot. 

Unfortunately this experiment has 2 downsides. 1) This is an endpoint assay. This means that conducting a Western blot requires the cells involved to die and thus the same group cannot be measured across timepoints. Once the measurement is taken, the experiment ends. 2) Western blots require antibodies. While in theory an antibody exists for every possible antigen epitope, this is not as nice in practice. Antibodies are expensive, hard to produce, and not always as selective as we would like them to be. If you are studying a novel protein or a protein less commonly studied, a good antibody might not exist making Western blotting impossible. 

### Extensions on Western Blots

This is such a basic and widely applicable experiment with a basic idea surrounding protein detection. This can be expanded into a DARTS assay which tests binding of small molecule inhibitors (also used in the above paper), pulldown experiments, and more that all use Westerns to create a readout. Additionally, the basic principle of antibody binding to a convenient antigen[^1] is used in so many experiments that I will talk more about in future posts such as immunofluorescence, ELISA strips, immunoprecipitation, and more. 

[^1]:This is a nod to the same math teacher I mentioned at the start of this post. He would talk about making proofs by “adding a convenient 0” or “multiplying by a convenient 1”. As in the case that I used it, a using something convenient means a product that was difficult to come up with, required a lot of time and thought, and is instrumental to the solving of your problem.