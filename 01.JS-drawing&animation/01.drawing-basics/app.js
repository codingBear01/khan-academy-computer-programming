//도형을 그릴 때 위에서 아래로 갈수록 upper layer로 인식함.

//ellipse(x, y, w, h)
/*
x: 0 ~ 400
y: 0 ~ 400
x, y 좌표를 정중앙에서 계산
*/
rect(50, 50, 300, 300); //face
rect(150, 250, 100, 70); //mouth
rect(125, 150, 50, 50); //left-eye
rect(225, 150, 50, 50); //right-eye

//rec(x, y, w, h)
/*
x, y 좌표를 left-top point부터 계산
*/
rect(165, 350, 70, 100); //neck

//line(start-x, start-y, end-x, end-y)
line(125, 120, 275, 120);
