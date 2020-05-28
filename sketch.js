const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  var holder_options={
    isStatic: true
  }
 
holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

}


function draw() {
  background(0); 
  Engine.update(engine);

  fill ("brown");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,100,10);

fill("blue");
ellipseMode(RADIUS);
rect(ball.position.x,ball.position.y,40);

strokeWeight(4);
stroke("yellow");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

if (keyCode === "r"){
  ball.position.x = 200;

}
else{
  ball.position.x = mouseX;
  ball.position.y = mouseY;
}

}