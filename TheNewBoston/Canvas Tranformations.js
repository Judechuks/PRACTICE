
function call () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.font = "bold 30px Tahoma";
	canvas.textAlign = "start";
	canvas.fillText("Transformations", 10, 30);
	
	canvas.translate(100, 150);
	canvas.fillText("After Translate", 0, 0);
	
	canvas.rotate(1); /*parameter value is in radian*/
	canvas.fillText("After Rotate", 0, 0);
	
	canvas.scale(1.5, 5);/*stretch by x and grow height by y*/
	canvas.fillText("After Scale", 0, 22);
}
window.addEventListener('load', call, false) ;
