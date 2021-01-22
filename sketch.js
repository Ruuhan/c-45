var bgimg
function preload(){
  bgimg=loadImage("IMAGES/BACKGROUND GAME 2.PNG")
}

function setup(){
  createCanvas(displayWidth,displayHeight)
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(bgimg)
  bg.scale=2.8
  player=createSprite(100,displayHeight-200,40,80)
}


function draw(){
  drawSprites()
}