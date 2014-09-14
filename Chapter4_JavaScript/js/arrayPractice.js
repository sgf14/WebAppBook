var main = function () {
	"use strict";
//example 0-a;	sum an array list - for loop
/*	var sum = function (nums) {
		var sumSoFar = 0,
			i;
		// using for loop
		for (i = 0; i < nums.length; i++) {
			sumSoFar = sumSoFar + nums[i];
		}
		return sumSoFar;
		};
console.log(sum([1,2,3,5,7,11,13,17,19]));*/

//example 0-b;	sum an array list- forEach loop
/*var sum = function (nums) {
	var sumSoFar = 0;
	//forEach loop (preferred- eliminates need for i variable)
	nums.forEach(function (value) {
		sumSoFar = sumSoFar  + value;
	});
	return sumSoFar;
	};
console.log(sum([1,2,3,5,7,11,13,17]));*/

//example 0-c;	sum an array list- w/ reduce method
/*var sum = function (nums) {
	//this method shortens code even more vs forEach. Seems a little abstract, need to get used to this a little
	return nums.reduce(function (sumSoFar , value) {
		return sumSoFar  + value;
	}, 0);
	};
console.log(sum([1,2,3,5,7,11,13,17]));*/

/*//example 1;	average an array list
var sum = function (nums) {
	var sumSoFar = 0;
	nums.forEach(function (value) {
		sumSoFar = sumSoFar  + value;
	});
	var average = sumSoFar / nums.length;
	return average;
	};
console.log(sum([1,2,3,5,7,11,13,17]));*/

//example 2;	largest number in an array list
/*var sum = function (nums) {
	var largest = 0;
	nums.forEach(function (value) {
		if (value > largest) {
			largest = value;
		}
	});
	return largest;
	};
console.log(sum([1,2,43,5,7,11,13,17]));*/

//example 3;	true if there is an even number in the array list
/*var sum = function (nums) {
	var even = "False";
	nums.forEach(function (value) {
		if (value%2 === 0) {
			even = "True";
		}
	});
	return even;
	};
console.log(sum([1,2,43,5,7,11,13,34,17]));*/

//example 4;	true if ALL the numbers in the array list are even.  break command seems like more concise option 
// but looked on MDN couldnt make it work out- label issue. MDN recommends not using label in code.  PHP has break also &does not require label
/*var sum = function (nums) {
	var even = "False",
		i;
	for (i = 0; i < nums.length; i++) {
		if (nums[i]%2 != 0) {
			i = nums.length;
			even = "False";
		} else if (nums[i]%2 === 0){
			even = "True";
		}
	}
	return even;
	};
console.log(sum([1,2,4,10,12,14]));*/

//example 5;	function accepts array and string.  returns true if string is in array, false otherwise
/*var stringDetector = function (words,string) {
var detected = "False";
words.forEach(function (value) {
	if (value == string) {
		detected= "True";
	}
});
return detected;
};
console.log(stringDetector(["hello","world","hellow","fake"],"fake"));*/

//example 6;	function accepts array and string.  returns true if string is in array twice, false otherwise
/*var arrayContainsTwo = function (words,string) {
var detected = "False",
	c = 0;
words.forEach(function (value) {
	if (value == string) {
		detected = "True";
		c++;
		
	}
});
if (c == 2) {
	return detected;
} else {
	return "false";
}

};
console.log(arrayContainsTwo(["a","b","c","b"],"c"));*/

//example 6a;	function accepts array and string.  returns true if string is in array, x number of times, false otherwise
/*var arrayContainsNTimes = function (words,string,n) {
var detected = "False",
	c = 0;
words.forEach(function (value) {
	if (value == string) {
		detected = "True";
		c++;
		
	}
});
if (c == n) {
	return detected;
} else {
	return "false";
}

};
console.log(arrayContainsNTimes(["c","c","a","b","text","c"],"c",3));*/

//made up example;	function accepts array and string.  if string is not in array function adds it
var addToArray = function (words,string) {
var detected = "True";
	words.forEach(function (value) {
		if (value != string) {
			detected = "False";
		} 
	});
	if (detected == "False") {
		words.push(string);
	}
	console.log(words);
	return detected;
	
};
console.log(addToArray(["hello","world","hellow","fake"],"beach"));
//"hello","world","hellow","fake"

};
$(document).ready(main);