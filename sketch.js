var canvas;
var music;

var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    

    surface1 = createSprite(100,550,160,25);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,550,160,25);
    surface2.shapeColor = "green";

    surface3 = createSprite(500,550,160,25);
    surface3.shapeColor = "orange";

    surface4 = createSprite(700,550,160,25);
    surface4.shapeColor = "blue";


    //create box sprite and give velocity

        box = createSprite(random(20,750),400,30,30);
        box.velocityY = 5;
        box.velocityX = 2;
}

function draw() {
    background(rgb(169,169,169));



    if(box.x > 800){
        box.velocityX = box.velocityX*-1
    }

    if(box.x < 0){
        box.velocityX = box.velocityX*-1
    }

    if(box.y > 600){
        box.velocityY = box.velocityY*-1
    }

    if(box.y < 0){
        box.velocityY = box.velocityY*-1
    }



    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){

        box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){

        box.shapeColor = "green";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){

        box.shapeColor = "orange";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){

        box.shapeColor = "blue";
        music.play();

    }

    drawSprites();
}
