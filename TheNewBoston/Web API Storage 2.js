function call(){
	var button = document.getElementById('button');
	button.addEventListener("click", saveFunction, false);
	display();
} 
function saveFunction(){
	var one = document.getElementById('one').value;
	var two = document.getElementById('two').value;
	sessionStorage.setItem(one,two);
	display();
	
	document.getElementById('one').value = "" ;
	document.getElementById('two').value = "" ;
} 
function display(){
	var rightbox = document.getElementById('rightbox');
	rightbox.innerHTML = "";

	for (var x = 0; x <= sessionStorage.length; x++){
      var a = sessionStorage.key(x);
      var b = sessionStorage.getItem(a);
      rightbox.innerHTML += "Item: "+a+" ; Value: "+b+"<br />";
	} 
} 
window.addEventListener("load", call, false);
