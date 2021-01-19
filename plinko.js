class Plinkos{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
    
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}