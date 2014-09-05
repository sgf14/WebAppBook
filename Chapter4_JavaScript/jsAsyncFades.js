//see pg 119 of book
//second async demo to show how to manage sequencing of events in an async program

var main = function () {
	"use strict";
	
	//create and hide our content as a div- note you are instantiating the variable as a jQuery var
	var $content = $("<div>Hello World</div>").hide();
	var $moreContent = $("<div>Goodbye World</div>").hide();
	var $sayHello = function() {
		//note 2 different methods; for new html tag append has to include the return to use the output of the function
		var $helloText = $("<div>Hello!</div>");
		return $helloText;
		//when sending to console no return is needed, just list the function- as seen below appends
		//console.log("Hello!");
	}
	
	//append the content to the body element
	$("body").append($content);
	$("body").append($sayHello());
	//$sayHello();
	
	//slide the content down for 2 seconds
	//then execute a callback which contains the second content
	$content.slideDown(2000, function () {
		$("body").append($moreContent);
			//fade in that content; note the difference between slide and fade- both can be timed (2000) or untimed ()
			// slideDown vs slideUp
			//fadeIn vs fadeOut
		$moreContent.fadeIn(5000);	
	});
	
};

$(document).ready(main);