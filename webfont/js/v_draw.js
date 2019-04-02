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
  fill(20, 100, 100);
  noStroke();
  triangle(0, 0, mouseX, mouseY, windowWidth, 0);
}
