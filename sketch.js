const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();

}

function draw(){

    if(backgroundImg)
         background(backgroundImg);
    // add condition to check if any background image is there to add
    
    Engine.update(engine);

    // write code to display time in correct format here
   // background(bg);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    
    //change the data in JSON format
    var jsonValue = await response.json();

    // write code slice the datetime
    var datetime = jsonValue.datetime;
    var hour = datetime.slice(11, 13);
    // add conditions to change the background images from sunrise to sunset
    console.log(hour);
    var hourInt = parseInt(hour);

    if(hourInt >=00 && hourInt<=02) {
        bg = "sunrise1.png";
    } else if(hourInt>=02 && hourInt<=04) {
        bg = "sunrise2.png";
    }   else if(hourInt>=04 && hourInt<=06) {
        bg = "sunrise3.png";
    } else if(hourInt>=06 && hourInt<=08) {
        bg = "sunrise4.png";
    } else if(hourInt>=08 && hourInt<=10) {
        bg = "sunrise5.png";
    } else if(hourInt>=10 && hourInt<=12) {
        bg = "sunrise6.png";
    } else if(hourInt>=12 && hourInt<=14) {
        bg = "sunset7.png";
    } else if(hourInt>=14 && hourInt<=16) {
        bg = "sunset8.png";
    } else if(hourInt>=16 && hourInt<=18) {
        bg = "sunset9.png";
    } else if(hourInt>=18 && hourInt<=20) {
        bg = "sunset10.png";
    } else if(hourInt>=20 && hourInt<=22) {
        bg = "sunset11.png";
    }
    else if(hourInt>=22 && hourInt<=24) {
        console.log("am i in 20");
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}