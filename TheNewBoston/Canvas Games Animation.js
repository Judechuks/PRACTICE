
function call () {
	var x =document.getElementById('canvas') ;
	canvas = x.getContext('2d');

	window.addEventListener("mousemove", first, false);

}
function first(e) {
	canvas.clearRect(0,0,600,400);
	var xPosition = e.clientX;
	var yPosition = e.clientY; 
	canvas.fillRect(xPosition-50, yPosition-50, 100,100);
	/*the minus 50 on both positions are to make the cursor appear at the center of the square which is half of the size(100)*/
} 
window.addEventListener("load", call, false);
