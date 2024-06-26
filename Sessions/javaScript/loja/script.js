
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const bgGame = new Image();
bgGame.src = "images/images/background.png";
canvas.appendChild(bgGame);

let bgReady = false;
bgGame.onload = function(){
    ctx.drawImage(bgGame, 0, 0)
    bgReady = true;
}
let points = 0;
let ticTimer = 15;
let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;
mouseObj.x = Math.floor(Math.random()*460);
mouseObj.y = 30 + Math.floor(Math.random()*396);

let catObj = {};
catObj.width = 109;
catObj.height = 128;
catObj.x = 0;
catObj.y = 0;
catObj.speed = 5;

let catReady = false;
const catImg = new Image();
catImg.src = "images/images/cat.png";
catImg.onload = function(){
   catReady = true;
}

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = "images/images/mouse.png";
mouseImg.onload = function(){
    mouseReady = true;
}

function render (){
if(bgReady) {ctx.drawImage(bgGame, 0, 0)}
if(catReady) {ctx.drawImage(catImg, catObj.x, catObj.y);}
if(mouseReady) {ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y)}

if(catObj.x > 500) {catObj.x = -50;}
if(catObj.x < -51) {catObj.x = 499;}
if(catObj.y > 500) {catObj.y = -50;}
if(catObj.y < -51) {catObj.y = -499;}

if(
    (catObj.x + catObj.width) > mouseObj.x
    && (catObj.y + catObj.height) >mouseObj.y
    && (catObj.x+15) < (mouseObj.x + mouseObj.width)
    &&(catObj.y+10) < (mouseObj.y +mouseObj.height)
) {
    mousePos();
    if(ticTimer != 0) { points++;}
}
 if(ticTimer == 0) {
    mouseObj.x =3000;
    if(points >= 10) {
        ctx.fillStyle = "green";
        ctx.fillText("You Win", 220, 200)
    }
    else{
        ctx.fillStyle = "red";
        ctx.fillText("You Lose", 220, 200)
    }
}
ctx.font = "20px Georgia";
ctx.fillStyle = "white";
ctx.fillText("Points: " + points, 10, 25)

ctx.font = "20px Georgia";
ctx.fillStyle = "white";
ctx.fillText("Points: "+points, 10, 25)

ctx.fillText("Timer: "+ticTimer, 420, 25)
}


addEventListener("keydown", function(e){

    if(e.key == 'ArrowRight') {
        catObj.x += catObj.speed
    }

    if(e.key == 'ArrowLeft') {
        catObj.x -= catObj.speed
    }

    if(e.key == 'ArrowDown') {
        catObj.y += catObj.speed
    }

    if(e.key == 'ArrowUp') {
        catObj.y -= catObj.speed
    }
});

function timer (){
   if(ticTimer == 0){
    clearInterval(timeRuner);
   }

   else{ticTimer--}

}
function mousePos() {
    mouseObj.x = Math.floor(Math.random()*460);
    mouseObj.y = 30 + Math.floor(Math.random()*396);
}
const rederTime = setInterval(render,1);
const timeRuner = setInterval(timer, 1000);
