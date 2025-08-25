---
title: 'Eye'
layout: page-layout

svg: eye.svg

prompt: >
    Scale the white circle in y to 0.1 in 0.6 seconds, and then scale it back up. Do this again. Move the blue and black circles to align their left edges to the white circle. Then repeat to align their right edges. Then move them back to the center of the white circle. Then scale the white circle down and up again.

program: |
    o_1 = iota(Object, lambda o: color(o, "white") and shape(o, "circle"))
    o_2 = iota(Object, lambda o: color(o, "blue") and shape(o, "circle"))
    o_3 = iota(Object, lambda o: color(o, "black") and shape(o, "circle"))

    m_1 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [0.0, 0.1]) and origin(m, ["50%", "50%"]) and duration(m, 0.6) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, 1.0]) and origin(m, ["50%", "50%"]) and agent(m, o_1))
    m_3 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [0.0, 0.1]) and origin(m, ["50%", "50%"]) and agent(m, o_1) and not m_1)
    m_4 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, 1.0]) and origin(m, ["50%", "50%"]) and agent(m, o_1) and not m_2)

    m_5 = iota(Motion, lambda m: type(m, "translate") and post(m, s_left_border(o_2, o_1)) and agent(m, o_2))
    m_6 = iota(Motion, lambda m: type(m, "translate") and post(m, s_left_border(o_3, o_1)) and agent(m, o_3))
    m_7 = iota(Motion, lambda m: type(m, "translate") and post(m, s_right_border(o_2, o_1)) and agent(m, o_2))
    m_8 = iota(Motion, lambda m: type(m, "translate") and post(m, s_right_border(o_3, o_1)) and agent(m, o_3))

    m_9 = iota(Motion, lambda m: type(m, "translate") and not post(m, s_border(o_2, o_1)) and agent(m, o_2) and not m_5 and not m_7)
    m_10 = iota(Motion, lambda m: type(m, "translate") and not post(m, s_border(o_3, o_1)) and agent(m, o_3) and not m_6 and not m_8)

    m_11 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, -1.0]) and magnitude(m, [0.0, 0.1]) and origin(m, ["50%", "50%"]) and agent(m, o_1) and not m_1 and not m_3)
    m_12 = iota(Motion, lambda m: type(m, "scale") and direction(m, [0.0, 1.0]) and origin(m, ["50%", "50%"]) and agent(m, o_1) and not m_2 and not m_4)

    t_before(m_1, m_2)
    t_before(m_2, m_3)
    t_before(m_3, m_4)

    t_before(m_4, m_5)
    t_while(m_5, m_6)

    t_before(m_6, m_7)
    t_while(m_7, m_8)

    t_before(m_8, m_9)
    t_while(m_9, m_10)

    t_before(m_10, m_11)
    t_before(m_11, m_12)


iterations:
    -   name: 'Iteration 1'
        svg-html: 0810_eye_01.html
        report: 0810_eye_01_verification_result.txt
        caption: >
            In this initial animation, the "blinking" of the eye is correct. However, the blue and black circles
            did not properly align their left and right edges to the white circle.
    
    -   name: 'Iteration 2'
        svg-html: 0810_eye_02.html
        report: 0810_eye_02_verification_result.txt
        caption: >
            In the first correction attempt, the blue circle's movements improved. However, the black circle, instead of aligning its edges to the white circle, moved to the center of the blue circle.

    -   name: 'Iteration 3'
        svg-html: 0810_eye_03.html
        report: 0810_eye_03_verification_result.txt
        caption: >
            In this correction iteration, both circles now properly align their edges to the white circle. However, they did not move back to the center of the white circle.

    -   name: 'Iteration 4'
        svg-html: 0810_eye_04.html
        report: 0810_eye_04_verification_result.txt
        caption: >
            Here, the same animation is repeated, as sometimes the LLM would get stuck in a fixated state.

    -   name: 'Iteration 5'
        svg-html: 0810_eye_05.html
        report: 0810_eye_05_verification_result.txt
        caption: >
            Finally, the animation is fully correct after four correction iterations.
        
---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations video=page.video %}
