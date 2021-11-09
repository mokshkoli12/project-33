var snow1, snow2, snow3, snow4, snow5;
var snow1Img, snow2Img, snow3Img, snow4Img, snow5Img;


function preload(){
    snow1Img = loadImage("snow1.jpg");
    snow2Img = loadImage("snow2.jpg");
    snow3Img = loadImage("snow3.jpg");
    snow4Img = loadImage("snow4.webp")
    snow5Img = loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(snow3Img); 
  textSize(20)
  fill("black")
text("press space for snowfall",50,100)



  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
    snow = createSprite(random(100,800),50,20,20);
    snow.scale = 0.1;
    snow.velocityY = 10;
    rand= Math.round(random(1,2));
    switch(rand){
      case 1:snow.addImage(snow4Img);
      break;

      case 2: snow.addImage(snow5Img);
      break;
    }
  } 
}