class chain{
    constructor(bodyA,bodyB,len,stif){
        let opties={
            bodyA : bodyA,
            bodyB : bodyB,
            length : len,
            stiffness : stif
        }

        this.Chain = Matter.Constraint.create(opties);
        World.add(world,this.Chain);
    }

    display(){
        let BA = this.Chain.bodyA.position;
        let BB = this.Chain.bodyB.position
        line(BA.x,BA.y,BB.x,BB.y);
    }
}