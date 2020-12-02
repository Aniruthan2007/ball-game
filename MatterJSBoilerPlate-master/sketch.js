var side1,side2, side3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=Bodies.rectangle(800,650,1600,20,{isStatic:true});
	World.add(world,ground);
	side1=Bodies.rectangle(1200,600,20,100,{isStatic:true});
	World.add(world,side1);
	side2=Bodies.rectangle(1400,600,20,100,{isStatic:true});
	World.add(world,side2);
	side3=Bodies.rectangle(1300,640,200,20,{isStatic:true});
	World.add(world,side3);
	var option = {
		isStatic : false,
		restitution: 0.3,
		friction: 0.5,
		density:1.2
	}
	ball=Bodies.circle(200,600, 40, option);
	World.add(world,ball);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown");
  rect(ground.position.x,ground.position.y,1600,20);
  rect(side1.position.x,side1.position.y,20,100);
  rect(side2.position.x,side2.position.y,20,100);
  rect(side3.position.x,side3.position.y,200,20)
  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:85, y:-85})
	}
}



