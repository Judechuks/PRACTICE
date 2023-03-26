function call() {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.strokeStyle="red";
	canvas.fillStyle="blue";
	canvas.strokeRect(20,20, 100, 200);
	canvas.fillRect(130,20, 100, 200);
	canvas.clearRect(140,30, 50, 90);
}
window.addEventListener("load", call, false);