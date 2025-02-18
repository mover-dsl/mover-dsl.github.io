---
title: 'Wow Mom'
layout: page-layout

svg: wowmom.svg

prompt: >
    Rotate the first letter W around the pink circle by 180 degrees. Then rotate the second letter W the same way. Finally, move the letter O down so that its bottom align with the rotated letter W

program: |
    o_1 = iota(Object, lambda o: id(o, "letter-w-1"))
    o_2 = iota(Object, lambda o: id(o, "letter-w-2"))
    o_3 = iota(Object, lambda o: id(o, "letter-o"))
    o_4 = iota(Object, lambda o: color(o, "pink") and shape(o, "circle"))

    m_1 = iota(Motion, lambda m: type(m, "rotate") and magnitude(m, 180.0) and origin(m, get_pos(o_4)) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "rotate") and magnitude(m, 180.0) and origin(m, get_pos(o_4)) and agent(m, o_2))
    m_3 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, -1.0]) and post(m, s_bottom_border(o_3, o_2)) and agent(m, o_3))

    t_before(m_1, m_2)
    t_before(m_2, m_3)

# video: assets/video/wowmom.mp4

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0122_wowmom_01.html
        report: figure_full_demo_0122_wowmom_01_verification_result.txt
        caption: >
            In this initial animation, the rotations of the letter Ws are correct.
            However, the letter O does not move at all to align its bottom with the rotated letter Ws. 
            Therefore, m_3 is false.
    
    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0122_wowmom_02.html
        report: figure_full_demo_0122_wowmom_02_verification_result.txt
        caption: >
            In the first correction attempt, the letter O now translates down, but it does not move enough to align its bottom with the rotated letter W.

    -   name: 'Iteration 3'
        svg-html: figure_full_demo_0122_wowmom_03.html
        report: figure_full_demo_0122_wowmom_03_verification_result.txt
        caption: >
            In this correction iteration, the letter O now moves down to align its bottom with the rotated letter Ws.
            The animation is now fully correct.
        
---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations video=page.video %}
