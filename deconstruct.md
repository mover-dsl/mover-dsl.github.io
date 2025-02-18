---
title: 'Deconstruct'
layout: page-layout

svg: deconstruct.svg

prompt: >
    Move the text DE down by 500px in a second. Then, translate the top left face to the right to be adjacent to the top right face. At the same time, slide the bottom left face to border the left side of the bottom right face. Finally, raise both of the bottom faces so that their top side align with the bottom side of the top right face.

program: |
    o_1 = iota(Object, lambda o: id(o, "custom-DE"))
    o_2 = iota(Object, lambda o: id(o, "top-left-face"))
    o_3 = iota(Object, lambda o: id(o, "top-right-face"))
    o_4 = iota(Object, lambda o: id(o, "bottom-left-face"))
    o_5 = iota(Object, lambda o: id(o, "bottom-right-face"))

    m_1 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, -1.0]) and magnitude(m, 500.0) and duration(m, 1.0) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "translate") and direction(m, [1.0, 0.0]) and post(m, s_left_border(o_2, o_3)) and agent(m, o_2))
    m_3 = iota(Motion, lambda m: type(m, "translate") and direction(m, [1.0, 0.0]) and post(m, s_left_border(o_4, o_5)) and agent(m, o_4))
    m_4 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_bottom_border(o_4, o_3)) and agent(m, o_4))
    m_5 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_bottom_border(o_5, o_3)) and agent(m, o_5))

    t_before(m_1, m_2)
    t_while(m_2, m_3)
    t_before(m_3, m_4)
    t_before(m_3, m_5)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0122_deconstruct_01.html
        report: figure_full_demo_0122_deconstruct_01_verification_result.txt
        caption: >
            The text prompt asks to move the face pieces to form a complete face after the letters DE move down.
            In this initial animation, the text DE moves down correctly. However, the face pieces do not move correctly to form a complete face.
    
    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0122_deconstruct_02.html
        report: figure_full_demo_0122_deconstruct_02_verification_result.txt
        caption: >
            In this correction iteration, the two bottom pieces of the face now move correctly, but the top pieces do not.

    -   name: 'Iteration 3'
        svg-html: figure_full_demo_0122_deconstruct_03.html
        report: figure_full_demo_0122_deconstruct_03_verification_result.txt
        caption: >
            Here, the top pieces still do not come together, and the bottom pieces move up too much. The animation is still not fully correct.

    -   name: 'Iteration 4'
        svg-html: figure_full_demo_0122_deconstruct_04.html
        report: figure_full_demo_0122_deconstruct_04_verification_result.txt
        caption: >
            In this iteration, the top pieces now move correctly to form a complete face. However, the bottom pieces still move up too much. The animation is still not fully correct.
    
    -   name: 'Iteration 5'
        svg-html: figure_full_demo_0122_deconstruct_05.html
        report: figure_full_demo_0122_deconstruct_05_verification_result.txt
        caption: >
            In this iteration, all the face pieces now move correctly to form a complete face after the letters DE move down.
            The animation is now fully correct.
        
---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}
