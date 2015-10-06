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
  computed: {
    playersAlive: function playersAlive() {
      return _.where(kittenVm.players, {isAlive: true});
    }
  },
  methods: {
    createDeck: function createDeck(){
      kittenVm.deck = _.shuffle(deck.normalCards);
      kittenVm.difuses = deck.difuses.slice();;
      kittenVm.bombs = deck.bombs.slice();
    },

    dealCards: function dealCards(playerCount){
      kittenVm.createDeck();

      var newPlayers = [];
      if(playerCount < 2 || playerCount > 5){
        kittenVm.alerts.push(
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
        hand = hand.concat(kittenVm.deck.splice(0, 4));

        newPlayers.push(
        {
          "id": i,
          "name": "Player " + (i + 1),
          "isAlive": true,
          "hand": hand
        })

        kittenVm.deck = _.difference(kittenVm.deck, newPlayers[i].hand);
      }

      kittenVm.deck = kittenVm.deck.concat(_.sample(kittenVm.bombs, (playerCount - 1)));

      kittenVm.deck = _.shuffle(kittenVm.deck);

      kittenVm.players = newPlayers;
    },

    drawCard: function drawCard(){
      var drawnCard = kittenVm.deck.pop();

      if(drawnCard.title == "Exploding Kitten"){
        kittenVm.killPlayer(kittenVm.players[kittenVm.currentPlayer]);
      }

      kittenVm.players[kittenVm.currentPlayer].hand.push(drawnCard);

      // if(kittenVm.currentPlayer == kittenVm.numberOfPlayers - 1){
      //   kittenVm.currentPlayer = 0;
      // } else {
      //   kittenVm.currentPlayer++;
      // }

      if(kittenVm.currentPlayer == (kittenVm.players.length - 1)){
        kittenVm.currentPlayer = 0;
      } else {
        kittenVm.currentPlayer++;
      }

      while(kittenVm.players[kittenVm.currentPlayer].isAlive == false){
        if(kittenVm.currentPlayer == (kittenVm.players.length - 1)){
          kittenVm.currentPlayer = 0;
        } else {
          kittenVm.currentPlayer++;
        }
      }
    },

    killPlayer: function killPlayer(player){ 
      player.isAlive = false;

      var playersRemaining = _.where(kittenVm.players, {isAlive: true});

      if(playersRemaining.length == 1){
        kittenVm.alerts.push(
          {
            "title": _.first(playersRemaining).name + " Wins", 
            "body": "",
            "class": "alert-success"
          });
      }
    },

    removeAlert: function removeAlert(alert){
      kittenVm.alerts.splice(kittenVm.alerts.indexOf(alert), 1);
    },

    selectCard: function selectCard(player, card){
      if(player.id == kittenVm.currentPlayer)
        card.isSelected = !card.isSelected;
    },

    playSelected: function playSelected(){
      // var selection = _.where(kittenVm.players[kittenVm.currentPlayer].hand, {isSelected: true});

      var selection = _.filter(kittenVm.players[kittenVm.currentPlayer].hand, function(card){ 
        if (card.isSelected == true){
          return card;
        } 
      });

      game.state.lastPlayedCards = selection;

      var response = game.logic.isValidMove();

      if(response.success){
        kittenVm.discard = selection.concat(kittenVm.discard);
        kittenVm.players[kittenVm.currentPlayer].hand = _.difference(kittenVm.players[kittenVm.currentPlayer].hand, selection);  

        if(kittenVm.currentPlayer == kittenVm.numberOfPlayers - 1){
          kittenVm.currentPlayer = 0;
        } else {
          kittenVm.currentPlayer++;
        }
      } else {
        alert = {
            "title": "Invalid move", 
            "body": response.message,
            "class": "alert-danger"
        };

        kittenVm.alerts.push(alert);

        setTimeout(function(){ kittenVm.removeAlert(alert); }, 3000);
      }
    }
  }
});