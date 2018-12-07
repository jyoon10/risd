// 20=light green
// 75=purple
// 90=pink
// june

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  rectMode(CENTER);
  // noCursor();
}

function draw() {
  background(75, 100, 100);
  noStroke();

  fill(20, 100, 100);
  triangle(0, 0, windowWidth, 0, windowWidth, mouseY);

  fill(90, 100, 100);
  triangle(windowWidth, 0, windowWidth, windowHeight, mouseX, windowHeight);

}
