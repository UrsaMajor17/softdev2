/*
Yasmeen Roumie
SoftDev2 pd 3
HW02 -- Dot, Dot, Dot
2016-02-22
*/

var c = document.getElementById("canvas"); // Canvas
var button = document.getElementById("toggle"); // Clear button
var clear = document.getElementById("clear"); // Clear button
var ctx = canvas.getContext("2d"); // Stuff on canvas

function clearCanvas(event){
  event.preventDefault();
  ctx.closePath();
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height); // Clear rectangle that covers the canvas
}

var radius = 10;
var growing = true;
ctx.fillStyle = "red";

var drawDot = function() {
  ctx.clearRect(0, 0, c.width, c.height);

  if (growing){
    radius = radius + 1;
  } else {
  radius = radius - 1;
  }
  if (radius == (c.width/2)){
    growing = false;
  }
  else if (radius == 0){
    growing = true;
  }

  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
  window.requestAnimationFrame(drawDot);
};

//drawDot();
//button.addEventListener("click", clearCanvas);

button.addEventListener("click", drawDot);
clear.addEventListener("click", clearCanvas);
