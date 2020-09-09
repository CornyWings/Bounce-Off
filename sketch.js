var fixedRect, movingRect, obj1, obj2, ob3, ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  obj1= createSprite(400,200,60,60);
  obj2= createSprite(600,200, 70,70);
  obj3= createSprite(600,200,80,80);
  obj4=createSprite(600,400,90,90);

    fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1.shapeColor="green";
  obj2.shapeColor="green";
  obj3.shapeColor="green";
  obj4.shapeColor="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1.velocityX= +4;
  obj2.velocityX= -6;
  obj3.velocityY= +3;
  obj4.velocityY= -5;

}

function draw() {
  background(0,0,0);  

  bounceOff(obj1,obj2);

  drawSprites();
}

