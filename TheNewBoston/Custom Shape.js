
function call () {
var x = document.getElementById('canvas');
canvas = x.getContext('2d');
canvas.beginPath() ;
canvas.moveTo(30,30);
canvas.lineTo(70,250);
canvas.lineTo(300,200);
canvas.closePath() ;
canvas.stroke() ;
}
window.addEventListener('load', call, false) ;
