class SlingShot{

    constructor(objA,pointB) {
        
        stroke(color(48,22,8));
        var options = 
        {
            bodyA:objA.body,
            pointB:pointB,
            stiffness:0.05,
            length:3

        }

        this.posA = objA.body.position;
        this.posB = pointB;

        this.image1 = new loadImage("sprites/sling1.png");
        this.image2 = new loadImage("sprites/sling2.png");
        this.image3 = new loadImage("sprites/sling3.png");

        this.connection = Constraint.create(options);
        World.add(world,this.connection);

    }

    fly(){

        this.connection.bodyA = null;

    }
    attach(body){

        this.connection.bodyA = body;

    }

    display(){
    
        image(this.image1,200,35);
        image(this.image2,172,30);

        if(this.connection.bodyA){

            if(this.connection.bodyA.position.x <200){

                strokeWeight(8);
            }
            else{
                
                strokeWeight(5)

            }

            line(this.posA.x-20,this.posA.y,this.posB.x-20,this.posB.y);
            line(this.posA.x-20,this.posA.y,this.posB.x+20,this.posB.y);        
            image(this.image3,this.posA.x-28,this.posA.y-15,15,30);

        }

    }
}