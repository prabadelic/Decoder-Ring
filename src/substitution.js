const substitutionModule = (function () {
  const standard = "abcdefghijklmnopqrstuvwxyz";

  //Set objects only hold a value once, unique alphabet should have same length
  function isUnique(string) {
    return new Set(string).size === string.length;
  }

  function substitution(input, alphabet, encode = true) {
    //check constraints
    if (!alphabet || alphabet.length !== 26) return false;
  
    const uniqueAlphabet = isUnique(alphabet);
  
    if (!uniqueAlphabet) return false;
  
    let result = "";
  
    //loop through each character of input
    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      //add spaces back
      if (char == " ") {
        result += char;
      }
      //match index of current character, and replace it with indexed character of opposite alphabet
      else {
        let index = encode ? standard.indexOf(char) : alphabet.indexOf(char);
        let substitutedChar = encode ? alphabet[index] : standard[index];
        result += substitutedChar;
    }
  }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
