nose_x=0;
nose_y=0;
differ=0;
l_hand_x=0;
r_hand_x=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,200);
    canvas = createCanvas(550,500);
    canvas.position(700,200);
    model1 = ml5.poseNet(video, model_loaded);
    model1.on("pose", gotresults);
}
function model_loaded() {
    console.log('The model has been model has been loaded');
}
function gotresults(results) {
if (results.length>0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    l_hand_x = results[0].pose.leftWrist.x;
    r_hand_x = results[0].pose.rightWrist.x;
    differ = Math.floor(l_hand_x - r_hand_x);
}
}
// SAME THING BUT WITH FONTS!
function draw() {
    background("cornflowerblue");
    textSize(differ);
    fill("crimson");
    stroke("black");
 text("Arya", nose_x, nose_y );
 document.getElementById('sizeoffont').innerHTML = "The Size Of The Text Is = " +differ + "px";
}