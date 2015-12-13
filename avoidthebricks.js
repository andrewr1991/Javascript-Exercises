<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * { padding: 0; margin: 0; }
      canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
</head>
<bodyUser
>
<canvas id="myCanvas" width="500" height="500"></canvas>
<script>

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var dxUser = 100;
var dyUser = 100;

var xFoe1 = 25
var dxFoe1 = 1;
var foe1MoveRight = true;
var foe1MoveLeft = false;

var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;

function drawUser() {
  ctx.beginPath();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.arc(dxUser,dyUser,10,0,Math.PI*2);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
}

function drawFoe1() {
  ctx.beginPath();
  ctx.rect(xFoe1,25,10,10);
  ctx.fillStyle = "#ff1493";
  ctx.fill();
  ctx.closePath();
  xFoe1 += dxFoe1;
}

function draw() {
drawUser();
drawFoe1();

if (xFoe1 + dxFoe1 > canvas.width-15) {
  dxFoe1 = -dxFoe1;
}
if (xFoe1 + dxFoe1 < 10) {
  dxFoe1 = -dxFoe1;
}

//conditionals for determining user key pressing

  if(dxUser == 10) {
    leftPressed = false;
  }
  if (dxUser == canvas.width-10) {
    rightPressed = false;
  }
  if (dyUser == 10) {
    upPressed = false;
  }
  if (dyUser == canvas.height-10) {
    downPressed = false;
  }


  if (rightPressed == true) {
    dxUser += 3;
  }
  if (leftPressed == true) {
    dxUser -= 3;
  }
  if (downPressed == true) {
    dyUser += 3;
  }
  if (upPressed == true) {
    dyUser -= 3;
  }
}

//key press handlers

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler,false);

function keyDownHandler(event) {
  if(event.keyCode == 39) {
    rightPressed = true;
  }
  if (event.keyCode == 37) {
    leftPressed = true;
  }
  if (event.keyCode == 40) {
    downPressed = true;
  }
  if (event.keyCode == 38) {
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == 39) {
    rightPressed = false;
  }
  if (event.keyCode == 37) {
    leftPressed = false;
  }
  if (event.keyCode == 40) {
    downPressed = false;
  }
  if (event.keyCode == 38) {
    upPressed = false;
  }
}

//calling the main function that runs the game

setInterval(draw,15);


</script>
</bodyUser
>

</html>
