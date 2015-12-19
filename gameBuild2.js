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

var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;

var player = { x: canvas.width/2, dx: 2, y: canvas.height-15, dy: 2, r: 10, lives: 3};
var rect1 = {x: 50, dx: 2, y: 25, dy: 1, w: 20, h: 20};
var rect2 = {x: 250, dx: 2.25, y: 75, dy: 1, w: 20, h: 20};
var rect3 = {x: 350, dx: 2.10, y: 125, dy: 1, w: 20, h: 20};
var rect4 = {x: 150, dx: 2.30, y: 175, dy: 1, w: 20, h: 20};
var rect5 = {x: 450, dx: 2.15, y: 225, dy: 1, w: 20, h: 20};

function drawUser() {
  ctx.beginPath();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.arc(player.x,player.y,player.r,0,Math.PI*2);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
}

function drawRect(x,y,w,h) {
  ctx.beginPath()
  ctx.rect(x,y,w,h);
  ctx.fillStyle = "#ff1493";
  ctx.fill();
  ctx.closePath();
}

function keyPressHandlers() {
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
}

function collisionDetection(player,rect1) {
    var distX = Math.abs(player.x - rect1.x - rect1.w/2);
    var distY = Math.abs(player.y - rect1.y - rect1.h/2);

    if (distX > (rect1.w/2 + player.r)) { return false; }
    if (distY > (rect1.h/2 + player.r)) { return false; }

    if (distX <= (rect1.w/2)) { return true; } 
    if (distY <= (rect1.h/2)) { return true; }
    
    var dx=distX-rect1.w/2;
    var dy=distY-rect1.h/2;
    return (dx*dx+dy*dy<=(player.r*player.r));
}

//calling the main function that runs the game

setInterval(firstRound,15);

function firstRound() {
drawUser();
drawRect(rect1.x,rect1.y,rect1.w,rect1.h);
drawRect(rect2.x,rect2.y,rect2.w,rect2.h);
drawRect(rect3.x,rect3.y,rect3.w,rect3.h);
drawRect(rect4.x,rect4.y,rect4.w,rect4.h);
drawRect(rect5.x,rect5.y,rect5.w,rect5.h);
keyPressHandlers();
if(collisionDetection(player,rect1)) {
  alert("You Lose");
  document.location.reload();
}

// rectangle movement code

if (rect1.x >= 10) {
    rect1.x += rect1.dx;
  }
if (rect1.x + rect1.dx > canvas.width-30) {
  rect1.dx = -rect1.dx;
}
if (rect1.x + rect1.dx < 10) {
  rect1.dx = -rect1.dx;
}

if (rect2.x >= 10) {
    rect2.x += rect2.dx;
  }
if (rect2.x + rect2.dx > canvas.width-30) {
  rect2.dx = -rect2.dx;
}
if (rect2.x + rect2.dx < 10) {
  rect2.dx = -rect2.dx;
}

if (rect3.x >= 10) {
    rect3.x += rect3.dx;
  }
if (rect3.x + rect3.dx > canvas.width-30) {
  rect3.dx = -rect3.dx;
}
if (rect3.x + rect3.dx < 10) {
  rect3.dx = -rect3.dx;
}

if (rect4.x >= 10) {
    rect4.x += rect4.dx;
  }
if (rect4.x + rect4.dx > canvas.width-30) {
  rect4.dx = -rect4.dx;
}
if (rect4.x + rect4.dx < 10) {
  rect4.dx = -rect4.dx;
}

if (rect5.x >= 10) {
    rect5.x += rect5.dx;
  }
if (rect5.x + rect5.dx > canvas.width-30) {
  rect5.dx = -rect5.dx;
}
if (rect5.x + rect5.dx < 10) {
  rect5.dx = -rect5.dx;
}

/*
*
*
*
*
*
*
*
*
*/

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

</script>
</bodyUser>
</html>
