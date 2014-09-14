var toDoObjects = [
		{
			"description" : "Get Groceries",
			"tags" : ["shopping" , "chores"]
		},
		{
			"description" : "Make up to-dos",
			"tags" : ["writing" , "work"]
		},
		{
			"description" : "Prep for Monday's class",
			"tags" : ["work" , "teaching"]
		},
		{
			"description" : "Answer emails",
			"tags" : ["work" ]
		},
		{
			"description" : "Take Gracie to the park",
			"tags" : ["chores" , "pets"]
		},
		{
			"description" : "Finish Writing this book",
			"tags" : ["writing" , "work"]
		}
	]

// for conversion you want the 'descriptions' to be turned into 'toDos'  and 'tags' to be turned into 'names' 
var main = function () {
	"use strict";
	
var organizeByTags = function () {
	//create empty tags array
	var tags = [];

	//iterate over all toDos
	toDoObjects.forEach(function (toDo) {
		
		//iterate over each tag within todo; note you cant do this as toDoObjects.tags.forEach; 2nd level needs to be a sep loop
		toDo.tags.forEach(function (tag) {
			//make sure tag is not already in the array (indexOf is a default property of any array, return of -1 means tag is not in array
			//any other positive # gives its position in array, in this case we dont want any of those, they would be repeats
			if (tags.indexOf(tag) === -1) {
				tags.push(tag);
			}
		});
	});
	
	var tagObjects = tags.map(function (tag) {
		var toDosWithTag = [];
		toDoObjects.forEach(function (toDo) {
			//check to make sure the result is of indexOf is not equal to -1
			if(toDo.tags.indexOf(tag) !== -1) {
				toDosWithTag.push(toDo.description);
			}
		});
		//we map each tag to an object that contains the name of the tag and an array
		return { "name" : tag , "toDos" : toDosWithTag };
	});
	console.log(tagObjects);
};
//this calls the function with the object
organizeByTags(toDoObjects);
};

$(document).ready(main);