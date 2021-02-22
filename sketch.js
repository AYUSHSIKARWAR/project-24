
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var garbage;
var  bin;
var ground;

function preload(){

  backgroundImage = "white";

  }







function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  garbage = new Garbage(56,46,55);
  ground = new Ground(200,height,1300,50);
  
  bin1 =new Bin(250,320,20,70);
  bin2 =new Bin(250,360,20,70);
  bin3 =new Bin(250,380,20,70);
  bin4 =new Bin(250,400,20,70);
  bin5 =new Bin(250,370,100,20);

	Engine.run(engine);
  
}

function keyPressed (){
      if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(garbageObject.body,garbageObject.Body.position,{x:56,y:46})

      }


}






function draw() {
  rectMode(CENTER);
  background("black");
  

  drawSprites();
 
  ground.display();
  garbage.display();
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
  bin5.display();
}




