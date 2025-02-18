---
title: 'Digits'
layout: page-layout

svg: digits.svg

prompt: >
    Translate the green squares and the yellow squares to the right by 100 px. At the same time, rotate the blue squares around the point (250, 100) by -90 degrees. Simultaneously, rotate the black squares around the point (250, 300) by 90 degrees. Afterwards, reverse the rotations of the blacks squares and the blue squares, and also reverse the translation of the green squares. At the same time, rotate the purple squares around the point (250,200) by 90 degrees. Finally, move the green squares to the right by 100 px.

program: |
    o_1 = all(Object, lambda o: color(o, "green") and shape(o, "square"))
    o_2 = all(Object, lambda o: color(o, "yellow") and shape(o, "square"))
    o_3 = all(Object, lambda o: color(o, "blue") and shape(o, "square"))
    o_4 = all(Object, lambda o: color(o, "black") and shape(o, "square"))
    o_5 = all(Object, lambda o: color(o, "purple") and shape(o, "square"))

    m_1 = iota(Motion, lambda m: type(m, "translate") and direction(m, [1.0, 0.0]) and magnitude(m, 100.0) and agent(m, o_1))
    m_2 = iota(Motion, lambda m: type(m, "translate") and direction(m, [1.0, 0.0]) and magnitude(m, 100.0) and agent(m, o_2))
    m_3 = iota(Motion, lambda m: type(m, "rotate") and direction(m, "counterclockwise") and magnitude(m, 90.0) and origin(m, [250.0, 100.0]) and agent(m, o_3))
    m_4 = iota(Motion, lambda m: type(m, "rotate") and direction(m, "clockwise") and magnitude(m, 90.0) and origin(m, [250.0, 300.0]) and agent(m, o_4))
    m_5 = iota(Motion, lambda m: type(m, "rotate") and direction(m, "counterclockwise") and magnitude(m, 90.0) and origin(m, [250.0, 300.0]) and agent(m, o_4))
    m_6 = iota(Motion, lambda m: type(m, "rotate") and direction(m, "clockwise") and magnitude(m, 90.0) and origin(m, [250.0, 100.0]) and agent(m, o_3))
    m_7 = iota(Motion, lambda m: type(m, "translate") and direction(m, [-1.0, 0.0]) and magnitude(m, 100.0) and agent(m, o_1))
    m_8 = iota(Motion, lambda m: type(m, "rotate") and direction(m, "clockwise") and magnitude(m, 90.0) and origin(m, [250.0, 200.0]) and agent(m, o_5))
    m_9 = iota(Motion, lambda m: type(m, "translate") and direction(m, [1.0, 0.0]) and magnitude(m, 100.0) and agent(m, o_1))

    t_while(m_1, m_3)
    t_while(m_3, m_4)
    t_after(m_5, m_4)
    t_after(m_6, m_4)
    t_after(m_7, m_4)
    t_after(m_8, m_4)
    t_after(m_9, m_8)

iterations:
    -   name: 'Iteration 1'
        svg-html: figure_full_demo_0116_squares_01.html
        report: figure_full_demo_0116_squares_01_verification_result.txt
        caption: >
            This animation aims to move the squares around to form the digits 0, 1, 2, and 3 sequentially.
            However, the green squares moved in the wrong direction (m_7), causing both the digit 2 and 3
            to be mishapen.

    -   name: 'Iteration 2'
        svg-html: figure_full_demo_0116_squares_02.html
        report: figure_full_demo_0116_squares_02_verification_result.txt
        caption: >
            In this iteration, the green squares now move in the correct direction (m_7), so all digits are 
            looking as they should.


---


{% include section-iterations.html svg=page.svg prompt=page.prompt program=page.program iterations=page.iterations %}
