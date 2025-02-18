---
title: 'Two Objects'
layout: page-layout

svg: two_objects.svg

prompt: >
    Rotate the blue square to intersect with the black square.

secondary-prompt: >
    Rotate the blue square to intersect with the black square. Use rotation only.

program: |
    o_1 = iota(Object, lambda o: color(o, "blue") and shape(o, "square"))
    o_2 = iota(Object, lambda o: color(o, "black") and shape(o, "square"))

    exists(Motion, lambda m_1: type(m_1, "rotate") and post(m_1, s_intersect(o_1, o_2)) and agent(m_1, o_1))

iterations:
    -   name: 'Iteration 1'
        title: 'Animation from input text prompt'
        svg-html: figure_two_objects_01.html
        report: figure_two_objects_01_verification_result.txt
        caption: >
            This page illustrates the example described in the Discussion section of the paper.
            In this animation produced from the original input text prompt, the blue square did end up intersecting with the black square, passing
            all verification checks. However,
            the blue square is not moved by the rotation motion but by an additional, unmentioned translation motion.
            This shows the ambiguity of the original input text prompt.
        
    -   name: 'Iteration 2'
        title: 'Animation from revised input text prompt'
        svg-html: figure_two_objects_02.html
        report: figure_two_objects_02_verification_result.txt
        report-title: 'Verification report'
        caption: >
            <i>Revised input text prompt: "Rotate the blue square to intersect with the black square. Use rotation only."</i><br><br>
            The user here modified the input text prompt to specify that only rotation should be used to move the blue square to intersect with the black square.
            Now the animation moves the blue square by rotating it around the midpoint between the two squares, matching the original intention of the user.

---

{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations secondary-prompt=page.secondary-prompt %}
