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

if (mouseX<windowWidth*.9) {
  fill(20, 100, 100)
  ellipse(windowWidth/2, windowHeight/2, mouseX, mouseX);
  fill(75, 100, 100);
  rect(0, 0, windowWidth, windowHeight/2);
  fill(90, 100, 100);
  rect(windowWidth/2, 0, mouseX/2, windowHeight/2);
} else {
  fill(20, 100, 100)
  ellipse(windowWidth/2, windowHeight/2, windowHeight, windowHeight);
  fill(75, 100, 100);
  rect(0, 0, windowWidth, windowHeight/2);
  fill(90, 100, 100);
  rect(windowWidth/2, 0, windowHeight/2, windowHeight/2);
}


  // fill(20, 100, 100);
  // rect(windowWidth/2, 0, mouseX%windowWidth/2, windowHeight/2);
  //
  // fill(20, 100, 100);
  // ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);
  //
  // fill(75, 100, 100);
  // ellipse(windowWidth/2, windowHeight/2, windowWidth/5, windowWidth/5)
  //
  // fill(75, 100, 100);
  // rect(0, 0, windowWidth/2+windowWidth/10, windowHeight/2);

}
