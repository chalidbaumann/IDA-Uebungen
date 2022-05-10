function setup() {
  // put setup code here
  //basic definitionen z.B. Grösse canvas
  createCanvas(800, 800);
  background(255);
}

function draw() {
  // put drawing code here
  // 60x in sekunde als standard
  // transparenz von 0 bis 255
  // ellipse(mouseX, mouseY, 50, 50);
  background(255, 30);
  triangle(mouseX, mouseY, 50, 70, 100, 150);
}