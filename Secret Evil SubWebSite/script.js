const mouseX = document.getElementById("mouseX");
const mouseY = document.getElementById("mouseY");

document.onmousemove = function(event){
    mouseX.textContent = event.clientX;
    mouseY.textContent = event.clientY;
}

function linkButtonFunc(){
    
}


// Uula's fuckery
const c = document.getElementById("game");
const ctx = c.getContext("2d");
const scoreCounter = document.getElementById("score");
const highCounter = document.getElementById("high");

const gravity = 1;
const playerwidth = 32;
const playerheight = 32;
const pipeGap = 40;
const pipeWidth = 64;

let playerpos = 128;
let playervel = 0;

let score = 0;
let high = localStorage.getItem("high");
highCounter.innerHTML = high;

class pipe {
constructor(height, position) {
  this.height = height;
  this.position = position;
}
move() {
  this.position -= 4;
}
} 

let pipes = [new pipe(128, 128 - 0.5 * pipeWidth), new pipe(128, 256)];


/* collision checking is my favourite (no) */
function checkCollide(x1, y1, w1, h1, x2, y2, w2, h2) {
if (x1 + w1 < x2){
  return false;
}
if (x2 + w2 < x1){
  return false;
}
if (y1 + h1 < y2){
  return false;
}
if (y2 + h2 < y1){
  return false;
}
return true;
}

function resetGame() {
if (score == high){
localStorage.setItem("high", JSON.stringify(score));
}
score = 0;
scoreCounter.style.color = "red";
}

function drawGame(){
/* clear canvas */
ctx.fillStyle = "cyan";
ctx.fillRect(0, 0, 256, 256);

/* draw player */
ctx.fillStyle = "yellow";
ctx.fillRect(16, playerpos, playerwidth, playerheight);

/* draw ground */
ctx.fillStyle = "green";
ctx.fillRect(0, 240, 256, 16);

/* draw pipes */
ctx.fillStyle = "lime";
pipes.forEach((pipe) => {
  ctx.fillRect(pipe.position, 0, pipeWidth, pipe.height - pipeGap);
  ctx.fillRect(pipe.position, pipe.height + pipeGap, pipeWidth, 240 - pipe.height - pipeGap);
});
}

function jump(){
playervel = -8;
}

setInterval( () => {
/* apply gravity and movement */
playervel += gravity;
playerpos += playervel;

/* collide with ground */
if (playerpos + playerheight > 240) {
  playervel = 0;
  playerpos = 240 - playerheight;
  resetGame();
}

/* don't let the player ecape */
if (playerpos < 0 - playerheight) {
  playervel = 0;
  playerpos = 0 - playerheight;
}

/* move pipes and check collisions and stuff */
pipes.forEach((pipe) => {
  pipe.move();
  if ( pipe.position + pipeWidth < 0 ){
    pipe.position = 256;
    pipe.height = Math.random() * 100 + pipeGap;
    score++;
    highCounter.style.color = "black";
    scoreCounter.style.color = "black";
    if ( score > high ){
      high = score;
      highCounter.innerHTML = high;
      highCounter.style.color = "cyan";
      scoreCounter.style.color = "cyan";
    }
  }
  if (checkCollide(16, playerpos, playerwidth, playerheight, pipe.position, 0, pipeWidth, pipe.height - pipeGap )){
    resetGame();
  }
  if (checkCollide(16, playerpos, playerwidth, playerheight, pipe.position, pipe.height + pipeGap, pipeWidth, 240 - pipe.height - pipeGap)){
    resetGame();
  }

});

scoreCounter.innerHTML = score;

drawGame();
},
40);
//

