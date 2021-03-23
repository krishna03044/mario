var mario ,mario_running,mario_collide;
var bg,bgImage;
function preload(){
mario_running=loadAnimation("images/mar1.png","images/mar2.png",
"images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
bgImage = loadImage("images/bgnew.jpg");
}

function setup() {
createCanvas(1000, 600);
bg =createSprite(580,300);
bg.scale=.5;
bg.addImage(bgImage);
mario=createSprite(200,500,30,30);
mario.addAnimation("running",mario_running);
mario.scale=0.3;
//ground
ground = createSprite(200,585,400,10);


}

function draw() {
    //mario collide
    mario.collide(ground);
    //hide ground
    ground.visible =false;
    //gravity

    mario.debug =true;
    
    //jump
    if(keyDown("space"))
    {
        mario.velocityY=-16;
    }
drawSprites();
}
