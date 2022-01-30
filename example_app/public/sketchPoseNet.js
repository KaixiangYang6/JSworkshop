
let video;
let poseNet;
let poses = [];
let c;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    poseNet = ml5.poseNet(video, modelReady);//variable poseNet is filled with ML5 posenet model. Once done ,trigger modelReady function
    poseNet.on("pose", function(results){//Triggers an event that fills variable “poses” with a stream of number results coming from our model
        poses = results;
    });
    video.hide();
} 

function modelReady(){
    select("#status").html("Model Loaded");
}

function draw(){
    image(video, 0, 0, width, height);
    drawSkeleton();
}
//Running constantly - up to 60 times per second
//Draw video frames
//Trigger drawSkeleton function let's write it next

function drawSkeleton(){
    for (let i = 0; i < poses.length; i += 1){
        const skeleton = poses[i].skeleton;
        if (skeleton.length > 1){
            c = color(255, 0, 0);
        }
        else{
            c = color(55, 204, 0);
        }
        noStroke();
        fill(c);
        rect(0, 0, 100, 100);

        for (let j = 0; j < skeleton.length; j += 1){
            const partA = skeleton[j][0];
            const partB = skeleton[j][1];
            stroke(255, 0, 0);
            strokeWeight(6);
            line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        }

    }
}

