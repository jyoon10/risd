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
  triangle(0, 0, windowWidth/2, 0, mouseX, mouseY);
  triangle(windowWidth/2, 0, windowWidth, 0, mouseX+windowWidth/2, mouseY);
}
