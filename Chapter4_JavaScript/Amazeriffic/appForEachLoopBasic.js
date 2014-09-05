var main = function () {
	"use strict";
		
	//this produces the same results as app.js but refactored even more; it uses Jquery array of DOM 
	//elements via forEach function. it makes it easier to add more tabs later
	//see pg 137 for note on the outer $() function call
		$(".tabs a span").toArray().forEach(function (element) {
			$(element).on("click", function() {
					$(".tabs a span").removeClass("active");
					$(element).addClass("active");
					$("main .content").empty();
					return false;
			});
		});
	
};

$(document).ready(main);