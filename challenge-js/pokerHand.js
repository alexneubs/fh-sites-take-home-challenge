class PokerHand {
    constructor(hand) {

        //split up hand into an object with key/value pairs.	  
        this.hand = hand.split(" ").reduce((acc, card) => {
            card = card.split("");
            (card.length < 3) ? acc.push({
                value: card[0],
                suite: card[1]
            }): acc.push({
                value: card[0] + card[1],
                suite: card[2]
            });
            return acc;
        }, []);
    }

    //Determine if there are in pairs in the hand and what kind. 
    isPairs() {
        let pairs = "";
		
		// create a string with the totals for each value in the hand.
        const valuesArray = Object.values(this.hand.reduce((acc, card) => {
            acc[card.value] = acc[card.value] ? ++acc[card.value] : 1;
            return acc;
        }, {})).sort().join(',');
	
        switch (valuesArray) {
            case '1,1,1,2':
                pairs = "One Pair";
                break;
            case '1,2,2':
                pairs = "Two Pair";
                break;
            case '1,1,3':
                pairs = "Three of a Kind";
                break;
            case '1,4':
                pairs = "Four of a Kind";
                break;
            case '2,3':
                pairs = "Full House";
                break;
        }

        return pairs;
    }

	//Determine if the cards are in a straight
    isStraight() {

        const keysArray = Object.keys(this.hand.reduce((acc, card) => {
	        
	        // set numeric values so the face cards can be evaluated as numbers
            switch (card.value) {
                case 'J':
                    card.value = 11;
                    break;
                case 'Q':
                    card.value = 12;
                    break;
                case 'K':
                    card.value = 13;
                    break;
                case 'A':
                    card.value = 14;
                    break;
            }
            acc[card.value] = card.value;
            return acc;
        }, {}));

        for (var i = 0; i < keysArray.length - 1; i++) {
            if (eval(keysArray[i]) + 1 != keysArray[i + 1]) {
                return false;
            }
        }
        return true;
    }
    
    // Determine if all the cards in the hand share the same suit
    isSuited() {
        let suites = this.hand.reduce((acc, card) => {
            card.suite === "h" ? ++acc.hearts :
                card.suite === "c" ? ++acc.clubs :
                card.suite === "s" ? ++acc.spades :
                ++acc.diamonds;
            return acc;
        }, {
            hearts: 0,
            clubs: 0,
            spades: 0,
            diamonds: 0
        });
		
        //only evalute if all the cards are the same suit
        return Object.values(suites).some(suite => suite > "4");
    }


    getRank() {
        // Implement poker hand ranking
        
        //First, determine if there is a pair and if there is, return the type of pair
        
        if (this.isPairs()){
	        return this.isPairs();    
        } else if (this.isSuited() && this.isStraight() ){
	     	 //If there is a straight flush with an Ace, it is a Royal Flush
		 	return (this.hand.some(card => card.value == '14')) ? 'Royal Flush' : 'Straight Flush';    
        } else if (this.isSuited()){
	        return 'Flush';
        } else if (this.isStraight()){
	        return 'Straight';
        } else {
	        return 'High Card';
        }

    }
}

module.exports = PokerHand;