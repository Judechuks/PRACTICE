function call(){
	var button = document.getElementById('button');
	button.addEventListener ("click", saveFunction, false);
} 
function saveFunction(){
	var one = document.getElementById('one').value;
	var two = document.getElementById('two').value;
	sessionStorage.setItem(one, two);

	display(one);
} 
function display(one) {
	var rightbox = document.getElementById('rightbox');
	var two = sessionStorage.getItem(one);
	rightbox.innerHTML = "Item: " +one+"<br />Value: "+two;
} 
window.addEventListener ("load", call, false);
