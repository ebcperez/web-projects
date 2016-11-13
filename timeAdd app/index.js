
$(document).ready(function() {
	var totalTime = 0;
	$("#total").text("Total: "+totalTime);
	
	$("#addButton").click(function() {
		var time = $("#time").val();
		time = time || 0;
		if (!isNaN(totalTime) && !isNaN(time)) {
			$("#warningmsg").removeClass("red-font");
			var mins = time.substr(0,2);
			var secs = time.substr(2,4);
			totalTime += (parseFloat(mins)*60) + parseFloat(secs);
			var hours = Math.floor((totalTime/60)/60);
			var totalMins = Math.floor(totalTime/60);
			var totalSecs = (totalTime%60);
			if (totalTime !== 0) {
				$("#results").prepend("<li class=list-group-item>"+time+"</li>")
				$("#total").text("Total time: "+hours+" hours | "+totalMins+" mins and "+totalSecs+" seconds");
			}
		} else {
			$("#warningmsg").addClass("red-font");
		}
	});
	
	$("#clearButton").click(function() {
		$("#results").empty();
		totalTime = 0;
		$("#time").val("");
		$("#total").text("Total: "+totalTime);
	});
});