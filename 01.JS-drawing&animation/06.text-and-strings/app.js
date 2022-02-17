fill(255, 255, 0);

let draw = () => {
  textSize(25);
  const myName = "kang";
  const message = myName + "!!!";
  //text(str, x, y)
  //x, y는 left-bottom 기준
  text(message, mouseX, mouseY);
};
draw();
