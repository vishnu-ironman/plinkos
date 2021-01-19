

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];

var base;

var divisionHeight = 300;

function setup() {
    createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;
   
 base  = new Ground(240,680,800,10)


 for (var k =0; k <= width; k =k +80){
     divisions.push(new division (k , height-divisionHeight/2,10,divisionHeight ))
 }

 for (var j =40; j<=width ; j=j+50){
     plinkos.push(new Plinkos (j,75,10));
 }
 for (var j = 15; j<= width-10; j = j+50){
     plinkos.push(new Plinkos(j,175,10));
 }
 for (var j = 40; j <=width; j=j+50)  {
    
    plinkos.push(new Plinkos(j,275,10));
}
 for (var j = 15; j <=width-10; j=j+50) {
    
    plinkos.push(new Plinkos(j,375,10));
}




    

    Engine.run(engine);  

}

function draw() {
    background(0);

    if(frameCount%30===0){
        particles.push(new Particles(random(width/2-10,width/2+10), 10,10));
        
      }

      for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }

      for (var j = 0; j < particles.length; j++) {
   
        particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
      }



base.display();
    
}

