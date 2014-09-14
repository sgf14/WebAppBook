//see pg 118 of book- 
//as an example of event driven programming (asynchronous) and how calls work vs traditional programming

/* this is a jQuery event that executes the callback when the DOM is ready
 we're using this function instead of sending the main function as an argument
 */
$(document).ready(function () {
	console.log ("this will print when the document is ready")
});

// this is a builtin JavaScript function that executes after a specified number of milliseconds
setTimeout(function() {
	console.log("this will print after 3 seconds")
}, 3000);

// this will print before anything else even though it appears last
console.log("This will print first");
	

	
