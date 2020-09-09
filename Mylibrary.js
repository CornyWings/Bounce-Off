function bounceOff(obj6,obj7)
{

  if (obj6.x - obj7.x < obj7.width/2 + obj6.width/2
    && obj7.x - obj6.x < obj7.width/2 + obj6.width/2) {
  obj6.velocityX = obj6.velocityX * (-1);
  obj7.velocityX = obj7.velocityX * (-1);
 }
 if (obj6.y - obj7.y < obj7.height/2 + obj6.height/2
  && obj7.y - obj6.y < obj7.height/2 + obj6.height/2){
  obj6.velocityY = obj6.velocityY * (-1);
  obj7.velocityY = obj7.velocityY * (-1);
}

}

function isTouching(obj1,obj2) 
{ 
    if(obj2.x - obj1.x < obj1.width/ 2 + obj2.width/2 
        && obj1.x - obj2.x < obj1.width/2 + obj2.width/2 
        && obj1.y - obj2.y < obj1.height/2 + obj2.height/2 
        && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) 
        { 
            return true; 
        } 
        else 
        { 
            return false; 
        } 
    }