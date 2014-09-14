var main = function () {
	"use strict";
	
	$.getJSON("cards/aceOfSpades.json" ,function (card) {
		var $cardParagraph = $("<p>");
		
		$cardParagraph.text(card.rank + " of " + card.suit);
		
		$("main").append($cardParagraph);
		//console.log(card);
	});
	
	$.getJSON("cards/hand.json" ,function (hand) {
		var $list = $("<ul>");  //note the tag must be instantiated as a JQuery variable- in parentheses and w/ $
		
		hand.forEach(function (card) {
			var $card = $("<li>");
			$card.text(card.rank + " of " + card.suit);
			$list.append($card);
		});		
		
		$("main").append($list);
	});
	
};

$(document).ready(main);

