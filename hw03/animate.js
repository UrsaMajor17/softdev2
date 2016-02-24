/*
Yasmeen Roumie
SoftDev2 pd 3
HW02 -- Animate
2016-02-22
*/

var c = document.getElementById("canvas"); // Canvas
var start = document.getElementById("start"); // Start button
var stop = document.getElementById("stop"); // Stop button
var ctx = canvas.getContext("2d"); // Stuff on canvas
var requestID;

// DVD LOGO
var logo = new Image();
logo.src = "logo_dvd.jpg";
var dvd = document.getElementById("dvd"); // DVD button


//var started = false;
function clearCanvas(event){
  event.preventDefault();
  ctx.closePath();
  ctx.clearRect(0, 0, c.width, c.height); // Clear rectangle that covers the canvas
}

var radius = 10;
var growing = true;
ctx.fillStyle = "red";

var drawDot = function() {
  //ctx.clearRect(0, 0, c.width, c.height);

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
  requestID = window.requestAnimationFrame(drawDot);
};

//drawDot();
//button.addEventListener("click", clearCanvas);
var stopIt = function() {
  window.cancelAnimationFrame(requestID);
  clearCanvas();
}

var drawDVD = function() {
  ctx.drawImage(logo, c.width/2, c.height/2, 100, 100);
}

start.addEventListener("click", drawDot);
stop.addEventListener("click", stopIt);
dvd.addEventListener("click", drawDVD);
