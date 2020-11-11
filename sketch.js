//Create variables here
var  dog, happyDog, database, foodS, foodStock
var database=firebase.database;
function preload()
{
  //load images here
  dog=loadImage("dogImg.png");
 // happyDog=loadImage("dogImg1.png")	
}

function setup() {
  createCanvas(500, 500);
  var dog1 =createSprite(100,200,20,20);

foodStock.on("value",readStock);
foodStock=database.ref("food");
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    //dog.addImage(dogHappy);
  }
  text("NOTE:Press UP_ARROW key to feed the dog", 250, 250)
  drawSprites();
  textSize(20);
  fill("red");
  stroke(4);
  //add styles here

}

function readStock(data){
    foodS=data.val();
}

function writeStock(x){
if (x<=0){
  x=0;
} else{
  x=x-1;
}
 database.ref("/").update({
   Food:x
 })
}