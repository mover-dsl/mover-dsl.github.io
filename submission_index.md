---
title: All Results
layout: index-layout

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

---

<section>
    <!-- Video gallery -->
    <div class="row w-100 justify-content-center mt-3 px-5">
        <div class="col-12">
            {% include title-bar.html title='Result animations' %}
            <div class="mt-3"></div>
            <h5 class="mt-3">Figures in paper</h5>
            {% include thumbnails.html thumbnails=page.figures-in-paper height=400 %}
            <div class="mt-3"></div>
            <h5 class="mt-3">More fully-automated examples</h5>
            {% include thumbnails.html thumbnails=page.example-results height=400 %}
            <div class="mt-3"></div>
            <h5 class="mt-3">Human-in-the-loop example</h5>
            {% include thumbnails.html thumbnails=page.human-examples height=400 %}
        </div>
    </div>
</section>
