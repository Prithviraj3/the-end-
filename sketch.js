var player,playerimg,backgroundimg,bgSprite;
var i=0;
var enemie=[],enemieimg,enemie2,enemie2img
var invisground,ground1,ground2,groundimg
var life=2,life1,life2,lifeimg
var enemygroup;
var gamestate="play"
var gameoverimg,gameover
function preload(){
  playerimg=loadAnimation("player.png");
  backgroundimg=loadImage("bg.jpg");
enemieimg=loadImage("crab.png");
enemie2img=loadImage("enemies.png");
groundimg=loadImage("platform.png")
lifeimg=loadImage("heart.png")
gameoverimg=loadImage("gameover.png")
}
function setup() {
  createCanvas(1200,800);
  bgSprite=createSprite(600,490,100,100);
 bgSprite.addImage(backgroundimg);
 player = createSprite(200,700,50,50);
 player. addAnimation("player",playerimg);
 player.scale=1.5
 invisground=createSprite(635,755,1500,2)
 invisground.visible=false
 ground1=createSprite(360,500,10,10)
 ground1.addImage(groundimg)
 ground1.scale=0.5
 ground2=createSprite(950,500,10,10)
 ground2.addImage(groundimg)
 ground2.scale=0.5
 life1=createSprite(1170,220,10,10)
 life1.addImage(lifeimg)
 life1.scale=0.05

life2=createSprite(1170,250,10,10)
life2.addImage(lifeimg)
life2.scale=0.05
enemygroup=createGroup();
gameover=createSprite(600,400,100,100)
gameover.addImage(gameoverimg)
gameover.visible=false

 }

function draw() {
  background("blue")
  if (gamestate==="play"){
    if(bgSprite.x<200){
      bgSprite.x=400;
    }
    if(life===2){
      life1.visible=true;
      life2.visible=true;
    }
    if(player.y){
      if(keyDown("right")){
    player.x=player.x+4
    
      }
      if(keyDown("left")){
        player.x=player.x-4
        
          }
          if(keyDown("space") ) {
           player.velocityY = -12;
          }
         player.velocityY = player.velocityY + 1;
        
              if(keyDown("down")){
                player.y=player.y+2
                
                  }
                }
                
                player.collide(invisground);
                player.collide(ground2);
                player.collide(ground1);
                              console.log(life)
          for(var j=0;j<i;j++){
            if(enemie[j].isTouching(player)){
              //enemie[j].velocityY=0;
              player.x=200;
              player.y=700;
              life=life-1;
              enemie[j].destroy();
              if(life===1){
                life1.visible=false;
              }
              if(life===0){
                life2.visible=false;
                gamestate="end"
              }
            }
          }
          spawnenemies()
  }
if(gamestate==="end"){
gameover.visible=true
}
if(mousePressedOver(gameover)){
  gameover.visible=false;
  gamestate="play";
  life=2;
}
     ;
  drawSprites();
}
function spawnenemies(){
  if(frameCount % 20===0){
enemie[i]=createSprite(random(250,1180),220,20,20);
var rand =Math.round(random(1,2));
switch (rand){
  case 1:enemie[i].addImage(enemieimg);
  break;
  case 2:enemie[i].addImage(enemie2img);
  break;
}

enemie[i].velocityY=4
enemie[i].scale=0.8
i=i+1
//enemygroup.add(enemie);

  }
}