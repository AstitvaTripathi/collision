var mvgRect,fxdRect ;

function setup() {
  createCanvas(1200,800);
  mvgRect = createSprite(400,200,80,40);
  mvgRect.shapeColor ='red';

  fxdRect = createSprite(300,50,100,50);
  fxdRect.shapeColor ='red';
}

function draw() {
  background(0,0,0);  

  mvgRect.x = World.mouseX
  mvgRect.y = World.mouseY

  if(mvgRect.x-fxdRect.x<fxdRect.width/2+mvgRect.width/2){
    mvgRect.shapeColor = 'yellow';
    fxdRect.shapeColor = 'yellow';
  }
  else{
    mvgRect.shapeColor='red';
    fxdRect.shapeColor ='red';
  }

  drawSprites();

}