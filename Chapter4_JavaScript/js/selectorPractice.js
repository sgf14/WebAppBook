var main = function () {
	//pg 142 of book
	"use strict";

//	$("*").css("color","red");
//	$("h1").css("color","red");
	
	//question 1- apply selector to only one of the classes
//	$(".important").css("background-color","green");
	
	//question 2- apply selector only to 3rd div paragraph
//	$(".relevant p:nth-child(1)").css("color","red");
	
	//question 3- apply selector only to 3rd div paragraph
//	$(".relevant p:nth-child(3)").css("color","blue");
	
	//question 4- apply to all <p> tags
//	$("p").css("color","yellow");
	
	//question 5- apply to div class
//	$(".relevant").css("font-size","200%");
	
	//question 6 -use an array  and forEach to apply selectors only to chosen elements
		var $select = [1,3,4];
		$select.forEach (function (element) {
			$(".relevant p:nth-child(" + element + ")").css("color","yellow");
		});		
	
	//question 7- select 7th relevant paragraph- note this is not an array so it starts with 1 not 0; (6) is the wrong paragraph
//	$(".relevant p:nth-child(7)").css("border","3px solid black");
	
	//question 8- :gt = greater than; jquery selector; note this is not the nth-child function and is a zero based not 1 based(jquery vs css)
//	$(".relevant p:gt(3)").css("color","orange");
	
	//question 9- :not ; jquery selector; not this is not the nth-child and is a zero based array
//	$(".relevant p:not(.a)").css("background-color","red");
};
$(document).ready(main);