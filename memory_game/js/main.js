
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds"
}
];

var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
	}


var flipCard = function (cardId) {	
		console.log("user flipped " + cards[cardId].rank); 
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
	};



flipCard(0);
flipCard(2);
checkForMatch();







//Console.log("user flipped " + cards[cardId]);

//if ( cardsInPlay[0] === cardsInPlay[1] ) {
//	alert("congrats you have a match"); 
//}
//else {
//	alert("these cards don't go together! what are you, blind?");
//}
//}
