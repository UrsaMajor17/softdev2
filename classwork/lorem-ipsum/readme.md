selectors

like jquery, you can seelct DOM elements using d3 functions

d3.select(<IDENTIFIER>);
	Returns the first element that matches the given identifier

d3.selectAll(<IDENTIFIER>);

d3.select("body").style("color", "red")

d3.selectAll("p")
  .style("font-size",
  function(){
    return Math.floor(Math.random()*15)+"px"});