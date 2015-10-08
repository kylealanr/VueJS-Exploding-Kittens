"use strict";

var game = game || {};

game.Responses = (function(global){

    var factory = {

        // constants

        // public functions
        ValidationRespnse: ValidationResponse,
        PlayerTurnResponse: PlayerTurnResponse,
        AlertResponse: AlertResponse
    };

    return factory;

    function ValidationResponse(success, message) {
        this.success = success;
        this.message = message;
    }

    function PlayerTurnResponse(playerIndex, numberOfTurns, functionToCall) {
        this.playerIndex = playerIndex;
        this.numberOfTurns = numberOfTurns;
        this.functionToCall = functionToCall;
    }

    function AlertResponse(title, body, css){
        this.title = title;
        this.body = body;
        this.css = css;
    }

})(window);