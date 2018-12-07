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

  fill(90, 100, 100);
  rect(0, mouseY, windowWidth, mouseY*0.5);

  if (mouseX<windowWidth/2) {
  fill(20, 100, 100);
  rect(0, 0, mouseX, windowHeight);
  rect(windowWidth-mouseX, 0, windowWidth-mouseX, windowHeight);
} else{
  fill(20, 100, 100);
  rect(0, 0, windowWidth/2, windowHeight);
  rect(windowWidth/2, 0, windowWidth/2, windowHeight);
}

}
