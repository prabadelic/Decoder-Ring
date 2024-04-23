const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution custom tests", () => {
  let input = "Decoder Ring";
  let alphabet = "xoyqmcgrukswaflnthdjpzibev";
  describe("error handling", () => {
    it("should be a function", () => {
      expect(substitution).to.be.a("function");
    });
    it("return false for invalid shift constraints", () => {
      const constraints = [
        "",
        "abcdefghijklmnopqrstuvwxy",
        "abcdefghijklmnopqrstuvwxyzz",
        "abcabcabcabcabcabcabcabcyz",
      ];
      const actual = constraints.every((alphabet) => {
        return !substitution(input, alphabet);
      });
      expect(actual).to.be.true;
    });
  });

  describe("encoding", () => {
    it("return encoded result using the substitution alphabet", () => {
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("qmylqmh hufg");
    });
    it("should work with any kind of key with unique characters", () => {
      let input = "message";
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("y&ii$r&");
    });
  });

  describe("decoding", () => {
    it("return decoded result using the substitution alphabet", () => {
      let input = "qmylqmh hufg";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("decoder ring");
    });
    it("should work with any kind of key with unique characters", () => {
      let input = "y&ii$r&";
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("message");
    });
  });
});
