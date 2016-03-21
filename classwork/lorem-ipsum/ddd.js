//d3.selectAll("p").style("color", "white");
var data = [4,8,15,16,23,42];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div"); //placeholder nodes for each item in data array
barEnter.style("width",function(d){
  return d*10+"px"
});
barEnter.text(function(d){
  return d;
});

// abbreviate js
//var data = [4,8,15,16,23,42];
/*
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width",function
*
