class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.Viziblity = 255;

  }

  display(){
    if(this.body.speed<2.5){super.display();} 

    else{ World.remove(world,this.body);push();this.Viziblity -= 10 ; tint(255,this.Viziblity); image(this.image,this.body.position.x,this.body.position.y,50,50);pop();}
  }

};