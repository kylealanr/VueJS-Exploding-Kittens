var game = game || {};

game.state = (function(global){
	var factory = {
		// Public Properties
		players: [],
		currentPlayer: -1,
		discardPile: [],
		lastPlayedCards: [],
		alerts: []
	};

	return factory;
})(window);