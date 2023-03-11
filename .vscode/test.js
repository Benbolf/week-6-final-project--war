var expect = chai.expect;

describe('MyFunctions', function() {
    describe("#shuffleCards", function() {
        it('should create a card deck', function() {
            const testDeck = new Deck();
            expect(testDeck.cards.length).to.equal(52);
        }); 
        it('numberOfCards property should be defined', function() {
            const testDeck = new Deck();
            expect(testDeck.numberOfCards).to.equal(52);
        });
    });
});
