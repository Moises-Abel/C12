var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
 pathImg = loadImage("path.png")
 boyImg = loadAnimation("runner-1.png", "Runner-2.png") 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,400,100,400)
  path.addAnimation("moving", pathImg)
  path.scale=1.2;

  boy = createSprite (200,400,30,30)
  boy.addAnimation("running", boyImg)
  boy.scale=0.08;
 
  leftBoundary=createSprite(0,0,100,800);
  rightBoundary=createSprite(410,0,100,800);


  

}

function draw() {
  background(12);
  path.velocityY = 4;
  
boy.x = mouseX  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
