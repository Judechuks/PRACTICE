function call(){
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
    canvas.strokeStyle="red";
	canvas.fillStyle="blue";
    canvas.beginPath();     /* (x-axis,y-axis) */
    canvas.moveTo(20,100); 
    canvas.lineTo(100,80);
    canvas.lineTo(120,20);
    canvas.lineTo(140,80);
    canvas.lineTo(220,100);
    canvas.lineTo(140,120);
    canvas.lineTo(120,180);
    canvas.lineTo(100,120);
    canvas.closePath();
    canvas.stroke();
    canvas.fill();
}
window.addEventListener('load', call, false);