var cardOne = "queen";
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


console.log("User flipped " + cardOne);
cardsInPlay.push(cards[0]);
//console.log(cardsInPlay);


var cardTwo = "queen";
cardsInPlay.push(cards[1]);
console.log("user flipped " + cardTwo);
console.log(cardsInPlay);

if ( cardsInPlay[0] === cardsInPlay[1] ) {
	alert("congrats you have a match"); 
}
else {
	alert("these cards don't go together! what are you, blind?");
}
