function call() {
	mypic = document.getElementById('image');
	mypic.addEventListener("dragstart", startDrag, false);
	leftbox = document.getElementById('firstbox');
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped, false);
}
function startDrag(e){
	var code = '<img id="image" src="../Images/ngwa girls white.jpg" width="300px" height="300px"/>';
	e.dataTransfer.setData('Text', code);
} 
function dropped(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
} 
window.addEventListener ("load", call, false) ;
