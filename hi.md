---
title: 'Hi'
layout: page-layout

svg: hi.svg

prompt: >
    Move the orange circle to slightly above the rectangular shape. In the meantime, rotate the letter H clockwise by 90 degrees.

program: |
    o_1 = iota(Object, lambda o: color(o, "orange") and shape(o, "circle"))
    o_2 = iota(Object, lambda o: shape(o, "rectangle"))
    o_3 = iota(Object, lambda o: id(o, "letter-H"))

    m_1 = iota(Motion, lambda m: type(m, "translate") and post(m, s_top(o_1, o_2)) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "rotate") and direction(m, "clockwise") and magnitude(m, 90.0) and agent(m, o_3))

    t_while(m_1, m_2)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0120_hi_01.html
        report: figure_full_demo_0120_hi_01_verification_result.txt
        caption: >
            In this initial animation, the report indicates that the translation of the orange circle m_1 is false because the circle never reaches 
            above the rectangle and therefore both post() and s_top() are false. 
            The rotation of the letter H m_2 is true because it rotates 90 degrees clockwise.
            t_while() is false because m_1 is false.

    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0120_hi_02.html
        report: figure_full_demo_0120_hi_02_verification_result.txt
        caption: >
            In this iteration, the translation of the orange circle m_1 has been corrected to reach above the rectangle shape and therefore m_1 is now true. 
            t_while() is true because both m_1 and m_2 are true and they overlap in time.

---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}

