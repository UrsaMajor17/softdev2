/*
Yasmeen Roumie
SoftDev2 pd 3
HW01d -- Dot, Dot, Dot
2016-02-12
*/
var canvas = document.getElementById("playground"); // Canvas
var button = document.getElementById("clear"); // Clear button
var ctx = canvas.getContext("2d"); // Stuff on canvas

// Keep track of last x,y coordinates
var previousX = -1;
var previousY = -1;

// Clear the canvas
function clearCanvas(event){
  event.preventDefault();
  ctx.clearRect(0,0,600,600); // Clear rectangle that covers the canvas
  previousX = -1; // Reset last x coordinate
  previousY = -1; // Reset last y coordinate
}

// Draw dots
function draw(event){
  // Draw dots
  event.preventDefault();

  // If there was a previous dot, make a line connecting the new one to the old one
  if (previousX != -1){
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.lineTo(previousX, previousY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
  }

  ctx.beginPath();
  // Draw a dot where your mouse is
  ctx.arc(event.offsetX, event.offsetY, 10, 0, Math.PI*2, true);
  ctx.fillStyle = "red"; // Set fill to red
  ctx.fill();
  ctx.closePath();

  // Set last coordinates to where the circle you just drew is
  previousX = event.offsetX;
  previousY = event.offsetY;
}


// Add event listeners to button and canvas
button.addEventListener("click", clearCanvas);
canvas.addEventListener("click", draw);
