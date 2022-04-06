const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var rock;
var plataforma;
var wall;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
  var rock_options={
      restitution:1
  }
  var plataforma_options={
    isStatic: true
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  wall = Bodies.rectangle(300,200,200,20 ,ground_options);
  World.add(world,wall);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  rock = Bodies.circle(300,10,20,rock_options);
  World.add(world,rock);

  plataforma = Bodies.rectangle(200,5,400,20,plataforma_options);
  World.add(world,plataforma);

}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 ellipse(rock.position.x,rock.position.y,20);
 rect(plataforma.position.x,plataforma.position.y,200,20); 
 rect(wall.position.x,wall.position.y,200,10);
}

