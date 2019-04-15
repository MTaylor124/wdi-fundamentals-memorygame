
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!")
	} else {
		console.log("Sorry, try again.")
	}
	}


var flipCard = function (cardId) {	
		console.log("user flipped " + cards[cardId]); 
		cardsInPlay.push(cards[cardId]);
	};



flipCard(0);
flipCard(1);
checkForMatch();







//Console.log("user flipped " + cards[cardId]);

//if ( cardsInPlay[0] === cardsInPlay[1] ) {
//	alert("congrats you have a match"); 
//}
//else {
//	alert("these cards don't go together! what are you, blind?");
//}
//}
