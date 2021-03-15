class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.oparry = []
  }

  display() {

    super.display();


    let pos = this.body.position;
    if(this.body.velocity.x > 5 && this.body.position.x > 250){
      let posray = [pos.x,pos.y];
      this.oparry.push(posray);
    }

   for(var i = 0 ; i<this.oparry.length ; i++){
     image(this.smoke,this.oparry[i][0],this.oparry[i][1]);
    }

  }
}
