
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine 
var world
var chao
var parede
var parede2
var boladokiko
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
var propriedadechao = {
	isStatic:true
}
var propriedadeparede = {
	isStatic:true
}
var propriedadeparede2 = {
	isStatic:true
}
var propriedadekiko = {
	isStatic:false,
	restution:0.3,
	density:1.2
}
	//Create the Bodies Here.
chao = Bodies.rectangle(0,670,3000,20,propriedadechao);
parede = Bodies.rectangle(1100,600,20,120,propriedadeparede);
parede2 = Bodies.rectangle(1350,600,20,120,propriedadeparede2);
boladokiko = Bodies.circle(260,100,20,propriedadekiko);
World.add(world,chao);
World.add(world,parede);
World.add(world,parede2);
World.add(world,boladokiko);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(chao.position.x,chao.position.y,3000,20)
  rect(parede.position.x,parede.position.y,20,120)
  rect(parede2.position.x,parede2.position.y,20,120)
  ellipse(boladokiko.position.x,boladokiko.position.y,20,20)
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(boladokiko,boladokiko.position,{x:85,y:-85});
	}
}

