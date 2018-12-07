// 20=light green
// 75=purple
// 90=pink
// june

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  // noCursor();
}

function draw() {
  background(75, 100, 100);
  noStroke();
  fill(20, 100, 100);
  ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);

  // if (mouseX>windowWidth/2) {
  //   fill(20, 100, 100);
  //   // ellipse(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/2);
  //   ellipse(windowWidth/2, windowHeight/2, mouseX/2, mouseX/2);
  // } else {
  //   fill(20, 100, 100);
  //   // ellipse(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/2);
  //   ellipse(windowWidth/2, windowHeight/2, windowWidth/4, windowWidth/4);
  // }

}
