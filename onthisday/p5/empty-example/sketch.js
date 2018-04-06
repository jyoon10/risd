function setup() {
	createCanvas(1439, 839, WEBGL);
}

function draw() {
	background(100);

	noFill();
	stroke(255);
	push();
	translate(10, height*0.03, -200);
	rotate(frameCount / 86400.0);
	sphere(300);
	pop();
}
