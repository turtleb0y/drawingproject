var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
//canvas.fillStyle = "pink";
//canvas.fillRect(80, 50, 100, 100);
// 1st#, left wall; 2nd#, up and down; 3rd#, length; 4th, width;
//rectangle pumpkin #1
canvas.fillStyle = "brown";
canvas.fillRect(175, 485, 30, 50);

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(190,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(160,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(220,600,80,0,2*Math.PI,true);
canvas.fill();
//2nd pumpkin
canvas.fillStyle = "brown";
canvas.fillRect(455, 485, 30, 50);

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(470,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(440,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(500,600,80,0,2*Math.PI,true);
canvas.fill();
