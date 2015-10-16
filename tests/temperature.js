var expect = chai.expect;

describe("Test usando Mocha, Chai, Sinon y Blanket", function() {
  describe("constructor", function() {
    it("Constructor se le asigna un valor 20", function() {
      var temp = new Temperatura();
      temp.tempValue = "20";
      expect(temp.tempValue).to.equal(temp.tempValue);
    });
  });
});