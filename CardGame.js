const prompt = require('prompt-sync')();
// creating array of suits and values.
var suits = ["sp", "di", "cl", "he"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
const valueMap = {
    1: 'A',
    11: 'J',
    12: 'Q',
    13: 'K'
}
var deck = [];

// creat a class of Card
class Card {
    constructor(suits, values) {
        this.suits = suits
        this.values = values
    }
 //construct a set of 52 cards with a combination of 4 suits and 13 values
    deskContruction() {

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                deck.push(values[j] + suits[i]);
            }
        }
    }
}

// creating a class of Deck where we shuffer, deal and play card and get the score ofter each round of play
class Deck {
    constructor(cards) {
        this.cards = cards;
        this.playerTwo = null;
        this.playerOne = null;

    }
    // to shuffer cards, set a random number as new index and swap the card at i index with the card at the rondom index
    shuffle() {
        for (let i = 0; i < 52; i++) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }

    }
// with the cards rondomly shuffer, the cards are split equaly between player one and player two
    dealCardsToPlayer() {
        this.playerOne = new Player(this.cards.slice(0, 26));
        this.playerTwo = new Player(this.cards.slice(26, 52));
    }
// call a function playCard define in Player class
    play() {
        prompt('clic Enter to PLAY');
        this.playerOne.playCard();
        this.playerTwo.playCard();
        this.getWinner();
        // set a condiction for the game to continue untill the hands of the player is empty
        if (this.playerOne.hands.length > 0) {
            this.play();
        }
    }
// getWinner function set a condiction to win a round set the score for the round and incremente the score
// when the the two card has a same value no point is awarded to each player .
    getWinner() {
        
        if (parseInt(this.playerOne.game, 10) > parseInt(this.playerTwo.game, 10)) {
            console.log('the winner is player One');
            this.playerOne.score += 1;
        } else if (parseInt(this.playerOne.game, 10) < parseInt(this.playerTwo.game, 10)) {
            console.log('the winner is player Two');
            this.playerTwo.score += 1;
        } else {
            console.log('Is a Draw');
        }
//printing card of player one and player two
        console.log(this.playerOne.game, ' - ', this.playerTwo.game);
        //printing score of player one and player two
        console.log('Score: ', this.playerOne.score, ' - ', this.playerTwo.score);
        // printing the numbers of card remain in each player hand if any
        this.playerTwo.hands.length && console.log('Remaining Cards: ', this.playerTwo.hands.length);

        // when all the card are Exhausted, print "game over" and print the final score and the winner of the game
        if (this.playerOne.hands.length == 0) {

            console.log('GAME OVER');

            if (parseInt(this.playerOne.score, 10) > parseInt(this.playerTwo.score, 10)) {
                console.log('Final winner is player One');

            } else if (parseInt(this.playerOne.score, 10) < parseInt(this.playerTwo.score, 10)) {
                console.log('Final winner is player Two');

            } else {
                console.log(' Draw!!!');
            }
        }
        
    }
}
// creat a class of player
class Player {
    constructor(hands) {
        this.hands = hands;
        this.score = 0;
    }
    // define a playCard methode using a shift methode. this methode flip the first acrd of each player
    playCard() {
        this.game = this.hands.shift();
    }
}
// call all function and method define in this code
const cards = new Card(suits, values);
const deckCard = new Deck(deck);
cards.deskContruction();
deckCard.shuffle();
deckCard.dealCardsToPlayer();
deckCard.play();