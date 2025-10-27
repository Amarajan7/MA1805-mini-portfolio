function setup() {
  createCanvas(600, 400);
  noStroke();
}

let x=[], y=[]

function setup() {
  createCanvas(800,600)
  for (let i=0; i<120; i++) x[i]=random(width), y[i]=random(height)
}

function draw() {
  background(180,220,255)
  fill(0,100,255)
  noStroke()
  for (let i=0; i<x.length; i++)
    ellipse(x[i], y[i], 3, 10),
    y[i]+=5,
    y[i]>height && (y[i]=0)
}
