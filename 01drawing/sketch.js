function setup() {
  createCanvas(800, 800);
  background(200);

  // Face
  fill(255);
  stroke(0);
  circle(400, 400, 300);

  // Eyes
  fill(0);
  noStroke();
  circle(350, 370, 20); // left eye
  circle(450, 370, 20); // right eye

  // Tear under right eye
  fill(0, 150, 255);
  ellipse(450, 400, 15, 25);

  // Simple squiggly mouth
  stroke(0);
  strokeWeight(5);
  noFill();
  line(340, 470, 370, 480);
  line(370, 480, 400, 465);
  line(400, 465, 430, 480);
  line(430, 480, 460, 470);
  describe('A confused face with two eyes, a tear, and a squiggly mouth.');
}



