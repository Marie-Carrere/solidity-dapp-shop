var Adoption = artifacts.require("Adoption");

contract('Adoption', function(accounts) {
  describe('First group of tests', () => {
    let instance;

    before(async () => {
      instance = await Adoption.deployed();
    });

    it('User should adopt a pet', async () => {
      await instance.adopt.sendTransaction(8, {from: accounts[0]});
      let adopter = await instance.adopters.call(8);
      assert.equal(adopter, accounts[0], "[Incorrect owner address]");
    });

    it('Should get adopter address by pet id in array', async () => {
      let adopters = await instance.getAdopters.call();
      assert.equal(adopters[8], accounts[0], "Owner of pet id should be recorded in the array");
    });

  });
});
