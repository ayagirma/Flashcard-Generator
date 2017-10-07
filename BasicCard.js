// requiring our BasicCard module exported from BasicCard.js
var Student = require("./BasicCard.js");

// constructor function for creating BasicCard object
var BasicCard = function(front, back){
	this.front = front; 
	this.back = back;
}

// exporting our Student constructor
module.exports = BasicCard;
