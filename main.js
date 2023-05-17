var noseX=0
var noseY=0
var diference=0
var rightWristX=0
var leftWristX=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,550)
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLodaded)
    poseNet.on("pose",gotPoses)
}

function modelLodaded(){
    console.log("poseNet foi inicializado")
}

 function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y 
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        diference=floor(leftWristX-rightWristX)
        console.log(results)
    }

 }
function draw(){
    background("#969A97")
    document.getElementById("square_side").innerHTML="largura e altura serão = "+diference+"px"
    fill("#F90093")
    stroke("#F90093")
    square(noseX,noseY,diference)
}