---
title: 'Target'
layout: page-layout

svg: target.svg

prompt: >
    Rotate all circles around green triangle, and then move them to it. Afterwards, the blue circle scales up by 3, while the red circle expands by 2.

program: |
    o_1 = iota(Object, lambda o: color(o, "green") and shape(o, "triangle"))
    o_2 = all(Object, lambda o: shape(o, "circle"))
    o_3 = iota(Object, lambda o: color(o, "blue") and shape(o, "circle"))
    o_4 = iota(Object, lambda o: color(o, "red") and shape(o, "circle"))

    m_1 = iota(Motion, lambda m: type(m, "rotate") and origin(m, get_pos(o_1)) and agent(m, o_2))
    m_2 = iota(Motion, lambda m: type(m, "translate") and post(m, s_intersect(o_2, o_1)) and agent(m, o_2))
    m_3 = iota(Motion, lambda m: type(m, "scale") and direction(m, [1.0, 1.0]) and magnitude(m, [3.0, 3.0]) and agent(m, o_3))
    m_4 = iota(Motion, lambda m: type(m, "scale") and direction(m, [1.0, 1.0]) and magnitude(m, [2.0, 2.0]) and agent(m, o_4))

    t_before(m_1, m_2)
    t_after(m_3, m_2)
    t_while(m_4, m_3)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0121_target_01.html
        report: figure_full_demo_0121_target_01_verification_result.txt
        caption: >
            In the initial animation, the circles are moved to the wrong position, not intersecting with the green triangle as
            specified (m_2).
            Since m_2 is false, then the timing predicates that depend on it are also false.

    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0121_target_02.html
        report: figure_full_demo_0121_target_02_verification_result.txt
        caption: >
            In this correction iteration, the circles now move to properly intersect with the green triangle (m_2).
            The animation is now looking correct, with the circles forming a target shape at the end.

---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}