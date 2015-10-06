var deck = deck || {};

deck.normalCards = [
	// nopes
	{
        "title": "Nope",
        "description": "Negates the action of any player",
        "nopeable": true,
        "next_player_turns": 0,
        "class": "nope",
        "isSelected": false
	},
	{
        "title": "Nope",
        "description": "Negates the action of any player",
        "nopeable": true,
        "next_player_turns": 0,
        "class": "nope",
        "isSelected": false
	},
	{
        "title": "Nope",
        "description": "Negates the action of any player",
        "nopeable": true,
        "next_player_turns": 0,
        "class": "nope",
        "isSelected": false
	},
	{
        "title": "Nope",
        "description": "Negates the action of any player",
        "nopeable": true,
        "next_player_turns": 0,
        "class": "nope",
        "isSelected": false
	},
	{
        "title": "Nope",
        "description": "Negates the action of any player",
        "nopeable": true,
        "next_player_turns": 0,
        "class": "nope",
        "isSelected": false
	},
	// attacks
	{
		"title": "Attack",
		"description": "The next player takes two turns. Don't draw.",
		"count": 4,
		"nopeable": true,
		"next_player_turns": 2,
		"class": "attack",
		"isSelected": false
	},
	// skips
	{
		"title": "Skip",
		"description": "Next players turn without drawing",
		"nopeable": true,
		"next_player_turns": 1,
		"class": "skip",
		"isSelected": false
	},
	{
		"title": "Skip",
		"description": "Next players turn without drawing",
		"nopeable": true,
		"next_player_turns": 1,
		"class": "skip",
		"isSelected": false
	},
	{
		"title": "Skip",
		"description": "Next players turn without drawing",
		"nopeable": true,
		"next_player_turns": 1,
		"class": "skip",
		"isSelected": false
	},
	{
		"title": "Skip",
		"description": "Next players turn without drawing",
		"nopeable": true,
		"next_player_turns": 1,
		"class": "skip",
		"isSelected": false
	},
	// favors
	{
		"title": "Favor",
		"description": "Player gives you a card of their choosing",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "favor",
		"isSelected": false
	},
	{
		"title": "Favor",
		"description": "Player gives you a card of their choosing",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "favor",
		"isSelected": false
	},
	{
		"title": "Favor",
		"description": "Player gives you a card of their choosing",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "favor",
		"isSelected": false
	},
	{
		"title": "Favor",
		"description": "Player gives you a card of their choosing",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "favor",
		"isSelected": false
	},
	// shuffles
	{
		"title": "Shuffle",
		"description": "Rearrange the draw pile in a random order",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "shuffle",
		"isSelected": false
	},
	{
		"title": "Shuffle",
		"description": "Rearrange the draw pile in a random order",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "shuffle",
		"isSelected": false
	},
	{
		"title": "Shuffle",
		"description": "Rearrange the draw pile in a random order",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "shuffle",
		"isSelected": false
	},
	{
		"title": "Shuffle",
		"description": "Rearrange the draw pile in a random order",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "shuffle",
		"isSelected": false
	},
	// see the futures
	{
		"title": "See the Future",
		"description": "Look at the top 3 cards in the draw pile",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "future",
		"isSelected": false
	},
	{
		"title": "See the Future",
		"description": "Look at the top 3 cards in the draw pile",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "future",
		"isSelected": false
	},
	{
		"title": "See the Future",
		"description": "Look at the top 3 cards in the draw pile",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "future",
		"isSelected": false
	},
	{
		"title": "See the Future",
		"description": "Look at the top 3 cards in the draw pile",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "future",
		"isSelected": false
	},
	// taco cats
	{
		"title": "Taco Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Taco Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Taco Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Taco Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	// catermelon
	{
		"title": "Catermelon",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Catermelon",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Catermelon",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Catermelon",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	// beard cat
	{
		"title": "Beard Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Beard Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Beard Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Beard Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	// potato cat
	{
		"title": "Potato Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Potato Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Potato Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Potato Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	// rainbow ralphing cats
	{
		"title": "Rainbow Ralphing Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Rainbow Ralphing Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Rainbow Ralphing Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	},
	{
		"title": "Rainbow Ralphing Cat",
		"description": "Cat card",
		"nopeable": true,
		"next_player_turns": 0,
		"class": "cat",
		"isSelected": false
	}
];