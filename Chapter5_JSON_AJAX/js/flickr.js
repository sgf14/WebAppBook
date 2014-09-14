var main = function () {
	"use strict";
	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
		
	$.getJSON(url,function(flickrResponse) {
		flickrResponse.items.forEach(function (photo) {
			//create new JQuery element to hold the image
			var $img = $("<img>").hide();  //note the hide part is only used in conjunction with teh fadeInn later; not required for functionality
			
			//set the attribute to the url contained in the response
			$img.attr("src", photo.media.m);
			//attach the img tag to the main
			$("main .photos").append($img);
			//this is just some aesthetics and formatting 
			$img.fadeIn();
			//console.log(photo.media.m);
		});
		
	});
};

$(document).ready(main);