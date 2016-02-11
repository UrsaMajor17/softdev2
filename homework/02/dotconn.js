/*
Yasmeen Roumie
SoftDev2 pd 3
HW02 -- Connect the Dots
2016-02-12
*/
var canvas = document.getElementById("playground");
var clear = document.getElementById("clear");
var ctx = canvas.getContext("2d");

clear.addEventListener("click", clearCanvas)
canvas.addEventListener("click", draw);

function clearCanvas(event){
  // Clear the canvas
  event.preventDefault();
  ctx.clearRect(a,b,c,d);
}

function draw(event){
  // Draw dots
  event.preventDefault();
  var x = event.clientX;
  var y = event.clientY;
  ctx.beginPath();
  ctx.arc(x, y, 10, Math.PI*2, true);
  ctx.fillStyle = "red"; // Set fill to red
  ctx.fill();
  ctx.closePath();
}
