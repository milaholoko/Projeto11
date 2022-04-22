var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
 edges= createEdgeSprites();
// Movendo o fundo 
path = createSprite(200,200);
path.addImage(pathImg)
path.velocityY = 4
path.scale = 1.2

//Criando menino que corre 
boy = createSprite(200,200)
boy.addAnimation("running",boyImg)
boy.scale = 0.05

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(390,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX
boy.collide(edges[3]);
boy.collide(leftBoundary)
boy.collide(rightBoundary)
if (boy.x >390){
    boy.x = 389
}
if (boy.x <0){
    boy.x = 1
}


 //Reiniciar o fundo
 if(path.y > height){
     path.y = 0
 }



 drawSprites();

 }




