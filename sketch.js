//Create variables here
var dog,foodStock,lastFed;

function preload(){
//load images here
dog=loadImage("dogImg.png");
dog1=loadImage("dogImg1.png");
milk=loadImage("milk.png");
}

function setup() {
	createCanvas(500, 500);
  foodStack=database.ref('Food');
  foodStock.on("value",readStock);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
  
  drawSprites();
fill(255,254);
textSize(15);
if(lastFed>=12){
  text("Last Food:"+lastFed%12+"PM",350,30)
}else if(lastFed==0){
  text("Last Fed : 12 AM",350,30);
}else{
  text("Last Fed :"+ lastFed +"AM",350,30); 
}

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
 
}

function feedTheDog(){
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
})
}

}
