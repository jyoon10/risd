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
  triangle(0, 0, mouseX, mouseY, windowWidth, 0);

  fill(20, 100, 100);
  triangle(0, windowHeight, mouseX, mouseY, windowWidth, windowHeight);

  fill(90, 100, 100);
  rect(0, 0, mouseX, windowHeight);
}
