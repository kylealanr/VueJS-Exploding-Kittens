"use strict";

var deck = deck || {};

deck.difuses = (function (global) {

    var PublicApi = {
        createCards: createCards
    };

    var difuse =
        {
            "title": "Difuse",
            "description": "Allows a player to put any drawn card back in the deck",
            "nopeable": false,
            "next_player_turns": 1,
            "class": "difuse",
            "isSelected": false,
            "instances": 6,
            "function": null
        };

    return PublicApi;

    function createCards(){
        var result = [];

        for(var i = 0; i < difuse.instances; i++){
            result.push({
                "title": difuse.title,
                "description": difuse.description,
                "nopeable": difuse.nopeable,
                "next_player_turns": difuse.next_player_turns,
                "class": difuse.class,
                "isSelected": difuse.isSelected,
                "instances": difuse.instances,
                "function": difuse.function
            });
        }

        return result;
    }

})(window);