$(document).ready(function() {
	var array = [{
		name: "Bob", 
		occupation: "programmer", 
		awesomeIndex: 7, 
	}, { 
		name: "Alice", 
		occupation: "programmer", 
		awesomeIndex: 9, 
	}, { 
		name: "Zaphod", 
		occupation: "President of the Galaxy"
	}]

	function init(){
	    document.getElementById("javascriptOnly").onclick = function(){avgJavascriptOnly(array);};
	    $("#lodashJquery").click(function(){avgLodashJquery(array);});
	    $("#clear").click(function(){$("#awesome-index").text("");});
	}
	window.onload=init;

	//Javascript only function
	function avgJavascriptOnly(array) {
		var total = 0;
		var average = 0;
		for (var i = 0; i < array.length; i++) {
			if ("awesomeIndex" in array[i]){
				total += array[i].awesomeIndex;
				average = total / (i + 1);
			}
		}
		document.getElementById("awesome-index").innerHTML = average;
	}

	//Lodash/Jquery function
	function avgLodashJquery(array) {
		var total = 0;
		var average = 0;
		_.forEach(array, function(obj, key) {
			if (_.has(obj, "awesomeIndex")) {
				total += obj.awesomeIndex;
				average = total / (key + 1);
			}		
		});
		$("#awesome-index").text(average);
	}
});
