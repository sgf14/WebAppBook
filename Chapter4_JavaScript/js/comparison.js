// be careful with comparison (===) vs assignment (=)
var cardRank ="queen";

if (cardRank === "king") {  //use JSLint; === is correct.  try '=' and see what console says
	console.log("the card is a king");
} else {
	console.log("the card is not a king");
}