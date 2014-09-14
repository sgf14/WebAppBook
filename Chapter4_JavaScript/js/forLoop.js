//print 10 numbers starting with 0

var num;

/*each for loop has 4 components.  in this case:
initialization: num gets set to 0
Continuation: keep going as long as num is smaller than 100
Update: add 1 to num
Body: print num
*/

//increment
for(num = 0; num <= 10; num++) {  /book lists num = num + 1 for simplicity, but n++ is prefered method
	console.log(num);
}

//this is a decrement
/*for(num = 10; num >= 1; num--) {
	console.log(num);
}*/