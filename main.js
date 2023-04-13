function setup(){
    canvas=createCanvas(500,450);
    canvas.position(730,150);
    video=createCapture(VIDEO);
    video.position(50,120)
    video.size(550,500)
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model loaded");
}
var leftwristx=0;
var rightwristx=0;
var difference=0;
function gotposes(results){
    if(results.length>0){
        console.log(results);
       leftwristx=results[0].pose.leftWrist.x;
       rightwristx=results[0].pose.rightWrist.x;
       difference=floor(leftwristx-rightwristx);
    }
}
function draw(){
    background("lightyellow");
    textSize(difference);
    fill("black");
    text("Rishaan",50,150);
    document.getElementById("font_size_span").innerHTML="Font size is "+difference;

}