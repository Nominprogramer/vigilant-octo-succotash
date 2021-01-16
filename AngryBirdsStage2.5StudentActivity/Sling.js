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
        World.add(world,this.Slingo);
    }

    display(){
        if(this.Slingo.bodyA){
           let BA = this.Slingo.bodyA.position;
           let BB = this.pointB;
           line(BA.x,BA.y,BB.x,BB.y);
        }
    }


    KillConstraint(){
        this.Slingo.bodyA = null;
    }
}