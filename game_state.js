var game = game || {};

game.gameState = {
	players: [],
	livingPlayers: [],
	currentPlayer = -1,
	discardPile: [],
	lastPlayedCards: [],
	alerts: []
}