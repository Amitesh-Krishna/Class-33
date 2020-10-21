const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;

var platform,log;

var onSling = 0;
var launched = 1;

var gameState = onSling;
var score = 0;

function preload() {
    timeFormatting();
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    platform = new Ground(100,315,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,60);

    //log = new Log(150,150,100,PI/2);

    conn = new SlingShot(bird,{x:200,y:60});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }else{
        background("white");
    }

    //console.log(bird.body.speed);
    push()
    fill("white");
    strokeWeight(4)
    textSize(30);
    text("Score:"+score,1000,60)
    pop()
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    platform.display();

    bird.display();

    //log.display();
    conn.display();
}

function mouseDragged(){
    if(gameState == onSling){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    conn.fly();
    gameState = launched;
}

function keyPressed(){
    if(keyCode == 32 && bird.body.speed <1){
        bird.clear();
        Matter.Body.setPosition(bird.body,{x:200,y:60});
        conn.attach(bird.body);
        gameState = onSling;
    }
}

async function timeFormatting(){

    timeZone = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    timeZone1 = await timeZone.json();
    datetime = timeZone1.datetime;
    hours = datetime.slice(11,13);
    //onsole.log(hours+1);
    //console.log(hours);
    if(hours<=18 && hours>=6){
        var bg = "sprites/bg.png";
    }else{
        var bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}