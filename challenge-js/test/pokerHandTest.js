var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here

/**
 * test
 */
describe('Rank a Straight Flush', function() {
  it('Return straight flush when hand given', function() {
    var hand = new PokerHand('5h 6h 7h 8h 9h');
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

/**
 * test
 */
describe('Rank a Four of a Kind', function() {
  it('Return a four of a kind when hand given', function() {
    var hand = new PokerHand('Js 4d 4h 4c 4s');
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

/**
 * test
 */
describe('Rank a Full House', function() {
  it('Return full house when hand given', function() {
    var hand = new PokerHand('3c 3s 3d Kh Kc');
    assert.equal(hand.getRank(), 'Full House');
  });
});

/**
 * test
 */
describe('Rank a Straight', function() {
  it('Return straight when hand given', function() {
    var hand = new PokerHand('8d 10c 9h Js Qh');
    assert.equal(hand.getRank(), 'Straight');
  });
});

/**
 * test
 */
describe('Rank a Three of a Kind', function() {
  it('Return three of a kind when hand given', function() {
    var hand = new PokerHand('7c 4d 7h 7s Qs');
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

/**
 * test
 */
describe('Rank a High Card', function() {
  it('Return high card when hand given', function() {
    var hand = new PokerHand('As Kd Qh 2s 7d');
    assert.equal(hand.getRank(), 'High Card');
  });
});


