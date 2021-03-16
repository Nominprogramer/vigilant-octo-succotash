class Sling{
    constructor(bodyA,pointB,len,stif){
        let opties={
            bodyA : bodyA,
            pointB:pointB,
            length : len,
            stiffness : stif
        }
        this.pointB = pointB;
        this.Slingo = Matter.Constraint.create(opties);
        this.image=loadImage("sprites/sling1.png");
        this.I2 = loadImage("sprites/sling2.png");
        this.I3 = loadImage("sprites/sling3.png");
        World.add(world,this.Slingo);
    }

    display(){

        image(this.image,200,50);
        image(this.I2,170,50);


        if(this.Slingo.bodyA){
           let pointA = this.Slingo.bodyA.position
           let pointB = this.pointB


           if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 15, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 15, pointA.y, pointB.x -30, pointB.y - 3);
            image(this.I3,pointA.x -30, pointA.y -10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x + 15, pointA.y, pointB.x +10, pointB.y);
            line(pointA.x + 15, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.I3,pointA.x + 25, pointA.y -10,15,30);
        }
        
           
          
        }
        
    }

    attach(body){
        this.Slingo.bodyA = body;
    }

        
    


    KillConstraint(){
        this.Slingo.bodyA = null;
    }
}