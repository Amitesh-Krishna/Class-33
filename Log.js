class Log extends BaseClass{
  constructor(x,y,height,angle){
    //var options = {
        //restitution:0,
        //density:0.8,
        //friction : 0.5
    //}
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}