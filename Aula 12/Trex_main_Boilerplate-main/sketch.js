var trex, trex_running, trex_collided;
var chao, chaoimg;
var chaoinv;
var nuvem;
var imgNuvem;
var cactos; 
var cacto1,cacto2,cacto3,cacto4,cacto5,cacto6;
var score = 0;
var inicio; 
var jogar = 1;
var fimdejogo = 0;
var estadojogo = jogar;
var cactosgroup;

function preload(){
  trex_running = loadAnimation("./images/trex1.png","./images/trex3.png","./images/trex4.png");
  chaoimg = loadImage("./images/ground2.png");
  imgNuvem = loadImage("./images/cloud.png");
  cacto1 = loadImage("./images/obstacle1.png");
  cacto2 = loadImage("./images/obstacle2.png");
  cacto3 = loadImage("./images/obstacle3.png");
  cacto4 = loadImage("./images/obstacle4.png");
  cacto5 = loadImage("./images/obstacle5.png");
  cacto6 = loadImage("./images/obstacle6.png");
}

function setup(){
  createCanvas(600,200);
   trex = createSprite(50,140,20,50);
   trex.addAnimation("running", trex_running);
   chao = createSprite (300,170,600,20);
   chao.addImage(chaoimg);
   console.log(chao.x);
   chaoinv = createSprite(300,180,600,15);
   trex.scale = 0.6;
   cactosgroup = createGroup();
}


function draw(){
  background("white");
  textSize(13);
  text("Pontuação " + score, 20,20);
  if (estadojogo == jogar){
    createEdgeSprites(cactos);
    chao.velocityX = -4;
    score = score + Math.round(frameCount/60);
    if (keyDown("space") && trex.y >= 141){
      trex.velocityY=-10 ;
     }
    trex.velocityY = trex.velocityY + 0.85;
    if (chao.x < 0){
    chao.x = chao.width/2;
   }
   if (cactosgroup.isTouching(trex)){
    estodojogo = "fimdejogo";
   } else if (estadojogo == "fimdejogo"){
    chao.velocityX = 0;
   }
    }
  chaoinv.visible = false;
  trex.collide(chaoinv);
  console.log(trex.y);
  criarnuvens();
  criarcactos();
  drawSprites();
  
}

function criarcactos(){
  if (frameCount%90 === 0){
  cactos = createSprite(600,165,40,10);
  cactos.velocityX = -4;
  var cactosRandom  = Math.round(random(1,6));
  cactos.scale = 0.45;
  cactos.lifetime = 200;
  switch(cactosRandom){
    case 1: cactos.addImage(cacto1);
      break;
    case 2: cactos.addImage(cacto2);
      break;
    case 3: cactos.addImage(cacto3);
      break;
    case 4: cactos.addImage(cacto4);
      break; 
    case 5: cactos.addImage(cacto5);
      break;
    case 6: cactos.addImage(cacto6);
      break;
  }
  cactosgroup.add(cactos);
  }
  }
  

   function criarnuvens(){
   if (frameCount%60 === 0 ){
    nuvem = createSprite(600,100,40,10);
    nuvem.velocityX= -3;
    nuvem.addImage(imgNuvem);
    nuvem.scale = 0.6;
    nuvem.y = Math.round(random(10,100));
    console.log(nuvem.depth);
    trex.depth = trex.depth+1;
    nuvem.lifetime = 200;
    
  } 
}