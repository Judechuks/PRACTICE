
function call () {
var x = document.getElementById('canvas');
canvas = x.getContext('2d');
canvas.beginPath() ;
canvas.moveTo(40,40);
canvas.lineTo(60,50);
canvas.lineTo(70,30);
canvas.lineTo(80,50);
canvas.lineTo(100,40);
canvas.lineTo(90,60);
canvas.lineTo(110,70);
canvas.lineTo(90,80);
canvas.lineTo(100,100);
canvas.lineTo(80,90);
canvas.lineTo(70,110);
canvas.lineTo(60,90);
canvas.lineTo(40,100);
canvas.lineTo(50,80);
canvas.lineTo(30,70);
canvas.lineTo(50,60);
canvas.closePath() ;
canvas.stroke() ;
}
window.addEventListener('load', call, false) ;
