var canvas;
var music;
var blk1,blk2,blk3,blk4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);
  
    //create 4 different surfaces
    blk1 = createSprite(100,650,200,20);
    blk1.shapeColor = "black";

    blk2 = createSprite(350,650,200,20);
    blk2.shapeColor = "red";

    blk3 = createSprite(600,650,200,20);
    blk3.shapeColor = "green";
    //create box sprite and give velocity
    ball = createSprite(400,200,50,50);
    ball.shapeColor = "white";
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   if (keyCode === LEFT_ARROW){
       ball.x = ball .x - 5;
   }

   if (keyCode === RIGHT_ARROW){
    ball.x = ball .x + 5;
}

   if (keyCode === UP_ARROW){
    ball.y = ball .y - 5;
}

   if (keyCode === DOWN_ARROW){
    ball.y = ball .y + 5;
}

 if(blk1.isTouching(ball)){
     ball.shapeColor="black"
 } 

 if(blk2.isTouching(ball)){
    ball.shapeColor="red"
} 

if(blk3.isTouching(ball)){
    ball.shapeColor="green"
} 

    //add condition to check if box touching surface and make it box
    drawSprites();
}
