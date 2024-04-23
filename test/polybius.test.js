const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius custom tests", () => {
  let input = "Decoder Ring";
  describe("error handling", () => {
    it("is a function", () => {
      expect(polybius).to.be.a("function");
    });
  });
  describe("encoding", () => {
    it("return 42 for 'i' or 'j'", () => {
      let input = "ij";
      expect(polybius(input)).to.equal("4242");
    });

    it("return '41513143415124 24423322' for 'Decoder Ring' while mainting spaces and ignoring capital letters", () => {
      expect(polybius(input)).to.equal("41513143415124 24423322");
    });
  });
  describe("decoding", () => {
    it("return 'decoder r(i/j)ng' for '41513143415124 24423322'", () => {
      let input = "41513143415124 24423322";
      expect(polybius(input, false)).to.eql("decoder r(i/j)ng");
    });
    it("return false if input is a set of odd numbers", () => {
      let input = "123";
      expect(polybius(input, false)).to.be.false;
    });
  });
});
