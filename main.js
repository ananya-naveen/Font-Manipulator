function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(130,130);
    canvas=createCanvas(550,500);
    canvas.position(800,130);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background("#FCA311");
}