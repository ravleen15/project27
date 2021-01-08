
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  bobObject1=new Bob(250,500,35)
  bobObject2=new Bob(320,500,35)
  bobObject3=new Bob(390,500,35)
  bobObject4=new Bob(460,500,35)
  bobObject5=new Bob(530,500,35)
 
  roof=new Roof(400,150,600,20)

  rope1=new Rope(bobObject1.body,roof.body,-35*4,0)
  rope2=new Rope(bobObject2.body,roof.body,-35*2,0)
  rope3=new Rope(bobObject3.body,roof.body,-35*0,0)
  rope4=new Rope(bobObject4.body,roof.body,-35*-2,0)
  rope5=new Rope(bobObject5.body,roof.body,-35*-4,0)
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  



  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:850,y:-850})
}
}