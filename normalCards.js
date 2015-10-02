var deck = deck || {};

deck.normalCards = [
	{
        "title": "Nope",
        "description": "Negates the action of any player",
        "count": 5,
        "nopeable": true,
        "next_player_turns": 0,
        "class": "nope"
	},
	{
		"title": "Attack",
		"description": "The next player takes two turns. Don't draw.",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 2,
		"class": "attack"
	},
	{
		"title": "Skip",
		"description": "Next players turn without drawing",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 1,
		"class": "skip"
	},
	{
		"title": "Favor",
		"description": "Player gives you a card of their choosing",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "favor"
	},
	{
		"title": "Shuffle",
		"description": "Rearrange the draw pile in a random order",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "shuffle"
	},
	{
		"title": "See the Furure",
		"description": "Look at the top 3 cards in the draw pile",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "future"
	},
	{
		"title": "Taco Cat",
		"description": "Cat card",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat"
	},
	{
		"title": "Catermelon",
		"description": "Cat card",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat"
	},
	{
		"title": "Beard Cat",
		"description": "Cat card",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat"
	},
	{
		"title": "Potato Cat",
		"description": "Cat card",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat"
	},
	{
		"title": "Rainbow Ralphing Cat",
		"description": "Cat card",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat"
	}
];