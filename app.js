var kittenVm = new Vue({
  el: '#kittenVm',
  data: {
    title: 'exploding kittens',
    discard: [],
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
    playersAlive: function playersAlive() {
      return _.where(kittenVm.players, {isAlive: true});
    }
  },
  methods: {
    createDeck: function createDeck(){
      var localDeck = [];
      var difuses = [];
      var bombs = [];
      var count = 1;

      deck.normalCards.forEach(function addMultiples(card){
        for(i = 0; i < card.count; i++){
          localDeck.push(
            {
              "id": count,
              "title": card.title,
              "description": card.description,
              "nopeable": true,
              "class": card.class,
              "isSelected": false
            });
          count++;
        }
      })

      deck.difuses.forEach(function addMultiples(card){
        for(i = 0; i < card.count; i++){
          difuses.push(
            {
              "id": count,
              "title": card.title,
              "description": card.description,
              "nopeable": true,
              "class": card.class,
              "isSelected": false
            });
          count++;
        }
      })

      deck.bombs.forEach(function addMultiples(card){
        for(i = 0; i < card.count; i++){
          bombs.push(
            {
              "id": count,
              "title": card.title,
              "description": card.description,
              "nopeable": true,
              "class": card.class,
              "isSelected": false
            });
          count++;
        }
      })

      kittenVm.deck = _.shuffle(localDeck);
      kittenVm.difuses = difuses;
      kittenVm.bombs = bombs;
    },

    dealCards: function dealCards(playerCount){
      kittenVm.createDeck();

      var newPlayers = [];
      if(playerCount < 2 || playerCount > 5){
        kittenVm.errors.push(
          {
            title: "Invalid Player Count", 
            body: "Player count must be between 2 and 5",
            "class": "alert-danger"
          });
        return null;
      }
      for(i = 0; i < playerCount; i++){
        var hand = [];

        hand.push(kittenVm.difuses.pop());
        hand = hand.concat(_.sample(kittenVm.deck, 4));

        newPlayers.push(
        {
          "name": "Player " + (i + 1),
          "isAlive": true,
          "hand": hand
        })

        kittenVm.deck = _.without(kittenVm.deck, newPlayers[i].hand);
      }
      kittenVm.players = newPlayers;
    },

    killPlayer: function killPlayer(player){ 
      player.isAlive = false;

      var playersRemaining = _.where(kittenVm.players, {isAlive: true});

      if(playersRemaining.length == 1){
        kittenVm.errors.push(
          {
            "title": _.first(playersRemaining).name + " Wins", 
            "body": "",
            "class": "alert-success"
          });
      }
    },

    removeError(error){
      kittenVm.errors = _.without(kittenVm.errors, error);
    },

    selectCard(card){
      card.isSelected = !card.isSelected;
    }
  }
});