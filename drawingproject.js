var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
//canvas.fillStyle = "pink";
//canvas.fillRect(80, 50, 100, 100);
// 1st#, left wall; 2nd#, up and down; 3rd#, length; 4th, width;
canvas.fillStyle = "DarkOrange";
canvas.fillRect(0,0,1000,800);
//rectangle pumpkin #1
//stem
canvas.fillStyle = "brown";
canvas.fillRect(175, 485, 30, 50);
//body
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
//mouth
canvas.arc(200,100,25,0,Math.PI,true);
//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(240,550);
canvas.lineTo(230,580);
canvas.lineTo(250,580);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(140,550);
canvas.lineTo(130,580);
canvas.lineTo(150,580);
canvas.fill();
//2nd pumpkin
//stem
canvas.fillStyle = "brown";
canvas.fillRect(455, 485, 30, 50);
//body
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
//hat
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(480,330);
canvas.lineTo(340,560);
canvas.lineTo(600,560);
canvas.fill();
//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(515,550);
canvas.lineTo(500,580);
canvas.lineTo(530,580);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(425,550);
canvas.lineTo(440,580);
canvas.lineTo(410,580);
canvas.fill();
//3rd pumpkin
//stem
canvas.fillStyle = "brown";
canvas.fillRect(735, 485, 30, 50);
//body
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(750,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(720,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(780,600,80,0,2*Math.PI,true);
canvas.fill();
//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(700,550);
canvas.lineTo(690,580);
canvas.lineTo(710,580);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(800,550);
canvas.lineTo(790,580);
canvas.lineTo(810,580);
canvas.fill();
