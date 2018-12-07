// 20=light green
// 75=purple
// 90=pink

var circleWidth=200;

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
  ellipse(windowWidth/2, windowHeight/4, mouseX, windowHeight/2)

  fill(20, 100, 100);
  ellipse(windowWidth/2, windowHeight*.75, mouseX, windowHeight/2)

  fill(75, 100, 100);
  rect(windowWidth/2, 0, windowWidth/2, windowHeight/2);

  fill(75, 100, 100);
  rect(0, windowHeight/2, windowWidth/2, windowHeight/2);

}
