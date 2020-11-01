var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions=[];

var chance=1,score=0;

var divisionHeight=300;
var score =0;
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
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  // displaying arrays
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
    }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   
   
textSize(25);
fill('white');
textFont("cellestar")
 text("Score:"+score,50,30)
 text("100",10,600)
 text("100",90,600)
 text("200",170,600)
 text("200",250,600)
 text("500",330,600);
 text("500",410,600)
 text("200",490,600)
 text("200",570,600);
 text("100",650,600)
 text("100",730,600)
 
   
   
   ground.display();

   mousePressed();
   particles.display();


   if(particle=null){
particles.display();

if(particle.y>450){

if(particles.x>0&&particle.x<80){
  score=score=100
  particles=null;
  chance++;
}


if(particles.x>80&&particle.x<160){
  score=score=100
  particles=null;
  chance++;
}


if(particles.x>160&&particle.x<240){
  score=score=200
  particles=null;
  chance++;
}


if(particles.x>240&&particle.x<320){
  score=score=200
  particles=null;
  chance++;
}


if(particles.x>320&&particle.x<400){
  score=score=500
  particles=null;
  chance++;
}


if(particles.x>400&&particle.x<480){
  score=score=500
  particles=null;
  chance++;
}


if(particles.x>480&&particle.x<560){
  score=score=200
  particles=null;
  chance++;
}


if(particles.x>560&&particle.x<640){
  score=score=200
  particles=null;
  chance++;
}


if(particles.x>640&&particle.x<720){
  score=score=100
  particles=null;
  chance++;
}


if(particles.x>720&&particle.x<800){
  score=score=100
  particles=null;
  chance++;
}

}


   }
}



function mousePressed(){
  if(chance!==6){
    particles=new Particle(mouseX,10,10,10);
  
     

  }
}
