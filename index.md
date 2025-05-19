---
proj-name: mover-dsl
layout: fisherman-project-simplified
css: 
    - LaTeXML
    - ltx-article

title: > 
    MoVer: Motion Verification for Motion Graphics Animations

proj-sub: >
    Jiaju Ma and Maneesh Agrawala
    
sharing-image: ""

description: >
    {{ site.data.work[page.proj-name].title }}

conference:

cover: /assets/img/mover_teaser.png

## Summary
summary: >
    While large vision-language models can generate motion graphics animations from text prompts, they regularly fail to include all spatio-temporal properties described in the prompt. We introduce MoVer, a motion verification DSL based on first-order logic that can check spatio-temporal properties of a motion graphics animation. We identify a general set of such properties that people commonly use to describe animations (e.g., the direction and timing of motions, the relative positioning of objects, etc.). We implement these properties as predicates in MoVer and provide an execution engine that can apply a MoVer program to any input SVG-based motion graphics animation. We then demonstrate how MoVer can be used in an LLM-based synthesis and verification pipeline for iteratively refining motion graphics animations. Given a text prompt, our pipeline synthesizes a motion graphics animation and a corresponding MoVer program. Executing the verification program on the animation yields a report of the predicates that failed and the report can be automatically fed back to LLM to iteratively correct the animation. To evaluate our pipeline, we build a synthetic dataset of 5600 text prompts paired with ground truth MoVer verification programs. We find that while our LLM-based pipeline is able to automatically generate a correct motion graphics animation for 58.8% of the test prompts without any iteration, this number raises to 93.6% with up to 50 correction iterations.

## icon banner
proj-icons:
    - name: paper
      fa: fas fa-newspaper
      link: https://arxiv.org/abs/2502.13372
      full-text: Read the paper
      short-text: Full paper
    - name: code
      fa: fab fa-github
      link: 
      full-text: Code and dataset (coming soon)
      short-text: Code and dataset
      
## Main catalogue
catalogue-title: Index
catalogue-items:
    - title: "Video Walkthrough"
    - title: "Result Animations"
    - title: "MoVer Benchmark"
    # - title: "Bibtex"

## Results
results-text: >
    Here we show result animations created by our fully-automated LLM-based generation pipeline. Click on an image below to see the iterations and the final result.
    <br><br>

figures-in-paper:
    - name: 'hi'
    - name: 'yes'
    - name: 'wowmom'
    - name: 'haha'

example-results:
    - name: 'sneaker'
    - name: 'deconstruct'
    - name: 'discover'
    - name: 'digits'
    - name: 'target'
    - name: 'snake'

human-examples:
    - name: 'two_objects'

## Table caption
table-caption: >
    Here we show performances of our LLM-based synthesis and verification pipeline on our dataset with 5600 motion graphics prompts with different LLMs. We report the number that requires 0 correction iterations (pass@0), the number that requires 1 to 49 iterations (pass@1+), and the number that fails after 49 iterations. We report the average number of iterations and their min-max ranges for the pass@1+ prompts. We exclude failed prompts from these metrics. We sort the models below by the overall fail rate (lower is better). <i>We thank <a href="https://lukewys.github.io/" target="_blank"><b>Yusong Wu</b></a> for helping with running the experiments.</i>
---

<!-- landing -->
{% include fisherman-landing.html title=page.title subtitle=page.proj-sub cover=page.cover col-width=7 outer-class="mb-5" conference=page.conference %}

<!-- icon banner -->
{% include fisherman-icon-banner.html icons=page.proj-icons %}

<!-- overview -->
{% include fisherman-title-text.html title="Abstract" text=page.summary %}
{% include fisherman-sub-media.html img="/assets/img/mover_pipeline.png" top-margin=0 width=5 vt-pad=0 %}

<!-- main catalogue -->
{% include fisherman-catalogue.html title=page.catalogue-title items=page.catalogue-items %}

<!-- Video -->
{% include fisherman-title-text.html title="Video Walkthrough" %}
{% include fisherman-sub-media.html video-link="https://player.vimeo.com/video/1085775168?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" vid-no-shadow="true" top-margin=0 width=7 vt-pad=0 %}

<!-- results -->
<div id="result-animations" class="py-3 mt-5">
    <div class="row justify-content-center mt-0 pt-0">
        <div class="col-10 col-lg-7 mt-0 pt-0 rubik">
            <div   class="title-bar"></div>
            <h4 class="text-left">Result Animations</h4>
            <p>{{ page.results-text }}</p>

            <h5 class="mt-3">Figures in paper</h5>
            {% include thumbnails.html thumbnails=page.figures-in-paper height=150 %}
            <div class="mt-3"></div>
            <h5 class="mt-3">More fully-automated examples</h5>
            {% include thumbnails.html thumbnails=page.example-results height=150 %}
            <div class="mt-3"></div>
            <h5 class="mt-3">Human-in-the-loop example</h5>
            {% include thumbnails.html thumbnails=page.human-examples height=150 %}
        </div>
    </div>
</div>


<!-- Tables -->
{% include fisherman-title-text.html title="MoVer Benchmark" text=page.table-caption %}
{% include llm_table.html %}

<div class="mt-5" style="height:10px"></div>
