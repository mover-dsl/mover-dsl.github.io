---
title: 'Discover'
layout: page-layout

svg: discover.svg

prompt: >
    Move the binocular up right below the text Discover over a second. Then, scale it up by 50 times from its top center for two seconds.

program: |
    o_1 = iota(Object, lambda o: id(o, "custom-binocular"))
    o_2 = iota(Object, lambda o: id(o, "custom-discover"))

    m_1 = iota(Motion, lambda m: type(m, "translate") and post(m, s_bottom_border(o_1, o_2)) and duration(m, 1.0) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "scale") and direction(m, [1.0, 1.0]) and magnitude(m, [50.0, 50.0]) and origin(m, ["50%", "0%"]) and duration(m, 2.0) and agent(m, o_1))

    t_before(m_1, m_2)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0115_discover_01.html
        report: figure_full_demo_0115_discover_01_verification_result.txt
        caption: >
            In this initial animation, the binocular should move up right below the text Discover. However, it moves up too much and does not stop right below the text. Therefore m_1 is false.
            t_before(m_1, m_2) is false because m_1 is false.

    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0115_discover_02.html
        report: figure_full_demo_0115_discover_02_verification_result.txt
        caption: >
            In this correction iteration of the initial animation, the binocular now moves up and stops right below the text Discover.
            Now the animation is fully correct.

---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}
