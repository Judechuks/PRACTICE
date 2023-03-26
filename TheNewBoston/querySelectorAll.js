function showMessage(){
	var list = document.querySelectorAll('#msg');
	for (var i=0; i<list.length; i++){
	list[i].onclick=Display;
	}
}
function Display(){
	alert('WELCOME!');
}
window.onload=showMessage;