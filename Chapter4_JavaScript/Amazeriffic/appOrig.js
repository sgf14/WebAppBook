var main = function () {
	"use strict";
	var tabNum = 0;
	
	var tabSetup = function (tabNum) {
		//construct the selector based on tab number	
		$(".tabs a:nth-child(" + tabNum + ")").on("click", function() {
		//make all the tabs inactive
			$(".tabs span").removeClass("active");
		
		//make the first tab active
			$(".tabs a:nth-child(" + tabNum +") span").addClass("active");
		
		//empty the main content so we can recreate it
			$("main .content").empty();
		
		//return false so we dont follow the link
			return false;
	});
	};
	
	tabSetup(1);
	tabSetup(2);
	tabSetup(3);
};

$(document).ready(main);