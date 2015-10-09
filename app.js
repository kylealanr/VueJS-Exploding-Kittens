"use strict";

var kittenVm = new Vue({
    el: '#kittenVm',
    data: {
        title: 'exploding kittens',
        discard: [],
        currentPlayer: 0,
        players: [
            {
                "id": -1,
                "name": "Create a deck and choose number of players",
                "isAlive": true
            }
        ],
        numberOfPlayers: "",
        alerts: []
    },
    methods: {
        refresh: function refresh(){
            kittenVm.discard = game.state.discardPile;
            kittenVm.players = game.state.players;
            kittenVm.currentPlayer = game.state.currentPlayer;
            kittenVm.alerts = game.state.alerts;
            kittenVm.checkWinCondition();
        },

        dealCards: function dealCards(playerCount) {
            game.logic.dealCards(playerCount);

            kittenVm.players = game.state.players;
            kittenVm.deck = game.state.deck;
        },

        drawCard: function drawCard(player) {
            var drawnCard = game.state.deck.pop();

            if (drawnCard.title == "Exploding Kitten") {
                drawnCard.function(player);

                return;
            }

            kittenVm.players[kittenVm.currentPlayer].hand.push(drawnCard);

            if (kittenVm.currentPlayer == (kittenVm.players.length - 1)) {
                kittenVm.currentPlayer = 0;
            } else {
                kittenVm.currentPlayer++;
            }

            while (kittenVm.players[kittenVm.currentPlayer].isAlive == false) {
                if (kittenVm.currentPlayer == (kittenVm.players.length - 1)) {
                    kittenVm.currentPlayer = 0;
                } else {
                    kittenVm.currentPlayer++;
                }
            }
        },

        killPlayer: function killPlayer(player) {
            player.isAlive = false;

            kittenVm.checkWinCondition();
        },

        checkWinCondition: function checkWinCondition(){
            var playersRemaining = _.where(kittenVm.players, {isAlive: true});

            if (playersRemaining.length == 1) {
                kittenVm.alerts.push(
                    {
                        "title": _.first(playersRemaining).name + " Wins",
                        "body": "",
                        "css": "alert-success"
                    });
            }
        },

        removeAlert: function removeAlert(alert) {
            kittenVm.alerts.splice(kittenVm.alerts.indexOf(alert), 1);
        },

        selectCard: function selectCard(player, card) {
            if (player.id == kittenVm.currentPlayer)
                card.isSelected = !card.isSelected;
        },

        playSelected: function playSelected() {
            // var selection = _.where(kittenVm.players[kittenVm.currentPlayer].hand, {isSelected: true});

            var selection = _.filter(kittenVm.players[kittenVm.currentPlayer].hand, function (card) {
                if (card.isSelected == true) {
                    return card;
                }
            });

            game.state.lastPlayedCards = selection;

            var response = game.logic.isValidMove();

            if (response.success) {
                kittenVm.discard = selection.concat(kittenVm.discard);
                kittenVm.players[kittenVm.currentPlayer].hand = _.difference(kittenVm.players[kittenVm.currentPlayer].hand, selection);

                // allow for nopes somewhere

                var result = game.logic.logicEngine();

                result.functionToCall();
            } else {
                kittenVm.alertWithTimeout(new game.Responses.AlertResponse("Invalid move", response.message, "alert-danger"));
            }
        },

        alertWithTimeout: function alertWithTimeout(alertResponse){
            kittenVm.alerts.push(alertResponse);

            setTimeout(function () {
                kittenVm.removeAlert(alertResponse);
            }, 3000);
        }
    }
});