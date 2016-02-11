/*
Yasmeen Roumie
SoftDev2 pd 3
HW01a -- Finding Your Path Around the Canvas
2016-02-11
*/
var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

// Square
ctx.beginPath(); // Start drawing
ctx.moveTo(169, 169); // Move cursor to
ctx.lineTo(369, 169); // Draw line from starting point to new point
ctx.lineTo(369, 369); // Draw line from last point to new point
ctx.lineTo(169, 369);
ctx.lineTo(169, 169);

ctx.strokeStyle = "#9b6e4b"; // Change stroke color to brown
ctx.lineWidth = 5; // Change
ctx.stroke(); // Color all the lines drawn
ctx.closePath(); // Stop first drawing

ctx.beginPath(); // Start a new drawing

// Triangle
ctx.moveTo(169, 169);
ctx.lineTo(269, 69);
ctx.lineTo(369, 169);

ctx.strokeStyle = "#0c7f7c"; // Change stroke color to turquoise
ctx.stroke();

ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";// Change fill color to black

// Decide what circle inputs are
radius = 40;
circlex = 269;
circley = 369;

ctx.arc(circlex, circley, radius, 0, Math.PI, true); // Draw half circle
ctx.fill(); // Fill circle with color
ctx.closePath();

ctx.font = "30px arial" // Change font style
ctx.fillText("welcome!", 210, 200) // Make the text
