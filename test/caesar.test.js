const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar custom tests", () => {
  let input = "Decoder Ring";
  let shift = 2;
  describe("error handling", () => {
    it("is a function", () => {
      expect(caesar).to.be.a("function");
    });

    it("return false invalid shift constraints", () => {
      const shiftConstraints = [0, -26, 26];
      const actual = shiftConstraints.every((shift) => {
        return !caesar(input, shift);
      });
      expect(actual).to.be.true;
    });
  });

  describe("encoding a message", () => {
    it("returns a string value", () => {
      const actual = typeof caesar(input, shift);
      expect(actual).to.be.a("string");
    });

    it("returns correct length", () => {
      const expected = input.length;
      const actual = caesar(input, shift).length;
      expect(actual).to.equal(expected);
    });

    it("returns a positively shifted result: 'fgeqfgt tkpi'", () => {
      const expected = "fgeqfgt tkpi";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("returns a negativly shifted result: 'bcambcp pgle'", () => {
      shift = -2;
      const expected = "bcambcp pgle";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes to return a positively de-shifted result: 'decoder ring'", () => {
      input = "fgeqfgt tkpi";
      shift = 2;
      const expected = "decoder ring";
      const actual = caesar(input, shift, false);
      expect(actual).to.deep.equal(expected);
    });

    it("decodes to return a negatively de-shifted result: 'decoder ring'", () => {
      input = "bcambcp pgle";
      shift = -2;
      const expected = "decoder ring";
      const actual = caesar(input, shift, false);
      expect(actual).to.deep.equal(expected);
    });
  });
});
