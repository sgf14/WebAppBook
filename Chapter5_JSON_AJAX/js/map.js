var main = function () {
	"use strict";
	// first example of map function
/*	var nums = [1, 2, 3, 4, 5];
	
	// we will now apply a map function which creates a new array derived from the original
	var squares = nums.map(function (num) {
		return num*num
	});
	console.log(squares);*/
	
	
	// second example of map function- capitalize first letters
	var names = ["emily", "mark", "bruce", "andrea", "pablo"];
	
	// we will now apply a map function which creates a new array derived from the original
	var capitalizedNames = names.map(function (name) {
		//get the first letter
		var firstLetter = name[0];
		//return uppercased first letter along with string startign at index 1 (2nd letter)
		return firstLetter.toUpperCase() + name.substring(1);
	});
	console.log(capitalizedNames);
};

$(document).ready(main);