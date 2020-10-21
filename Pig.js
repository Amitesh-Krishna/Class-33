class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    this.died = false;
  }

  display(){
    push();
    if(this.body.speed>2.5){
      World.remove(world,this.body);
      this.died = true;
    }

    if(this.died){
      this.Visiblity -=5;
    }
    tint(255,this.Visiblity)
    super.display();
    pop();
    if(this.Visiblity < 0 && this.Visiblity > -505){
        score++;
    }
  }
};