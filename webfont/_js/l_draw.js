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
  rect(0, mouseY, windowWidth, windowHeight-mouseX+mouseX)
  fill(90, 100, 100);
  rect(0, 0, mouseX, windowHeight);
}
