var app = new Vue({
  el: '#app',
  data: {
    title: 'exploding kittens',
    cards :  [
      {
        "title": "Exploding Kitten",
        "description": "Kills the player that draws it if it is not diffused.",
        "count": 4,
        "nopeable": false,
        "next_player_turns": 1
      },
      {
        "title": "Difuse",
        "description": "Allows a player to put any drawn card back in the deck",
        "count": 6,
        "nopeable": false,
        "next_player_turns": 1
      },
      {
        "title": "Nope",
        "description": "Negates the action of any player",
        "count": 5,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Attack",
        "description": "The next player takes two turns. Don't draw.",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 2
      },
      {
        "title": "Skip",
        "description": "Next players turn without drawing",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 1
      },
      {
        "title": "Favor",
        "description": "Player gives you a card of their choosing",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Shuffle",
        "description": "Rearrange the draw pile in a random order",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "See the Furure",
        "description": "Look at the top 3 cards in the draw pile",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Taco Cat",
        "description": "Cat card",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Catermelon",
        "description": "Cat card",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Beard Cat",
        "description": "Cat card",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Potato Cat",
        "description": "Cat card",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      },
      {
        "title": "Rainbow Ralphing Cat",
        "description": "Cat card",
        "count": 4,
        "nopeable": true,
        "next_player_turns": 0
      }
    ],
    deck: [
      {
        "title": "Placeholder Card",
        "description": "This is just a placeholder",
        "count": 0,
        "nopeable": true,
        "next_player_turns": 0
      }
    ],
    discardPile: [],
    player1: {
      hand: [],
      isAlive: false
    },
    player2: {
      hand: [],
      isAlive: false
    },
    player3: {
      hand: [],
      isAlive: false
    },
    player4: {
      hand: [],
      isAlive: false
    },
    player5: {
      hand: [],
      isAlive: false
    }
  },
  methods: {
    decrementCount: function(card){
      if(card.count > 0)
        card.count--;
    },

    createDeck: function(){
      var result = [];
      app.cards.forEach(function addMultiplesOfCards(card){
        for(i = 0; i < card.count; i++){
          result.push(card);  
        }
      })
      app.deck = result;
    },

    dealCards: function(cards, playerCount){
      // cards.forEach(function )
    }
  }
})