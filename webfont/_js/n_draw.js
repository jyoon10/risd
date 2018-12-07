// 20=light green
// 75=purple
// 90=pink
// june

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  ellipseMode(CENTER);
  // noCursor();
}

function draw() {
  background(75, 100, 100);
  noStroke();
  fill(20, 100, 100);
  triangle(mouseX, 0, windowWidth-mouseX, windowHeight, 0, windowHeight);

  fill(90, 100, 100);
  rect(0, 0, mouseX, windowHeight);
  rect(windowWidth-mouseX, 0, mouseX, windowHeight);
}
