---
title: 'Sneaker'
layout: page-layout

svg: sneaker.svg

prompt: >
    Rotate the orange spike ball around its center for 4 seconds. As that happens, move the text 50% to the right and the text OFF to the left both by 90px within a second. As the spike ball rotates, move the sneaker up by 200px and then down. Repeat this again. Each translation should take 1 second. As the sneaker moves up initially, scale the white rectangle down in x by 0.5 from its bottom center, and then move it up to touch the bottom side of the text 50%. And then, scale it up from its bottom center in y so that it borders the top side of the text 50%.

program: |
    o_1 = iota(Object, lambda o: id(o, "custom-spike-orange"))
    o_2 = iota(Object, lambda o: id(o, "custom-50"))
    o_3 = iota(Object, lambda o: id(o, "custom-OFF"))
    o_4 = iota(Object, lambda o: id(o, "custom-sneaker"))
    o_5 = iota(Object, lambda o: color(o, "white") and shape(o, "rectangle"))

    m_1 = iota(Motion, lambda m: type(m, "rotate") and origin(m, ["50%", "50%"]) and duration(m, 4.0) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "translate") and direction(m, [1.0, 0.0]) and magnitude(m, 90.0) and duration(m, 1.0) and agent(m, o_2))
    m_3 = iota(Motion, lambda m: type(m, "translate") and direction(m, [-1.0, 0.0]) and magnitude(m, 90.0) and duration(m, 1.0) and agent(m, o_3))
    m_4 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and magnitude(m, 200.0) and duration(m, 1.0) and agent(m, o_4))
    m_5 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, -1.0]) and magnitude(m, 200.0) and duration(m, 1.0) and agent(m, o_4))
    m_6 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and magnitude(m, 200.0) and duration(m, 1.0) and agent(m, o_4))
    m_7 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, -1.0]) and magnitude(m, 200.0) and duration(m, 1.0) and agent(m, o_4))
    m_8 = iota(Motion, lambda m: type(m, "scale") and direction(m, [-1.0, 0.0]) and magnitude(m, [0.5, 0.0]) and origin(m, ["50%", "100%"]) and duration(m, 1.0) and agent(m, o_5))
    m_9 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_bottom_border(o_5, o_2)) and agent(m, o_5))
    m_10 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, 1.0]) and origin(m, ["50%", "100%"]) and post(m, s_top_border(o_5, o_2)) and agent(m, o_5))

    t_while(m_1, m_2)
    t_while(m_1, m_3)

    t_while(m_1, m_4)
    t_while(m_1, m_5)
    t_while(m_1, m_6)
    t_while(m_1, m_7)

    t_before(m_4, m_5)
    t_before(m_5, m_6)
    t_before(m_6, m_7)

    t_while(m_4, m_8)
    t_before(m_8, m_9)
    t_before(m_9, m_10)

# video: assets/video/sneaker.mp4

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0121_sneakers_01.html
        report: figure_full_demo_0121_sneakers_01_verification_result.txt
        caption: >
            In this initial animation, most of the motions are correct except the white rectangle that disappeared (m_9 and m_10).
            The intention of the prompt is to move and scale up the white rectangle so that it becomes a white background for the
            text 50%.
    
    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0121_sneakers_02.html
        report: figure_full_demo_0121_sneakers_02_verification_result.txt
        caption: >
            In the first correction attempt, the white rectangle now moves up, but it does so too much and does not stop at the bottom of the text 50% (m_9). Also, it scales up too much and does not stop at bordering the top of the text 50% (m_10).

    -   name: 'Iteration 3'
        svg-html: figure_full_demo_0121_sneakers_03.html
        report: figure_full_demo_0121_sneakers_03_verification_result.txt
        caption: >
            Here, the white rectangle now moves up and stops at the bottom of the text 50% (m_9). However, it scales in the wrong direction and does not stop at the top of the text 50% (m_10).

    -   name: 'Iteration 4'
        svg-html: figure_full_demo_0121_sneakers_04.html
        report: figure_full_demo_0121_sneakers_04_verification_result.txt
        caption: >
            In this iteration, the white rectangle scales upward but does not scale enough to border the top of the text 50% (m_10). The animation is still not fully correct.
    
    -   name: 'Iteration 5'
        svg-html: figure_full_demo_0121_sneakers_05.html
        report: figure_full_demo_0121_sneakers_05_verification_result.txt
        caption: >
            Finally, in the fourth iteration, the white rectangle scales up correctly.
            All the predicates are now true, so the animation correctly matches the prompt.
---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations video=page.video %}
