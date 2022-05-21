marioX = 300;
marioY = 300;
img = "";
noseX = "";
noseY = "";

function preload() {
	world_start = loadSound("world_start.wav");
mario_coin = loadSound("coin.wav");
gameover = loadSound("gameover.wav");
jump = loadSound("jump.wav");
kick = loadSound("kick.wav");
mario_die = loadSound("mariodie.wav");
img = loadImage("mario18.png");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modeloaded);
	poseNet.on("pose", gotPoses);
}

function modeloaded()
{
	console.log("Model Loaded");
}

function gotPoses(results)
{
	if(results.length>0)
	{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
	}
}

function draw() {

game();
	
}






