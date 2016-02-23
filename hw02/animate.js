var c = document.getElementById("canvas"); // Canvas
var button = document.getElementById("clear"); // Clear button
var ctx = canvas.getContext("2d"); // Stuff on canvas

var radius = 0;
var growing = true;
var drawDot = function(){
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
