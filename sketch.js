
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var dustbinObj,PaperObject,groundObject
 var engine,world;


 function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;


	PaperObject=new Paper(200,300,70);
	groundObject=new ground(width/2,370,width,20);
	dustbinObj=new dustbin(1000,350);
	
	Engine.run(engine);
 }

 function draw() {

 rectMode(CENTER);
  background(230);

 
  groundObject.display();
  dustbinObj.display();
  PaperObject.display();
  
 }

 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:82,y:-82});
	 }
 }



