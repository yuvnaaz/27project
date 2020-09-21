
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var bobObject1;
	var bobObject2;
	var bobObjct3;
	var bobObject4;
	var bobObject5;
    var roofObject;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
    rope = new Rope(bobObject1.body, roofObject.body, -bobDiameter *2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

}



