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

  fill(90, 100, 100);
  rect(mouseX, 0, mouseX*0.5, windowHeight);

  if (mouseY < windowHeight/2) {
  fill(20, 100, 100);
  rect(0, 0, windowWidth, mouseY);
  rect(0, windowHeight-mouseY, windowWidth, windowHeight-mouseY);
} else{
  fill(20, 100, 100);
  rect(0, 0, windowWidth, windowHeight/2);
  rect(0, windowHeight/2, windowWidth, windowHeight/2);
}

}
