// 20=light green
// 75=purple
// 90=pink
// june


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  ellipseMode(CENTER);
  // rectMode(CENTER);
  // noCursor();
}

function draw() {
  background(75, 100, 100);
  noStroke();

  if (mouseX<windowWidth/3) {
  fill(20, 100, 100);
  ellipse(mouseX, windowHeight/4, mouseX*1.34, windowHeight/2);
  // fill(75, 100, 100);
  // ellipse(mouseX, windowHeight/4, mouseX/1.5, mouseY/3);
  fill(90, 100, 100);
  rect(0, 0, mouseX, windowHeight);
  fill(20, 100, 100);
  triangle(mouseX, windowHeight/2, windowWidth, windowHeight, mouseX, windowHeight);
} else {
  fill(20, 100, 100);
  ellipse(windowWidth/3, windowHeight/4, mouseX*1.34, windowHeight/2);
  // fill(75, 100, 100);
  // ellipse(windowWidth/3, windowHeight/4, mouseX/1.5, mouseY/3);
  fill(90, 100, 100);
  rect(0, 0, windowWidth/3, windowHeight);
  fill(20, 100, 100);
  triangle(windowWidth/3, windowHeight/2, windowWidth, windowHeight, windowWidth/3, windowHeight);
}


}
