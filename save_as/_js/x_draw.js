// 20=light green
// 75=purple
// 90=pink

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
  triangle(0, 0, windowWidth/2, mouseY, windowWidth, 0);

  fill(20, 100, 100);
  triangle(0, windowHeight, windowWidth/2, windowHeight-mouseY, windowWidth, windowHeight);
}
