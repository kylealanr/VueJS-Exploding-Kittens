"use strict";

var game = game || {};

game.logic = (function gameLogicIife(global) {

    var factory = {

        // constants

        // public functions
        isValidMove: isValidMove,
        logicEngine: logicEngine,
        resetGameState: resetGameState,
        dealCards: dealCards,
        getNextLivingPlayer: getNextLivingPlayer
    };

    // internal variables
    var normalCards;
    var difuses;
    var bombs;

    function resetGameState() {
        game.state.players =  [];
        game.state.currentPlayer = -1;
        game.state.deck = [];
        game.state.discardPile = [];
        game.state.alerts = [];
    }

    function createDeck() {
        normalCards = _.shuffle(deck.normalCards.createCards());
        difuses = deck.difuses.createCards();
        bombs = deck.bombs.createCards();
    }

    function dealCards(playerCount) {
        createDeck();

        if (playerCount < 2 || playerCount > 5) {
            kittenVm.alertWithTimeout(new game.Responses.AlertResponse("Invalid Player Count", "Player count must be between 2 and 5", "alert-danger"));
            return null;
        }

        game.state.players = [];

        for (var i = 0; i < playerCount; i++) {
            var hand = [];

            hand.push(difuses.pop());
            hand = hand.concat(normalCards.splice(0, 4));

            game.state.players.push(
                {
                    "id": i,
                    "name": "Player " + (i + 1),
                    "isAlive": true,
                    "hand": hand
                });

            normalCards = _.difference(normalCards, game.state.players[i].hand);
        }

        game.state.deck = normalCards.concat(_.sample(bombs, (playerCount - 1)));
        game.state.deck = game.state.deck.concat(difuses);

        game.state.deck = _.shuffle(game.state.deck);
    }

    function isValidMove() {
        /// <summary>
        /// Determines whether or not a move is valid
        /// </summary>
        /// <returns>Response object with a success value and a message</returns>
        var response;
        var cardsPlayed = game.state.lastPlayedCards.length;

        switch (cardsPlayed) {
            case 1:
                response = new game.Responses.ValidationRespnse(true, "");

                if (game.state.lastPlayedCards[0].class == "cat") {
                    response = new game.Responses.ValidationRespnse(false, "cat cards can only be played in a pair.");
                }

                break;
            case 2:
                response = new game.Responses.ValidationRespnse(true, "");

                var card1 = game.state.lastPlayedCards[0].title;
                var card2 = game.state.lastPlayedCards[1].title;

                if (!game.utils.areEqual(card1, card2)) {
                    response = new game.Responses.ValidationRespnse(false, "Can only play two cards in a pair.");
                }

                break;
            case 3:
                response = new game.Responses.ValidationRespnse(true, "");

                var card1 = game.state.lastPlayedCards[0].title;
                var card2 = game.state.lastPlayedCards[1].title;
                var card3 = game.state.lastPlayedCards[2].title;

                if (!game.utils.areEqual(card1, card2, card3)) {
                    response = new game.Responses.ValidationRespnse(false, "Can only play three of the same card.");
                }

                break;
            case 5:
                response = new game.Responses.ValidationRespnse(true, "");

                var differentCards = _.uniq(game.state.lastPlayedCards, function (card) {
                    return card.title;
                });

                if (differentCards.length != 5) {
                    response = new game.Responses.ValidationRespnse(false, "Can only play five different cards.");
                }

                break;
            default:
                response = new game.Responses.ValidationRespnse(false, "Cannot play " + cardsPlayed);
                break;
        }

        return response;
    }

    function logicEngine() {
        /// <summary>
        /// Determines the effect that playing cards will have
        /// </summary>
        /// <returns>Returns an object with the next player and how many turns they will take</returns>
        var response;
        var numCardsPlayed = game.state.lastPlayedCards.length;
        var cardsPlayed = game.state.lastPlayedCards;

        switch (numCardsPlayed) {
            case 1:
                response = new game.Responses.PlayerTurnResponse(getNextLivingPlayer(), cardsPlayed[0].next_player_turns, cardsPlayed[0].function);
                break;
            case 2:
                response = new game.Responses.PlayerTurnResponse(getNextLivingPlayer(), 0, stealRandomCard);
                // steal random function in response
                break;
            case 3:
                response = new game.Responses.PlayerTurnResponse(getNextLivingPlayer(), 0, askToStealCard);
                // go fish function in response
                break;
            case 5:
                response = new game.Responses.PlayerTurnResponse(getNextLivingPlayer(), 0, takeCardFromDiscard);
                // pull from discard function in response
                break;
            default:
                break;
        }

        return response;
    }

    function getNextLivingPlayer() {
        /// <summary>
        /// Returns the index of the next living player
        /// </summary>
        if (game.state.currentPlayer == (game.state.players.length - 1)) {
            game.state.currentPlayer = 0;
        } else {
            game.state.currentPlayer++;
        }

        while (game.state.players[game.state.currentPlayer].isAlive == false) {
            if (game.state.currentPlayer == (game.state.players.length - 1)) {
                game.state.currentPlayer = 0;
            } else {
                game.state.currentPlayer++;
            }
        }
    }

    function stealRandomCard(){

    }

    function askToStealCard(){

    }

    function takeCardFromDiscard(){

    }

    return factory;

})(window);