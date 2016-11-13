
$(document).ready(function() {
	var totalTime = 0;
	$("#total").text("Total: "+totalTime); //display running total
	
	$("#addButton").click(function() {
		var time = $("#time").val();
		time = time || 0;
		if (!isNaN(totalTime) && !isNaN(time)) { //disregards empty or NaN input
			$("#warningmsg").removeClass("red-font");
			var mins = time.substr(0,2); //take first 2 digit as mins
			var secs = time.substr(2,4); //take last 2 digits as secs
			totalTime += (parseFloat(mins)*60) + parseFloat(secs); //parse mins and secs and add to running total
			var hours = Math.floor((totalTime/60)/60); //hour format
			var totalMins = Math.floor(totalTime/60); //mins format
			var totalSecs = (totalTime%60); //seconds format
			if (totalTime !== 0) {
				$("#results").prepend("<li class=list-group-item>"+time+"</li>") //creates a list item for every input
				$("#total").text("Total time: "+hours+" hours | "+totalMins+" mins and "+totalSecs+" seconds"); //updates running total w/ text
			}
		} else {
			$("#warningmsg").addClass("red-font"); //highlights input format info in red
		}
	});
	
	//resets running total, clears list
	$("#clearButton").click(function() {
		$("#results").empty();
		totalTime = 0;
		$("#time").val("");
		$("#total").text("Total: "+totalTime);
	});
});
