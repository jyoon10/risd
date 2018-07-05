function setup() {
	createCanvas(1200, 700, WEBGL);
}

function draw() {
	background(0);

	noFill();
	stroke(255);
	push();
	translate(-100, 80, -300);
	rotate(frameCount / 86400.0);
	sphere(350);
	pop();
}
