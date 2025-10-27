let hum;
let img;
let capture;
let video;

// Declare variable 'img'.

function preload() {
  img = loadImage('Antenna.jpg'); // Load image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Display image at actual size at x/y (0,0)
  image(img, 0, 0);
  // Displays half size image at x/y (0, 100)
  //image(img, 0, 100, img.width/2, img.height/2);
}