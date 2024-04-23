const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    //check if shift passes constraints
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //if decode, flip the shift amount
    if (encode === false) {
      shift = shift * -1;
    }

    //loop through each character of input
    let result = "";
    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      //if the current character is not a letter, add to result
      if (!alphabet.includes(char)) {
        result += char;
      } else {
        let index = alphabet.indexOf(char);
        let shiftedIndex = index + shift;
        //keep index withing 0-25
        if (shiftedIndex < 0) {
          shiftedIndex += 26;
        } else if (shiftedIndex > 25) {
          shiftedIndex -= 26;
        }
        let shiftedChar = alphabet[shiftedIndex];
        result += shiftedChar;
      }
    }

    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
