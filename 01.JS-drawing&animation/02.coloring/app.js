//coloring 명령어는 항상 도형 명령어보다 앞에 써야 함.

//background
//it must be positioned at the top
background(200, 200, 200); //RGB

//noStroke: delete all of borders, after stroke it will not be effected
noStroke();

//face
fill(255, 255, 0); //명령어 뒤에 나오는 모든 도형을 지정된 색으로 fill
ellipse(202, 208, 300, 300);

//eyes
fill(0, 0, 0);
ellipse(157, 151, 40, 40);
fill(0, 0, 0);
ellipse(304, 142, 40, 40);

//mouth
fill(255, 0, 0);
ellipse(257, 240, 120, 136);

//headband
strokeWeight(20); //bold effect to line
stroke(0, 0, 255); //coloring border or line
line(80, 120, 280, 80);
