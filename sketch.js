var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(fixedRect,movingRect);
  drawSprites();
}

function bounce(fixedRect,movingRect){
  if (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2) {
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  if (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
  } 



}