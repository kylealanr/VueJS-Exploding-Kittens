var game = game || {};

game.state = (function(global){
	var factory = {
		// Public Properties
		players: [],
		currentPlayer: -1,
		deck: [],
		discardPile: [],
		alerts: []
	};

	return factory;
})(window);