var main = function () {
	"use strict";
	
	var addCommentFromInputBox = function () {
//		note these vars would normally be camelCase, but followed convention in book w underscores
		var $new_comment = $("<p>"),
			comment_text = $(".comment-input input").val(),
			clear_comment = $(".comment-input input").val("");
		
		$new_comment.text(comment_text);
		
/*		Refactoring:
			note that you you could just add the value by adding to the string- as below; but adding a new var 'comment_text' 
			in this case, allows you to	reuse that element more easily, and cuts down on possible typos
		$new_comment.text($(".comment-input input").val());
*/		
		
/*		Chaining function calls:
 		See pg 104;jquery allows chaining function calls so you could do this as well instead of having two lines:
		this in 2 lines 
		var $new_comment = $("<p>");
		$new_comment.text($("this is a new comment));
		
		or this in one
		var $new_comment = $("<p>").text("this is a new comment");
*/
		
			if (comment_text !== "") {
				$new_comment.hide(); /* not required hide/fadeIn function see pg 109 */
				$(".comments").append($new_comment);
				$new_comment.fadeIn();
				clear_comment;
			}
	};	

// event listeners section	
	
// this allows button to be clicked with mouse			
	$(".comment-input button").on("click" , function (event) {
		addCommentFromInputBox();
	});
	
//	this allows user to hit enter key- note its the input box not the button
	$(".comment-input input").on("keypress" , function (event) {
		if (event.keyCode == 13){
			addCommentFromInputBox();
		}
	});
	
	$(".comment-input button").on("dblclick", function () {
		alert("Hey, you double clicked");
	});
	
};

$(document).ready(main);