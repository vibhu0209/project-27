
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var roof ;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400, 200, 300 , 20);

	bob1 = new Bob(400, 400 );
	

	chain1 = new Chain(bob1.body, roof.body, 0, 0)
	
	
	Engine.run(engine)

}


function draw() {
  rectMode(CENTER);
  background("aqua");
  //Engine.update(engine); 

  bob1.display();
 

  roof.display();

  chain1.display();
 

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-50,y:-60});
	 
	}
}

