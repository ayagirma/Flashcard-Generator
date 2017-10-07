// requiring our ClozeCard module exported from ClozeCard.js
var Student = require("./ClozeCard.js");
var str = "Hello girma";
var ClozeCard = function(text, cloze) {

	this.cloze = cloze;
	this.fullText  = text;
	this.partial = this.fullText.replace(cloze, "...");
}

var test = new ClozeCard("Hello girma how are you doing", "how are you")
console.log(test);
	// if(err){
 //      return console.log(err);
 //        console.log(contents.statusCode);
     
	
// console.log(test.cloze);
// console.log(test.cloze2);
module.exports = ClozeCard;