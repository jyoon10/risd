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
  // background(255);
  noStroke();
  fill(20, 100, 100);
  // fill(100);
  ellipse(mouseX, windowHeight/4, windowWidth/1.7, windowHeight/1.7);
  ellipse(mouseX, windowHeight*3/4, windowWidth/1.7, windowHeight/1.7);
  fill(90, 100, 100);
  // fill(0);
  rect(0, 0, windowWidth/2, windowHeight*1.7);

// if(mouseX<windowWidth/2) {
//   fill(50, 100, 100);
//   rect(0, 0, mouseX, windowHeight*1.7);
// } else {
//   fill(50, 100, 100);
//   rect(0, 0, windowWidth/2, windowHeight*1.7);
// }
}
