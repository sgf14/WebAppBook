var main = function () {
	"use strict";
	
	var $num;
	
	for ($num = 1; $num <= 100; $num++) {
			//display in a line (horizontal)
/*		if ($num%3 === 0 && $num%5 === 0) {
			var $fizzbuzz = "fizzbuzz";
			$("main").append(($fizzbuzz) + ",");
		} else if ($num%3 === 0){
			var $fizz = "fizz";
			$("main").append(($fizz) + ",");
		} else if ($num%5 === 0){
			var $buzz = "buzz";
			$("main").append(($buzz) + ",");
		} else {
			$("main").append(($num) + ",");
		}*/
		
		//display with div tags (vertical)
		var $content = $("<div>");
		
		if ($num%3 === 0 && $num%5 === 0) {
			var $fizzbuzz = "fizzbuzz";
			$content.append($fizzbuzz);
		} else if ($num%3 === 0){
			var $fizz = "fizz";
			$content.append($fizz);
		} else if ($num%5 === 0){
			var $buzz = "buzz";
			$content.append($buzz);
		} else {
			$content.append($num);
		}
		$("main").append($content);
	//	console.log($num);
		
	}
};

// switch statement is not an option in this situation because there is more than one expression to evaluate
// as example switch expression format:

/*		switch (expression = value) {
	case value === 1:
		command;
		break;
	case value === 2:
		command;
		break;
	default:
		command;
}*/

$(document).ready(main);