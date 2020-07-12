const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform;
var slingShot1;
var score = 0;

function setup(){
     createCanvas(800,400);
     engine=Engine.create()
    world = engine.world;

     Engine.run(engine);

    platform = new Platform(400, 290, 600, 30);
    box1 = new Box(390,260,30,30);
    box2= new Box(370,190,30,30);
    box3 = new Box(390,190,30,30);
    box4 = new Box(410,190,30,30);
   // box = new Box(430,190,30,30);
    box5 = new Box(350,170,30,30);
    box6 = new Box(370,170,30,30);
    box7 = new Box(350,190,30,30);
    box8 = new Box(350,150,30,30);
    box9 = new Box(370,150,30,30);
    box10 = new Box(360,130,30,30);
    box11 = new Box(350,170,30,30);
    box12 = new Box(370,170,30,30);
    box13 = new Box(400,190,30,30);
    box14 = new Box(390,150,30,30);
    box15 = new Box(200,150,30,30);
    box16 = new Box(300,130,30,30);
    bird = new Bird(90,200)
    slingShot1 = new Slingshort(bird.body,{x:90,y:200});
}

function draw(){
    background("blue");
  //  Engine.update(engine);
    strokeWeight(4);
    text("score"+score,100,100);
   platform.display();
  
   box1.display();
   box2.display();
   box3.display(); 
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();

   box1.score();
   box2.score();
   box3.score(); 
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();
   box13.score();
   box14.score();
   box15.score();
   box16.score();
   bird.display();
   slingShot1.display();
}

function mouseDragged(){
 Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingShot1.fly();
}
function keyPressed(){
   if(keyCode === 32){
      slingShot1.attach(bird.body);

 }

 } 