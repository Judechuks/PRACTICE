
function call() {
	var x = document.getElementById('canvas') ;
	canvas = x.getContext('2d');
	var pix = new Image();
	pix.src = "../Images/ngwa girls white.jpg";
	pix.addEventListener("load", function(){canvas.drawImage(pix,0,0, x.width, x.height)}, false); 
/*the x.width and x.height is the variable for canvas which gives the image the width and height of the canvas. And it is optional*/
}
window.addEventListener("load", call, false);