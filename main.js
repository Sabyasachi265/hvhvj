x = 0;
y = 0;

drawCircle = "";
drawRectangle = "";

var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition;

function Start(){
    document.getElementById('status').innerHTML = "system is listening, please speak what you want to draw";
    recognition.start();
}

function setup(){
    createCanvas(900, 600);
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript
    document.getElementById('status').innerHTML = "The speech has been recoginized as - " + content;
    if(content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById('status').innerHTML = "Started drawing a circle";
        drawCircle = "set";
    }

    if(content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById('status').innerHTML = "Started drawing a rectangle";
        drawRectangle = "set";
    }
}

function draw(){
    if(drawCircle == "set"){
    radius = Math.floor(Math.random()*100);
    circle(x, y, radius);
    document.getElementById('status').innerHTML = "Circle is drawn";
    drawCircle = "";
    }

    if(drawRectangle == "set"){
    rect(x, y, 100, 90);
    document.getElementById('status').innerHTML = "Rectangle is drawn";
    drawRectangle = "";
    }
}