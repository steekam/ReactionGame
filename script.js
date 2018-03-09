var start = new Date().getTime();
var timeRecord = new Array();

function makeShapeAppear(){

	var top = Math.random()*200 + "px";
	var left = Math.random()*1000 + "px";
	var width = ((Math.random()*290) + 45) + "px";


	if (Math.random() < 0.5) {
		document.getElementById('shape').style.borderRadius = "50%";
	}else{
		document.getElementById('shape').style.borderRadius = "0";
	}

	document.getElementById('shape').style.backgroundColor = getRandomColor();	
	document.getElementById('shape').style.width = width;
	document.getElementById('shape').style.height = width;
	document.getElementById('shape').style.top = top;
	document.getElementById('shape').style.left = left;
	document.getElementById('shape').style.display = "block";

	start = new Date().getTime();
	
}

function makeShapeDisappear(){
	document.getElementById('shape').style.display = "none";
}

function appearDelay(){

	setTimeout(makeShapeAppear, Math.random()*2000);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function calculateBestTime() {	

	return Math.min.apply(null, timeRecord);

}

appearDelay();


document.getElementById('shape').onclick = function () {
	makeShapeDisappear();

	var end = new Date().getTime();
	var timeTaken = (end - start)/1000;
	timeRecord.push(timeTaken);

	var bestTime = calculateBestTime();


	document.getElementById('timeTaken').innerHTML = timeTaken;
	document.getElementById('bestTime').innerHTML = bestTime;
	
	appearDelay();

}