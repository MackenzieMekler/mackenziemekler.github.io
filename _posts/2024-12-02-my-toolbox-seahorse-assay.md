---
title: My Toolbox Seahorse Assay
date: 2024-12-02
tags: toolbox
---

The seahorse flux analyzer is a powerful tool in the field of metabolism research that uses acidity and oxygen concentrations as proxies to measure cellular metabolism in real time. This is especially useful in studying metabolic alterations to cancer cells and immune cells. 

As cancer cells have many different properties from normal cells, they also have different metabolic demands. This causes a dysregulated cellular metabolism in cancers (which was actually listed as a hallmark in 2011) and provides researchers with a new way of studying and targeting cancerous cells. Additionally, immune cell metabolism is integral for understanding immunotherapies and crafting better ones. 

When combined with media containing specific metabolites, this assay is able to show which metabolic pathways are required, active, or inactive in certain cells. 

![Metabolism Diagram](/assets/graphics/2024-12-02-my-toolbox-seahorse-assay/metabolism.png)
{: .h-150 .rounded-10 .right}

### Overview of Metabolism

Glucose that enters a cell is broken down by glycolysis and either put through the TCA cycle (which consumes oxygen) for a high energy production or fermentation (which does not consume oxygen) for a lower energy production. Each of these pathways is further complicated by the fact that metabolites can enter them at various points. 

### ECAR Measurement

**Why ECAR?**

The ECAR measurement is an indicator of how much glycolysis is used to generate cellular energy. After production of pyruvate, a cell has to use some NADH to create lactate. This maintains a steady supply of NAD+ that can be used for more glycolysis. Lactate, however, is a waste product that needs to be co-transported out of the cell with hydrogen ions. This is how extracellular acidification (ECAR) is a proxy for rate of glycolysis. 

**How to Read/Make an ECAR Graph**

ECAR Graphs can be split into 3 main segments characterized by the addition of 2 inhibitors. Before, the addition of these inhibitors, glucose is added into the medium to allow for glycolysis to start. Sometimes the cells are cultured in media that already has glucose so this addition is not shown however in the example graph we have it is shown as an addition. The rate taken with glucose but no inhibitor is called the basal glycolysis rate. This represents a cell’s glycolysis under “normal” conditions. 

After this is measured, oligomycin is added to inhibit ATP synthase. This chokes a cell’s energy supply and forces glycolysis into overdrive as a response. The glycolytic rate in this stage is called the glycolytic capacity as it represents the maximum glycolytic rate a cell is capable of. As a side note, the difference between glycolytic capacity and basal rate is called the glycolytic reserve. 

Finally, 2-DG is added to inhibit glycolysis and show all media acidification that comes from non-glycolytic processes. 

![ECAR Diagram](/assets/graphics/2024-12-02-my-toolbox-seahorse-assay/ecar.png)
{: .w-50 .rounded-10 .right}

- Glucose - Allows for the start of glycolysis
- Oligomycin - This is an inhibitor of ATP synthase. This thus induces the maximum glycolytic activity that a cell can achieve (termed the glycolytic capacity) in order to make up for the resultant energy deficit.
- 2-DG - This is an inhibitor of glycolysis by binding to hexokinase. This causes a complete shutdown of glycolysis which allows us to see ECAR from non-glycolytic pathways.

### OCR Measurement

**Why OCR?** 

The OCR measurement is an indicator on how much the TCA cycle is being used for energy production. This does not inherently relate to the oxidation of glucose. Because there are numerous entry points for this cycle, it is sometimes necessary to take extra steps to tease out the impact that various metabolites have on OCR. However, as energy production through the ETC (the downstream step from the TCA cycle) requires oxygen, the oxygen consumption rate (OCR) is able to measure use of the TCA cycle. 

**How to Read/Make and OCR Graph** 

OCR graphs are very similar to ECAR but they have 4 segments with 3 inhibitors (1 more of each). They start in the same place with no inhibitors to measure the basal rate, in this case called basal OCR/respiration. 

The first inhibitor is oligomycin which inhibits ATP Synthase. This means that the only oxygen consumption from the ETC will be from maintaining the proton gradient in the mitochondria. If you cannot visualize this I encourage you to review the ETC. The reason this happens is because without ATP Synthase, the protons cannot descend the gradient except for by leaking through the membrane. This leakage needs to be replaced which consumes oxygen. Thus the OCR under this inhibitor is mostly related to leakage of the mitochondrial membrane. 

The next inhibitor is FCCP which causes the membrane to leak uncontrollably. This makes the cell respire at its maximum capacity in order to try and reverse the high leakage. This gives the cell’s OCR capacity. Just as in ECAR, the difference between this capacity and the basal rate is referred to as the OCR reserve. 

Finally, in the same form as ECAR, Rotenone and Antimycin A are used to completely inhibit the ETC and stop all mitochondrial oxygen consumption to see OCR from other cellular processes. 

![OCR Diagram](/assets/graphics/2024-12-02-my-toolbox-seahorse-assay/ocr.png)
{: .w-50 .rounded-10 .right}

- Oligomycin - Complex V (ATP Synthase) Inhibitor. Removes the oxygen consumption from ATP synthesis. Shows the oxygen consumption required to maintain the proton gradient.
- FCCP - Dissipates proton gradient causing mitochondria to respire at maximum capacity giving the highest possible OCR.
- Rotenone/Antimycin A - Inhibitors of complexes I/III. This means that nonmitochondrial O2 consumption are the only things that cause OCR.

### Other Metabolites

I mentioned in the OCR section that it could be valuable to tease out the impacts of specific metabolites on OCR measurements. Here is an example of how to do this and a framework of the concept presented. 

Fatty acid oxidation is a method that cells have of energy production. These can either be taken up from outside the cell or fatty acids from various parts of the cell interior can be broken down to produce energy (this is a type of autophagy). To differentiate between the contribution of FAO for energy production either endogenous or exogenous 4 test groups are needed. 

1. The first group is the black line with triangles. This is a group that has no extra inhibitors and exogenously added fatty acids. 
2. The second group is the black line with circles. This is a group that has an exogenous control (not fatty acid) and no extra inhibitors. 
3. The third group is the green triangles and contains the exogenous fatty acid with an inhibitor of FAO. 
4. The fourth group shown with blue squares is the same FAO inhibitor with the exogenous control. 

In order for fatty acids from inside or outside of the cell to enter into the TCA cycle, they require an enzyme called palmitoyltransferase I. This is the enzyme targeted by the etomoxir inhibitor. By using etomoxir, we are able to see the OCR in the cell that comes from metabolizing things that are not fatty acids through the TCA cycle and ETC. Additionally by comparing the control and the exogenous fatty acid we are able to see the effect of endogenous vs. exogenous FAO.

![FAO Diagram](/assets/graphics/2024-12-02-my-toolbox-seahorse-assay/fao.png)
{: .w-50 .rounded-10 .right}

- Binding the lipids to bovine serum albumin (BSA) more accurately represents the cell environment  and reduces toxicities.
- Exogenous FAO = (Palm-BSA, -etomoxir) - (BSA-control, -etomoxir).
- Endogenous FAO = (BSA-control, -etomoxir) - (either +etomoxir group)
- +etomoxir groups should be in the same place

### Why Basal and Capacity?

Imagine two cells. One of our cells (Cell A) has 10 mitochondria, the other (Cell B) has 100. At the basal rate in this cell type, the function of 9 mitochondria is needed. This would then show no difference in the two cell lines (as they both have 9 mitochondria). However, once these cells become stressed, cell B has a much higher reserve and capacity than cell A does. This is an example of why it is important to measure both basal rates and capacity of cell lines. 

### Extensions on the Seahorse Assay

By conducting this experiment on cells that have only a certain amount of nutrients even more can be determined about the metabolic state of the cell. Glutamine metabolism can be measured by using media with glutamine and either no glucose or 2-DG. When OCR is measured in this state, the citric acid cycle is being supplied by glutamine. 

This is only one instance but there are many ways that nutrient restriction can be combined with seahorse analysis to uncover further mysteries about metabolism.

### Experiment Time

Taken from: ***Piperlongumine based nanomedicine impairs glycolytic metabolism in triple negative breast cancer stem cells through modulation of GAPDH & FBP1***

This paper tests the ability of piperlongumine (PL) to inhibit glycolysis and if putting it in nanoparticles (PL-NP) increases this effect. In order to do this the authors treat a breast cancer cell line with PL and PL-NPs and then measure the glycolytic rate using a seahorse assay. 

![Fig1 Diagram](/assets/graphics/2024-12-02-my-toolbox-seahorse-assay/fig1.png)

In this first figure of seahorse, the basal rate is measured just in the presence of a control, PL, or PL-NPs. As can be seen, a similar effect is seen over all of the timepoints where PL inhibits glycolysis and PL-NPs do the same but more effectively. 

![Fig2 Diagram](/assets/graphics/2024-12-02-my-toolbox-seahorse-assay/fig2.png)

These next two figures measure a similar thing but they do so using glycolytic capacity and reserve using the methods talked about above. Additionally, these finding are then confirmed using an extracellular lactate assay. This is an important thing to do as other cellular processes can cause acidification so it can be important to do this lactate assay to ensure that much of your ECAR is actually coming from lactate export (2-DG also does this but more controls are not necessarily a bad thing). 

This was a relatively short and straightforward seahorse experiment and unfortunately only shows ECAR but this is a very versatile technique that can be used in so many contexts to determine things about metabolism.
