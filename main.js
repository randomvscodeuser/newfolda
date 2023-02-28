function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
}

function draw(){
circle(0, 0, 20);
circle(640, 0, 20);
circle(640, 480, 20);
circle(0, 480, 20);
rect(10, 10, 600, 20);

}