noseX = 0
noseY = 0
function preload(){
  dog = loadImage("meme-doge.jpg")
  filtro = loadImage("dog_nariz.png")
}
function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO)
  video.size(400, 400)
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on("pose", gotPoses)
  video.hide()
}
function draw() {
  background("white");
  fill("rgb(245,245,115)")
  rect(10, 90, 380, 250)                               
  circle(0, 0, 100)
  circle(400, 40100)
  image(dog, 20, 100, 200, 235 )
  image(video, 200, 100, 185, 235)
  image(filtro, noseX, noseY, 100, 70)
}
function modelLoaded() {
  console.log('PoseNet Is Initialized'); 
}
function gotPoses(results) {
  if(results.length > 0) { 
  console.log(results);
  noseX = results[0].pose.nose.x+20;
  noseY = results[0].pose.nose.y+10;
  } 
}
function takeSnapShot(){
  save("dog_filtro_nose.jpge")
}