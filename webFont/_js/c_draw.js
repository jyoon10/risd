// 20=light green
// 75=purple
// 90=pink

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  // noCursor();
}

function draw() {
  background(75, 100, 100);
  noStroke();

  translate(windowWidth, windowHeight/2);
  fill(20, 100, 100);
  ellipse(0, 0, 2*(windowWidth-mouseX), windowHeight);

}
