function call () {
	mypic = document.getElementById('image');
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
	leftbox = document.getElementById('firstbox');
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("dragenter", dragenter, false);
	leftbox.addEventListener("dragleave", dragleave, false);
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
function endDrag(e){
pic = e.target;
pic.style.visibility = 'hidden';
} 
 function dragenter(e){
e.preventDefault();
leftbox.style.background ="#bbbbbb";
leftbox.style.border = "3px solid green";
} 
 function dragleave(e){
e.preventDefault();
leftbox.style.background ="white" ;
leftbox.style.border = "3px solid blue" ;
} 
window.addEventListener ("load", call, false) ;
