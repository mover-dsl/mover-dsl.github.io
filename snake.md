---
title: 'Snake'
layout: page-layout

svg: snake.svg

prompt: >
    Move the letter E to touch the right side of the letter K. Then move the letter K up to be adjacent to the bottom side of A. Right after that, shift the letter A to border the right side of N. Immediately after that, elevate the N so its top side aligns with the top of S. Finally, raise the letter A, K, and E at once so their top edges also align with that of S.

program: |
    o_1 = iota(Object, lambda o: id(o, "letter-E"))
    o_2 = iota(Object, lambda o: id(o, "letter-K"))
    o_3 = iota(Object, lambda o: id(o, "letter-A"))
    o_4 = iota(Object, lambda o: id(o, "letter-N"))
    o_5 = iota(Object, lambda o: id(o, "letter-S"))

    m_1 = iota(Motion, lambda m: type(m, "translate") and post(m, s_right_border(o_1, o_2)) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_bottom_border(o_2, o_3)) and agent(m, o_2))
    m_3 = iota(Motion, lambda m: type(m, "translate") and post(m, s_right_border(o_3, o_4)) and agent(m, o_3))
    m_4 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_top_border(o_4, o_5)) and agent(m, o_4))
    m_5 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_top_border(o_1, o_5)) and agent(m, o_1))
    m_6 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_top_border(o_2, o_5)) and agent(m, o_2))
    m_7 = iota(Motion, lambda m: type(m, "translate") and direction(m, [0.0, 1.0]) and post(m, s_top_border(o_3, o_5)) and agent(m, o_3))

    t_before(m_1, m_2)
    t_before(m_2, m_3)
    t_before(m_3, m_4)
    t_before(m_4, m_5)
    t_while(m_5, m_6)
    t_while(m_6, m_7)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0122_snake_01.html
        report: figure_full_demo_0122_snake_01_verification_result.txt
        caption: >
            The goal of the prompt is to describe an animation where the letters E, K, A, and N move right next to each other
            in a serpentine manner, and at the end all the letters should be aligned with the letter S.
            This initial attempt only got the final upward motions of N, A, and E correct.
    
    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0122_snake_02.html
        report: figure_full_demo_0122_snake_02_verification_result.txt
        caption: >
            In this iteration, the serpentine motion of the letters E, K, and A is now correct, but the letter K moves up too much to 
            align with the top side of S (m_6).

    -   name: 'Iteration 3'
        svg-html: figure_full_demo_0122_snake_03.html
        report: figure_full_demo_0122_snake_03_verification_result.txt
        caption: >
            In this iteration, the letter K now moves up correctly to align with the top of S.
            The animation is now fully correct.
        
---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}
