var pic = document.getElementById("vimage");


var radius = 50;
var growing = true;

var change = function(e) {
  e.preventDefault();
  this.setAttribute("fill", "green");
/*
  if (growing){
    radius = radius + 1;
  } else {
  radius = radius - 1;
  }
  if (radius == (500/2)){
    growing = false;
  }
  else if (radius == 0){
    growing = true;
  }
  */
  //requestID = window.requestAnimationFrame(drawDot);
};

var drawDot = function(x, y)  {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", 250);
  c.setAttribute("cy", 250);
  c.setAttribute("r", radius);
  c.setAttribute("fill", "yellow");
  c.setAttribute("stroke", "black");
  c.addEventListener("click", change);
  pic.appendChild(c);
};

var clicked = function(e) {
  if (e.toElement == this) {
    drawDot(e.offsetX, e.offsetY);
  }
};

pic.addEventListener("click", clicked);

/*

var c = document.createElementNS(svgID, "circle")
window.setInterval(<fxn>, 16); --> intervalID= --> window.clearInterval(IntervalID);
document.getElementByTagName("circle")[0];
radius = parseInt(c.getAttribute("r"));
c.setAttribute("r", radius.toString());

*/
