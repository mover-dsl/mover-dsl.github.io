---
title: 'Yes'
layout: page-layout

svg: yes.svg

prompt: >
    The letter Y slides until it touches the left side of the letter E. Following that, the letter S moves to border E’s right side.

program: |
    o_1 = iota(Object, lambda o: id(o, "letter-Y"))
    o_2 = iota(Object, lambda o: id(o, "letter-E"))
    o_3 = iota(Object, lambda o: id(o, "letter-S"))

    m_1 = iota(Motion, lambda m: type(m, "translate") and post(m, s_left_border(o_1, o_2)) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "translate") and post(m, s_right_border(o_3, o_2)) and agent(m, o_3))

    t_before (m_1, m_2)

video: https://vimeo.com/1085775168#t=0m23s

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0114_yes_01.html
        report: figure_full_demo_0114_yes_01_verification_result.txt
        caption: >
            In this initial animation, the letter Y slides too much to the left. Although it did touch the left side of the letter E at one point, it did not stop there. Therefore m_1 is false.
            t_before(m_1, m_2) is false because m_1 is false.
        
    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0114_yes_02.html
        report: figure_full_demo_0114_yes_02_verification_result.txt
        caption: >
            In the first correction of the initial animation, the letter Y now slides and stops at touching the left side of the letter E. However, since m_1 and m_2 are not sequential, t_before(m_1, m_2) is still false.
    -   name: 'Iteration 3'
        svg-html: figure_full_demo_0114_yes_03.html
        report: figure_full_demo_0114_yes_03_verification_result.txt
        caption: >
            In this last iteration, the timing of m_1 and m_2 has been corrected, so t_before(m_1, m_2) is now true.
            All the predicates are now true, so the animation correctly matches the prompt.
---

{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations video=page.video %}
