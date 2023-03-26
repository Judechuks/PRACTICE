
function call () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 5;
	canvas.shadowColor = 'rgba(0, 0, 255, .5)';
	
	canvas.fillRect(300,120, 150,150);
	
	canvas.font = "bold 30px Tahoma";
	canvas.textAlign = "end";
	canvas.fillText("Text Shadow Effect", 300, 100);
	
}
window.addEventListener('load', call, false) ;
