"use strict";

var deck = deck || {};

deck.bombs = (function(global){

    var PublicApi = {
        createCards: createCards
    };

    var bomb =
        {
            "title": "Exploding Kitten",
            "description": "Kills the player that draws it if it is not diffused.",
            "nopeable": false,
            "next_player_turns": 1,
            "class": "exploding",
            "instances": 4,
            "function": explosion
        };

    return PublicApi;

    function createCards(){
        var result = [];

        for(var i = 0; i < bomb.instances; i++){
            result.push({
                "title": bomb.title,
                "description": bomb.description,
                "nopeable": bomb.nopeable,
                "next_player_turns": bomb.next_player_turns,
                "class": bomb.class,
                "isSelected": bomb.isSelected,
                "instances": bomb.instances,
                "function": bomb.function
            });
        }

        return result;
    }

    function explosion(player){
        var difuses = _.where(player.hand, { title: "Difuse"});

        if(difuses.length == 0)
        {
            player.isAlive = false;

            game.logic.getNextLivingPlayer();
        }
        else
        {
            var difuse = difuses[0];
            var temp = [];

            temp.push(difuse);

            game.state.discardPile = temp.concat(game.state.discardPile);
            player.hand.splice(player.hand.indexOf(difuse), 1);

            game.state.deck.push(this);

            game.state.deck = _.shuffle(game.state.deck);

            game.logic.getNextLivingPlayer();
        }

        kittenVm.refresh();
    }
})(window);