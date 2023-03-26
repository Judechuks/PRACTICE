
function callup() {
	barSize = 600;
	vid = document.getElementById('vid' ) ;
	playButton= document.getElementById('playButton' ) ;
	bar = document.getElementById('progressContainer' ) ;
	progressBar= document.getElementById('progressBar') ;

	playButton.addEventListener('click', playOrPause, false) ;
	bar.addEventListener('click', clickedBar, false) ;
}

function playOrPause () {
	if(!vid.paused && !vid.ended) {
	vid.pause();
	playButton.innerHTML='Play' ;
	window.clearInterval(updateBar) ;
}  
else {
	vid.play();
	playButton.innerHTML='Pause';
	updateBar = setInterval(update, 500) ;
	} 
}

function update() {
	if (!vid.ended) {
	var progressSize = parseInt(vid.currentTime*barSize/vid.duration) ;
	progressBar.style.width = progressSize+'px' ;
	} 
	else {
	progressBar.style.width = '0px' ;
	playButton.innerHTML = 'Play' ;
	window.clearInterval(updateBar) ;
	} 
} 

function clickedBar(e) {
	if (!vid.paused && !vid.ended) {
	var mouseOfX = e.pageX-bar.offsetLeft;
	var newStartTime = mouseOfX*vid.duration/barSize;
	vid.currentTime = newStartTime;
	progressBar.style.width = mouseOfX+'px' ;
	} 
}

window.addEventListener("load", callup, false);
/*or you can use this code *window.onload=callup;*/
