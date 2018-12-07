// 20=light green
// 75=purple
// 90=pink


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
  ellipse(mouseX, windowHeight/2, mouseX*1.34, windowHeight);
  // fill(75, 100, 100);
  // ellipse(mouseX, windowHeight/2, mouseX/1.5, mouseY/1.2);
  fill(90, 100, 100);
  rect(0, 0, mouseX, windowHeight);
} else {
  fill(20, 100, 100);
  ellipse(windowWidth/3, windowHeight/2, mouseX*1.34, windowHeight);
  // fill(75, 100, 100);
  // ellipse(windowWidth/3, windowHeight/2, mouseX/1.5, mouseY/1.2);
  fill(90, 100, 100);
  rect(0, 0, windowWidth/3, windowHeight);
}

}
