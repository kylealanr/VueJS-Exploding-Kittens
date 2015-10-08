"use strict";

var deck = deck || {};

deck.normalCards = (function(global){

    var factory = {
        createCards: createCards
    };

    var cards = [
        {
            "title": "Nope",
            "description": "Negates the action of any player",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "nope",
            "isSelected": false,
            "instances": 5,
            "function": null
        },
        {
            "title": "Attack",
            "description": "The next player takes two turns. Don't draw.",
            "count": 4,
            "nopeable": true,
            "next_player_turns": 2,
            "class": "attack",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Skip",
            "description": "Next players turn without drawing",
            "nopeable": true,
            "next_player_turns": 1,
            "class": "skip",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Favor",
            "description": "Player gives you a card of their choosing",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "favor",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Shuffle",
            "description": "Rearrange the draw pile in a random order",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "shuffle",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "See the Future",
            "description": "Look at the top 3 cards in the draw pile",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "future",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Taco Cat",
            "description": "Cat card",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "cat",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Catermelon",
            "description": "Cat card",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "cat",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Beard Cat",
            "description": "Cat card",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "cat",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Potato Cat",
            "description": "Cat card",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "cat",
            "isSelected": false,
            "instances": 4,
            "function": null
        },
        {
            "title": "Rainbow Ralphing Cat",
            "description": "Cat card",
            "nopeable": true,
            "next_player_turns": 0,
            "class": "cat",
            "isSelected": false,
            "instances": 4,
            "function": null
        }
    ];

    return factory;

    function createCards(){
        var result = [];

        cards.forEach(function cardsForeach(card){
            for(var i = 0; i < card.instances; i++){
                result.push(
                    {
                        "title": card.title,
                        "description": card.description,
                        "nopeable": card.nopeable,
                        "next_player_turns": card.next_player_turns,
                        "class": card.class,
                        "isSelected": card.isSelected,
                        "instances": card.instances,
                        "function": card.function
                    }
                )
            }
        });

        return result;
    }

})(window);