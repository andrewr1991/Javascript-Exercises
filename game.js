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
<bodyUser>
<canvas id="myCanvas" width="500" height="300"></canvas>
<script>

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var dxUser = 3;
var dyUser = 3;

var xFoe1 = 25;
var yFoe1 = 25;

var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;

var player = { x: 100, dx: 2, y: 100, dy: 2, r: 10};
var rect = {x: 25, dx: 1, y: 25, dy: 1, w: 20, h: 20};

function drawUser() {
  ctx.beginPath();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.arc(player.x,player.y,player.r,0,Math.PI*2);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
}

function drawRect() {
  ctx.beginPath();
  ctx.rect(rect.x,rect.y,rect.w,rect.h);
  ctx.fillStyle = "#ff1493";
  ctx.fill();
  ctx.closePath();
  rect.x += rect.dx;
}

function draw() {
drawUser();
drawRect();

function collisionDetection(player,rect) {
  var distX = Math.abs(player.x - player.dx - rect.x - rect.w/2);
  var distY = Math.abs(player.y - rect.y - rect.h/2);

  if (distX >= (rect.w / 2 + player.r + player.dx)) {
    return false;
  }
  if (distY > (rect.h / 2 + player.r)) {
    return false;
  }

  if (distX <= rect.w/2) {
    return true;
  }
  if (distY <= rect.h/2) {
    return true;
  }
}

if(collisionDetection(player,rect)) {
  console.log("hello");
}


if (rect.x + rect.dx > canvas.width-15) {
  rect.dx = -rect.dx;
}
if (rect.x + rect.dx < 10) {
  rect.dx = -rect.dx;
}

//conditionals for determining user key pressing

  if(player.x - player.dx < 10) {
    leftPressed = false;
  }
  if (player.x + player.dx > canvas.width-player.r) {
    rightPressed = false;
  }
  if (player.y - player.dy < 10) {
    upPressed = false;
  }
  if (player.y + player.dy > canvas.height-player.r) {
    downPressed = false;
  }


  if (rightPressed == true) {
    player.x += player.dx;
  }
  if (leftPressed == true) {
    player.x -= player.dx;
  }
  if (downPressed == true) {
    player.y += player.dy;
  }
  if (upPressed == true) {
    player.y -= player.dy;
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
</bodyUser>
</html>
