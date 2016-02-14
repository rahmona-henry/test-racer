$(document).ready(function() {

var canvas = document.getElementById("canvas"),
context = canvas.getContext("2d");

var width = 1000, height = 500, speed = 5;


var keys = [];



var player1 = {
x: Math.random() * (width - 20),
y: Math.random() * (height - 20),
width: 20,
height: 20

};

var player2 = {
x: Math.random() * (width - 20),
y: Math.random() * (height - 20),
width: 20,
height: 20
};

var finishLine = {
x: Math.random() * (width - 20),
y: Math.random() * (height - 100),
width:20,
height:100
};

var score1 = 0;
var score2 = 0;
var winScore = 3;

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
}, false);


function game () {

     update ();
     render ();

    
};


function update () {

    if(keys[38]) player1.y-=speed;
    if(keys[40]) player1.y+=speed;
    if(keys[37]) player1.x-=speed;
    if(keys[39]) player1.x+=speed;

    if(player1.x <0)player1.x = 0;
    if(player1.y <0)player1.y = 0;
    if(player1.x >=width - player1.width) player1.x = width - player1.width;
    if(player1.y >=height - player1.height) player1.y = height - player1.height;


    if(keys[87]) player2.y-=speed;
    if(keys[83]) player2.y+=speed;
    if(keys[65]) player2.x-=speed;
    if(keys[68]) player2.x+=speed;

    if(player2.x <0)player2.x = 0;
    if(player2.y <0)player2.y = 0;
    if(player2.x >=width - player2.width) player2.x = width - player2.width;
    if(player2.y >=height - player2.height) player2.y = height - player2.height;

    if(collision(player1, finishLine))process1();
    if(collision(player2, finishLine))process2();

}
  function render () {
context.clearRect(0,0,1000,500);



context.fillStyle = "blue";
context.fillRect(player1.x,player1.y,player1.width,player1.height);

context.fillStyle = "red";
context.fillRect(player2.x,player2.y,player2.width,player2.height);

context.fillStyle = "black";
context.fillRect(finishLine.x,finishLine.y,finishLine.width,finishLine.height); 
   
context.fillStyle = "blue";
context.font = "bold 30px helvetica" 
context.fillText(score1, 30, 20); 

context.fillStyle = "red";
context.font = "bold 30px helvetica"  
context.fillText(score2, 900, 20);  
                                  

}



function process1 () {


     score1 ++;
    finishLine.x = Math.random() * (width - 20);
    finishLine.y = Math.random() * (height - 100);
}
    





function process2 () {


score2 ++;
finishLine.x = Math.random() * (width - 20);
finishLine.y = Math.random() * (height - 100);

}




function collision (player1, finishLine) {

return! (player1.x > finishLine.x + finishLine.width ||
    player1.x + player1.width < finishLine.x ||
    player1.y > finishLine.y + finishLine.height ||
    player1.y + player1.height < finishLine.y);
}

function collision (player2, finishLine) {
return! (player2.x > finishLine.x + finishLine.width ||
    player2.x + player2.width < finishLine.x ||
    player2.y > finishLine.y + finishLine.height ||
    player2.y + player2.height < finishLine.y);

}

setInterval (function (){
game ();

},1000/30)

function gameOver() {
       window.location.reload(true);
    }


});