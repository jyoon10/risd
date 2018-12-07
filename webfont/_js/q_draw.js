// 20=light green
// 75=purple
// 90=pink
// june

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  // noCursor();
}

function draw() {
  background(75, 100, 100);
  noStroke();

  fill(20, 100, 100);
  ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);

  fill(90, 100, 100);
  triangle(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight, windowWidth, windowHeight);

  // translate(windowWidth/2, windowHeight/2);
  // rotate(30);
  // rect(0, 0, mouseX*1.5, windowWidth);

}
