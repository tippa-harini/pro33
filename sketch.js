var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var score=0;
var particle;
var ball;
var gameState="start";
var divisions;
var divisionHeight=300;
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(30)
 text("500",15,550);
 text("500",95,550);
 text("500",175,550);
 text("500",255,550);
 text("100",330,550);
 text("100",410,550);
 text("100",490,550);
 text("200",570,550);
 text("200",650,550);
 text("200",730,550);
 
  Engine.update(engine);
  ground.display();
  
  if ( gameState ==="end") {
    textSize(100);
    text("GameOver", 150, 250);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   if(ball!=null)
  {
  ball.display();
    
    if (ball.body.position.y>760){
    
      if (ball.body.position.x < 300){ 
          
        score=score+500;      
        ball=null;
        if ( count>= 5) gameState ="end";                          
      }


      else if (ball.body.position.x < 600 && ball.body.position.x > 301 ){
          
      score = score + 100;
      ball=null;

      if ( count>= 5) gameState ="end";

      }
      else if (ball.body.position.x < 900 && ball.body.position.x > 601 ){
          
      score = score + 200;
      ball=null;
      if ( count>= 5)  gameState ="end";

      }      
          
    }

  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState!=="end"){
  
      count++;
     ball=new Ball(mouseX, 10, 10, 10); 
  }   
}