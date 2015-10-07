var game = game || {};

game.ValidationResponse = function ValidationResponse(success, message) {
    this.success = success;
    this.message = message;
};

game.PlayerTurnResponse = function PlayerTurnResponse(playerIndex, numberOfTurns) {
    this.playerIndex = playerIndex;
    this.numberOfTurns = numberOfTurns;
};

game.AlertResponse = function AlertResponse(title, body, css){
    this.title = title;
    this.body = body;
    this.css = css;
};