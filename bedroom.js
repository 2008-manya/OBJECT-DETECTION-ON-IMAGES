img="";

function preload(){
    img=loadImage("bedroom.jfif");
}

function setup(){
    canvas=createCanvas(650, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 650, 420);
}

function back(){
    window.location="index.html"
}