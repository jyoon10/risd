// 20=light green
// 75=purple
// 90=pink

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  // noCursor();
}

function draw() {
  background(20, 100, 100);
  noStroke();
  // fill(20, 100, 100);
  // rect(0, 0, windowWidth, mouseY)

  fill(75, 100, 100);
  rect(mouseX, mouseY, windowWidth, windowHeight/6);
  fill(75, 100, 100);
  rect(mouseX, mouseY+windowHeight/3, windowWidth, windowHeight);

// if (mouseY < 70) {
//   fill(75, 100, 100);
//   rect(mouseX, 70, windowWidth, windowHeight/6);
//   fill(75, 100, 100);
//   rect(mouseX, 70+windowHeight/3, windowWidth, windowHeight);
// } else if (mouseY<windowHeight/2.6){
//   fill(75, 100, 100);
//   rect(mouseX, mouseY, windowWidth, windowHeight/6);
//   fill(75, 100, 100);
//   rect(mouseX, mouseY+windowHeight/3, windowWidth, windowHeight);
// } else {
//   fill(75, 100, 100);
//   rect(mouseX, windowHeight/2.6, windowWidth, windowHeight/6);
//   fill(75, 100, 100);
//   rect(mouseX, windowHeight/2.6+windowHeight/3, windowWidth, windowHeight);
// }

fill(90, 100, 100);
rect(0, 0, mouseX, windowHeight);

// if (mouseX < 70) {
//   fill(90, 100, 100);
//   rect(0, 0, 70, windowHeight);
// } else {
//   fill(90, 100, 100);
//   rect(0, 0, mouseX, windowHeight);
// }

// else {
//   fill(2, 100, 100);
//   rect(0, 0, windowWidth*.9, windowHeight);
//   fill(70, 100, 100);
//   rect(windowWidth*.9, windowHeight/2.6, windowWidth, windowHeight/6);
//   fill(70, 100, 100);
//   rect(windowWidth*.9, windowHeight/2.6+windowHeight/3, windowWidth, windowHeight/6);
// }
}
