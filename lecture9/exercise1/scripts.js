var start = new Date();

function stopTime(){
	
var stop = new Date();
	
var stopMilli = stop.getTime();

var startMilli = start.getTime();
	
var difference = stopMilli - startMilli;
	
difference = difference / 600;
	
alert("It has been: "+difference+" seconds");
}