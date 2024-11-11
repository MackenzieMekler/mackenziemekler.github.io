---
title: My Toolbox Mass Spectrometry
date: 2024-11-10
tags: toolbox
---

The path of cellular biology is a very dark one. I don’t just mean long nights of studying and the pain of spending a year optimizing an experiment that ends up not producing desired results. I mean this somewhat literally. Light is not all that useful to cellular biologists. Proteins, lipids, and most of the molecules inside of a cell are so small that light is not able to bounce off of them to allow our vision. This is why scientists create expensive and complicated machines to study the building blocks of our cells. A mass spectrometer is one such example of these machines that gives valuable information to scientists. 

Mass spectroscopy (mass spec) is a process by which molecules are broken apart to determine their molecular formulas. With large enough samples and powerful computers, this allows scientists to identify proteins and compounds within a sample. It also provides a mechanism for reading information from isotope tracing experiments. 

### How does this experiment work?

In the case of cellular biology, cell lysates are extracted and run through either gas or liquid chromatography. The chromatographers separate different molecules which can then be further prepared for mass spectrometry. This separate removes interference and can help differentiate between molecules with same weights but different structures. This chromatography as a preparation step can also help ensure that the molecules are ionized correctly. 

Once the desired fractions are removed from the chromatographer, they are ionized. The ionization process is different based on the sample and if gas or liquid chromatography was used. In all cases however, the ionization creates cations. These cations are then placed into the mass spectrometer where they can be accelerated through the machine, deflected by a magnetic field, and their mass/charge ratio (m/z) can be measured by their trajectory. Any unionized parts will be sucked away in the vacuum. It is the readout of these mass/charge peaks that the computer can then use to identify what the substance is. 

### How are results shown?

I have found that output of m/z peaks are very rarely ever shown in a paper. What is done instead, is a graph is made showing the concentration/levels of the protein of interest as calculated by the mass spectrometer. This allows us to show things such as a protein or substrate increasing or decreasing in a cell. The breakdown of ion mass ratios is often much less interesting for a paper however, these may be shown in supplementals. 

### Strengths/Weaknesses/Extensions

Mass-spec’s ability to identify compounds by their mass and fragmenting them gives it numerous use cases in the field of biology. In my experience these can be boiled down to three main examples however. 

1. Proteomics. Mass-spec can be used to identify the proteome in a cell. It can also compare protein expression across different types of cells or different experimental groups. This makes it central in the world of -omics by giving a way of measuring the proteome.  
    1. Interestingly this can be expanded into measuring the post translational modifications placed on proteins as well. Mass-spec can identify multiple types of protein modifications and the location that they occur on. 
    2. It is also possible to use mass-spec to identify protein-protein interactions however this is less common and there are other ways to do this. 
2. Metabolomics. Mass-spec is able to identify metabolites in an area, cell, or other type of sample. This is allows it to detect toxins, drug concentrations, nutrient availability, and more which can all prove incredibly useful to researchers. 
3. Stable isotope labelling. Compounds (like glucose for example) can be made with “heavy” atoms that have the highest possible number of neutrons for a stable isotope (I believe the light version is also possible but for carbon heavy is what is done). As mass-spec measures the mass of compounds, using heavy isotopes shifts the highest mass down which is detectable as a type of labelling. This allows scientists to track atoms through different metabolic pathways without the use of radioactive tracking. 

### Experiment Time!

Taken from: *In vivo assessment of glutamine anaplerosis into the TCA cycle in human pre-malignant and malignant clonal plasma cells*

![Mass Spec Figure](/assets/graphics/2024-11-10-my-toolbox-mass-spectrometry/mass-spec-figure.png)

In this case, mass-spec is being used to analyze and compare concentrations of various metabolites in the bone marrow microenvironment. This was taken from a paper on metabolism and in this figure the authors are beginning to investigate how the nutrient availability in the environment changes.

As can be seen, the authors do not show the distribution of mass-charge ratios in their figure. This information could not even be found in their supplementals. Instead, the computer does that work and the authors simply show the readout of the machine in terms of concentration of their desired targets. 

This is an example of one way that metabolomics data may be shown. Other possible ways are through heatmaps, volcano plots, or Venn diagrams (these are common to most types of -omics data and are used in proteomics obtained through mass-spec as well). 

Something interesting to mention is that no mass-spec-specific controls are needed. This process simply gives a readout of a sample and while it needs calibration it does not require controls. However, in all cases that require biological controls, those are still needed. 
