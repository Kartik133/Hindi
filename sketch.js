var a;

function preload() {
  a = loadFont("abc.ttf");
}

function setup() {

}

function draw() {
  createCanvas(WindowWidth,WindowHeight);
 
  background(0);

  fill(255);
  noStroke();
  textFont(a);
  textSize(30);
  text("abc" + 20,200,200);
}