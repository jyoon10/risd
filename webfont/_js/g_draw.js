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

  fill(20, 100, 100);
  ellipse(windowWidth/2, windowHeight/2, mouseX, windowHeight);

  fill(75, 100, 100);
  rect(windowWidth/2, 0, windowWidth/2, windowHeight);

  if (mouseX>windowWidth/2) {
  fill(90, 100, 100);
  rect(windowWidth/2,windowHeight/2, mouseX-windowWidth/2, windowHeight);
} else {
  fill(90, 100, 100);
  rect(windowWidth/2,windowHeight/2, 0, windowHeight);
}


}




  // fill(20, 100, 100);
  // ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);
  //
  // fill(75,100,100);
  // ellipse(windowWidth/2, windowHeight/2, windowWidth/6, windowWidth/6);
  //
  // fill(75, 100, 100);
  // rect(windowWidth/2, windowHeight/2.23, windowWidth/2, windowHeight/10);
  //
  // fill(20, 100, 100);
  // rect(windowWidth/2, windowHeight/2, mouseX/1.73, mouseY-mouseY/1.45);
