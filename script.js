// пример 1
var MyCanvas1 = document.getElementById("MyCanvas1");
 var ctx1 = MyCanvas1.getContext('2d');
 MyCanvas1.height = 480;
 MyCanvas1.width = 640;
 ctx1.beginPath();
 ctx1.arc(80, 100, 56, 3/4*Math.PI, 1/4*Math.PI, true);
 ctx1.fill(); 
 ctx1.moveTo(40, 140);
 ctx1.lineTo(20, 40);
 ctx1.lineTo(60, 100);
 ctx1.lineTo(80, 20);
 ctx1.lineTo(100, 100);
 ctx1.lineTo(140, 40);
 ctx1.lineTo(120, 140);
 ctx1.stroke(); 


//   задание 2
var MyCanvas2 = document.getElementById("MyCanvas2");
 var ctx2 = MyCanvas2.getContext('2d');
 MyCanvas2.height = 480;
 MyCanvas2.width = 640;
 ctx2.beginPath();
 ctx2.moveTo(10, 15);
 ctx2.bezierCurveTo(75, 55, 175, 20, 250, 15);
 ctx2.moveTo(10, 15);
 ctx2.quadraticCurveTo(100, 100, 250, 15);
 ctx2.stroke();

  //задание 3
var MyCanvas3 = document.getElementById("MyCanvas3");
var ctx3 = MyCanvas3.getContext("2d");
ctx3.fillStyle = "red";
ctx3.fillRect (0,0,150,75)


// задание 4
var MyCanvas4 = document.getElementById("MyCanvas4");
var ctx4 = MyCanvas4.getContext("2d");
ctx4.moveTo(10,10);
ctx4.lineTo(150,50);
ctx4.lineTo(10,50);
ctx4.stroke();


// задание 5
var MyCanvas5 = document.getElementById("MyCanvas5");
var ctx5 = MyCanvas5.getContext("2d");
ctx5.fillStyle = "red";
ctx5.beginPath();
ctx5.arc(70,18,15,0,Math.PI*2,true);
ctx5.closePath();
ctx5.fill();

// задание 6
var MyCanvas6 = document.getElementById("MyCanvas6");
var ctx6 = MyCanvas6.getContext("2d");
var grd = ctx6.createLinearGradient(0,0,175,50);
grd.addColorStop(0,"#FF0000")
grd.addColorStop(1,"#00FF00");
ctx6.fillStyle=grd;
ctx6.fillRect(0,0,175,50)


// своё задание 
var MyCanvas6 = document.getElementById("MyCanvas6");
var kuzovNiz = MyCanvas6.getContext("2d");
kuzovNiz.moveTo(10, 100);
kuzovNiz.lineTo(50,100);
kuzovNiz.lineTo(50,75);
kuzovNiz.lineTo(75,75);
kuzovNiz.lineTo(75,50);
kuzovNiz.lineTo(200,50);
kuzovNiz.lineTo(200,125);
kuzovNiz.lineTo(75,125);
kuzovNiz.lineTo(75,75);
kuzovNiz.moveTo(10, 100);
kuzovNiz.lineTo(5,125);
kuzovNiz.lineTo(75,125);
kuzovNiz.moveTo(20,125);
kuzovNiz.arc(20, 125, 10, 0, 2 * Math.PI)
kuzovNiz.moveTo(170,125);
kuzovNiz.arc(170, 125, 10, 0, 2 * Math.PI)
kuzovNiz.stroke(); 




