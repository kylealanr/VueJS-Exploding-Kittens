var game = game || {};

game.ValidationResponse = function ValidationResponse(success, message){
	this.success = success;
	this.message = message;
}

game.PlayerTurnResponse = function PlayerTurnResponse(playerIndex, numberOfTurns){
	this.playerIndex = playerIndex;
	this.numberOfTurns = numberOfTurns;
}