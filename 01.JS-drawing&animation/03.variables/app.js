const eyeSize = 35;

//noStroke: delete all of borders, after stroke it will not be effected
noStroke();

//face
fill(255, 255, 0); //명령어 뒤에 나오는 모든 도형을 지정된 색으로 fill
ellipse(202, 208, 300, 300);

//eyes
fill(0, 0, 0);
ellipse(157, 151, eyeSize, eyeSize);
fill(0, 0, 0);
ellipse(304, 142, eyeSize, eyeSize);

//mouth
fill(255, 0, 0);
ellipse(257, 240, 120, 136);
