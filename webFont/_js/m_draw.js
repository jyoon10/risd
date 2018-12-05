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
  fill(20, 100, 100);
  triangle(0, 0, windowWidth, 0, windowWidth/2, mouseY);

  fill(90, 100, 100);
  rect(0, 0, mouseY/2, windowHeight);
  rect(windowWidth-mouseY/2, 0, mouseY*5, windowHeight);

}
