---
title: 'Haha'
layout: page-layout

svg: haha.svg

prompt: >
    Scale the yellow letter H from its top center in y to touch the top side of the red letter A. Then scale yellow H back down to 1. As the H scales down, scale the red letter A up in y from its bottom center to touch the bottom side of the yellow letter H. Then scale the red A back down to 1. As the yellow letter H scales up, resize the pink letter H up in y from its bottom center to touch the bottom side of the blue letter A. Then scale the pink H back down to 1. As the pink H scales down, resize the blue letter A up in y from its top center to touch the top side of the pink letter H. Then scale the blue A back down to 1.

program: |
    o_1 = iota(Object, lambda o: id(o, "letter-H-yellow"))
    o_2 = iota(Object, lambda o: id(o, "letter-A-red"))
    o_3 = iota(Object, lambda o: id(o, "letter-H-pink"))
    o_4 = iota(Object, lambda o: id(o, "letter-A-blue"))

    m_1 = iota(Motion, lambda m: type(m, "scale") and origin(m, ["50%", "0%"]) and post(m, s_top_border(o_1, o_2)) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [1.0, 1.0]) and agent(m, o_1))
    m_3 = iota(Motion, lambda m: type(m, "scale") and origin(m, ["50%", "100%"]) and post(m, s_bottom_border(o_2, o_1)) and agent(m, o_2))
    m_4 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [1.0, 1.0]) and agent(m, o_2))
    m_5 = iota(Motion, lambda m: type(m, "scale") and origin(m, ["50%", "100%"]) and post(m, s_bottom_border(o_3, o_4)) and agent(m, o_3))
    m_6 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [1.0, 1.0]) and agent(m, o_3))
    m_7 = iota(Motion, lambda m: type(m, "scale") and origin(m, ["50%", "0%"]) and post(m, s_top_border(o_4, o_3)) and agent(m, o_4))
    m_8 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [1.0, 1.0]) and agent(m, o_4))

    t_before(m_1, m_2)
    t_while(m_2, m_3)
    t_before(m_3, m_4)
    t_while(m_1, m_5)
    t_before(m_5, m_6)
    t_while(m_6, m_7)
    t_before(m_7, m_8)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0122_haha_01.html
        report: figure_full_demo_0122_haha_01_verification_result.txt
        caption:
            The prompt describes an animation where the yellow letter H and the red letter A are always touching when scaling up and down, and the same for the pink letter H and the blue letter A (see the last iteration for the correct result).
            In this initial animation, none of the spatial relations are satisfied, and the letters are not touching as they scale up and down.
    
    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0122_haha_02.html
        report: figure_full_demo_0122_haha_02_verification_result.txt
        caption: >
            In this iteration, the yellow letter H now is changed to touch the bottom side of the red letter A, but the prompt specifies that the yellow H should touch the top side of the red A. Similar issue goes for the blue letter A.

    -   name: 'Iteration 3'
        svg-html: figure_full_demo_0122_haha_03.html
        report: figure_full_demo_0122_haha_03_verification_result.txt
        caption: >
            From this iteration until the 7th iteration, the LLM seems to be stuck in a loop where the
            same mistake is repeated.

    -   name: 'Iteration 4'
        svg-html: figure_full_demo_0122_haha_04.html
        report: figure_full_demo_0122_haha_04_verification_result.txt
        
    -   name: 'Iteration 5'
        svg-html: figure_full_demo_0122_haha_05.html
        report: figure_full_demo_0122_haha_05_verification_result.txt

    -   name: 'Iteration 6'
        svg-html: figure_full_demo_0122_haha_06.html
        report: figure_full_demo_0122_haha_06_verification_result.txt

    -   name: 'Iteration 7'
        svg-html: figure_full_demo_0122_haha_07.html
        report: figure_full_demo_0122_haha_07_verification_result.txt

    -   name: 'Iteration 8'
        svg-html: figure_full_demo_0122_haha_08.html
        report: figure_full_demo_0122_haha_08_verification_result.txt
        caption: >
            In this iteration, the yellow letter H now touches the top side of the red letter A, but the other motions are still incorrect.

    -   name: 'Iteration 9'
        svg-html: figure_full_demo_0122_haha_09.html
        report: figure_full_demo_0122_haha_09_verification_result.txt
        caption: >
            In the iteration, the blue letter A has also been fixed to touch the top side of the pink letter H. However, the other motions are still incorrect. The LLM seems to struggle with scaling the bottom letters correctly.

    -   name: 'Iteration 10'
        svg-html: figure_full_demo_0122_haha_10.html
        report: figure_full_demo_0122_haha_10_verification_result.txt
        caption: >
            In this 9th correction iteration, all scale motions are now correct, and the letters are touching as they scale up and down. The animation now fully matches the prompt.
---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}
