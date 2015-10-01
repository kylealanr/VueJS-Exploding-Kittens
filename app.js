var app = new Vue({
  el: '#app',
  data: {
    title: 'exploding kittens',
    cards :  [
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
    ],
    deck: [
      {
        "title": "Click create deck",
        "description": "",
        "count": 0,
        "nopeable": true,
        "next_player_turns": 0
      }
    ],
    difuses: [
      {
        "title": "Difuse",
        "description": "Allows a player to put any drawn card back in the deck",
        "count": 6,
        "nopeable": false,
        "next_player_turns": 1,
        "class": "difuse"
      }
    ],
    bombs: [
      {
        "title": "Exploding Kitten",
        "description": "Kills the player that draws it if it is not diffused.",
        "count": 4,
        "nopeable": false,
        "next_player_turns": 1,
        "class": "exploding"
      }
    ],
    players: [
      {
        "name": "Create a deck and choose number of players",
        "isAlive": true
      }
    ],
    numberOfPlayers: "",
    errors: []
  },
  computed: {
    playersAlive: function () {
      return _.where(app.players, {isAlive: true});
    }
  },
  methods: {
    decrementCount: function(card){
      if(card.count > 0)
        card.count--;
    },

    createDeck: function(){
      var deck = [];
      var difuses = [];
      var bombs = [];
      var count = 1;

      app.cards.forEach(function addMultiples(card){
        for(i = 0; i < card.count; i++){
          deck.push(
            {
              "id": count,
              "title": card.title,
              "description": card.description,
              "nopeable": true,
              "class": card.class
            });
          count++;
        }
      })

      app.difuses.forEach(function addMultiples(card){
        for(i = 0; i < card.count; i++){
          difuses.push(
            {
              "id": count,
              "title": card.title,
              "description": card.description,
              "nopeable": true,
              "class": card.class
            });
          count++;
        }
      })

      app.bombs.forEach(function addMultiples(card){
        for(i = 0; i < card.count; i++){
          bombs.push(
            {
              "id": count,
              "title": card.title,
              "description": card.description,
              "nopeable": true,
              "class": card.class
            });
          count++;
        }
      })

      app.deck = _.shuffle(deck);
      app.difuses = difuses;
      app.bombs = bombs;
    },

    dealCards: function(playerCount){
      var newPlayers = [];
      if(playerCount < 2 || playerCount > 5){
        app.errors.push(
          {
            title: "Invalid Player Count", 
            body: "Player count must be between 2 and 5",
            "class": "alert-danger"
          });
        return null;
      }
      for(i = 0; i < playerCount; i++){
        var hand = [];

        hand.push(app.difuses.pop());
        hand = hand.concat(_.sample(app.deck, 4));

        newPlayers.push(
        {
          "name": "Player " + (i + 1),
          "isAlive": true,
          "hand": hand
        })

        app.deck = _.without(app.deck, newPlayers[i].hand);
      }
      app.players = newPlayers;
    },

    killPlayer: function(player){
      player.isAlive = false;

      var playersRemaining = _.where(app.players, {isAlive: true});

      if(playersRemaining.length == 1){
        app.errors.push(
          {
            "title": _.first(playersRemaining).name + " Wins", 
            "body": "",
            "class": "alert-success"
          });
      }
    }
  }
});

app.createDeck();