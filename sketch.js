var starImg,bgImg;
var star, starBody;
var fada, fadaIMG, fadaSOM
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaIMG = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fadaSOM = loadSound("soung/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){

background("black");
    
    if(keyDown(LEFT_ARROW)){
        star.velocityX = -2
        
    }
    
    if(keyDown(RIGHT_ARROW)){
        star.velocityX = 2
        
    }

    if(star.y > 470 && starBody.position.y > 470 ){
        Matter.Body.setStatic(starBody,true);
    }


    drawSprites();
}