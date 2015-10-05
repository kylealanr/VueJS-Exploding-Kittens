var game = game || {};

game.isValidMove = function isValidMove(){
	switch (game.gameState.lastPlayedCards.length) {
	  case 1:
	  	return true;
	  	console.log("played 1 card");
	  case 2:
	  	return true;
	  	console.log("played 2 cards");
	  case 3:
	  	return true;
	  	console.log("played 3 cards");
	  case 5:
	  	return true;
	  	console.log("played 5 cards");
	  default:
	  	return false;
	    console.log("invalid move");
	}
}

game.nextPlayersTurn = function nextPlayersTurn(){
	
}