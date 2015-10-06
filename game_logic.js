var game = game || {};

game.logic = (function gameLogicIife(global){

	var factory = {

		// constants

		// public functions
		isValidMove: isValidMove,
		logicEngine: logicEngine
	};

	return factory;

	function isValidMove(){
		/// <summary>
		/// Determines whether or not a move is valid
		/// </summary>
		/// <returns>Response object with a success value and a message</returns>
		var response;
		var cardsPlayed = game.state.lastPlayedCards.length;

		switch (cardsPlayed) {
		  case 1:
		  	response = new game.ValidationResponse(true, "");

		  	if(game.state.lastPlayedCards[0].class == "cat"){
		  		response = new game.ValidationResponse(false, "cat cards can only be played in a pair.");
		  	}

		  	break;
		  case 2:
		  	response = new game.ValidationResponse(true, "");

		  	var card1 = game.state.lastPlayedCards[0].title;
		  	var card2 = game.state.lastPlayedCards[1].title;

		  	if(!game.utils.areEqual(card1, card2)){
		  		response = new game.ValidationResponse(false, "Can only play two cards in a pair.");
		  	}
		  	
		  	break;
		  case 3:
		  	response = new game.ValidationResponse(true, "");

		  	var card1 = game.state.lastPlayedCards[0].title;
		  	var card2 = game.state.lastPlayedCards[1].title;
		  	var card3 = game.state.lastPlayedCards[2].title;

		  	if(!game.utils.areEqual(card1, card2, card3)){
		  		response = new game.ValidationResponse(false, "Can only play three of the same card.");
		  	}

		  	break;
		  case 5:
		  	response = new game.ValidationResponse(true, "");

		  	var differentCards = _.uniq(game.state.lastPlayedCards, function(card) { return card.title; });

		  	if(differentCards.length != 5){
		  		response = new game.ValidationResponse(false, "Can only play five different cards.");	
		  	}

		  	break;
		  default:
		  	response = new game.ValidationResponse(false, "Cannot play " + cardsPlayed);
		  	break;
		}

		return response;
	}

	function logicEngine(){
		/// <summary>
		/// Determines the effect that playing cards will have
		/// </summary>
		/// <returns>Returns an object with the next player and how many turns they will take</returns>
		var response;

		if(game.state.lastPlayedCards.length == 1 && game.state.lastPlayedCards[0].title == "Attack"){
			response = new PlayerTurnResponse(getNextLivingPlayer(), 2);
		}

		return response;
	}

	function getNextLivingPlayer(){
		/// <summary>
		/// Returns the index of the next living player
		/// </summary>
		if(currentPlayer == (game.state.players.length - 1)){
			currentPlayer = 0;
		} else {
			currentPlayer++;
		}

		while(game.state.players[currentPlayer].isAlive == false){
			if(currentPlayer == (game.state.players.length - 1)){
				currentPlayer = 0;
			} else {
				currentPlayer++;
			}
		}
	}

})(window);