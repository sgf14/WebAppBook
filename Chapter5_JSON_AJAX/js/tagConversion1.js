// for conversion you want the 'descriptions' to be turned into 'toDos'  and 'tags' to be turned into 'names' 

var main = function (toDoObjects) {
	"use strict";
	
	var organizeByTags = toDoObjects.map(function (toDo) {
		// we'll just return the description of this toDoObject
		return toDo.tags
	});
	
	console.log(organizeByTags);
	
};

$(document).ready(function () {
	$.getJSON("toDos.json", function (toDoObjects) {
		// call main w to-dos as object
		main(toDoObjects);
	});
});