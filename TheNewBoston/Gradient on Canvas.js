
function call () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	var g = canvas.createLinearGradient(0,0, 100,100);
	g.addColorStop(0.0, "blue");
	g.addColorStop(0.5, "green");
	g.addColorStop(1.0, "red");
	canvas.fillStyle = g;
	canvas.fillRect(0,0, 100, 100);
}
window.addEventListener('load', call, false) ;
