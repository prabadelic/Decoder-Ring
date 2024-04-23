const polybiusModule = (function () {
  const polybiusSquare = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  function polybius(input, encode = true) {
    const polybiusKeys = Object.keys(polybiusSquare);
    const polybiusValues = Object.values(polybiusSquare);
    let result = "";

    // if decoding and the input length is odd (excluding spaces), return false
    if (!encode && input.replace(/ /g, "").length % 2 !== 0) return false;

    if (encode) {
      //loop through each character of input
      for (let i = 0; i < input.length; i++) {
        let char = input[i].toLowerCase();
        //if the current character is not a letter, add to result
        if (!polybiusKeys.includes(char)) {
          result += char;
        } else {
          let index = polybiusKeys.indexOf(char);
          result += polybiusValues[index];
        }
      }
      return result;
    } else {
      //split the string of numbers by 2 digits each, and single spaces
      const pairs = input.match(/(\d{2}|\s)/g);
      for (let pair of pairs) {
        if (pair === "42") {
          result += "(i/j)";
        }
        //add back sinlge spaces during iteration
        if (!polybiusValues.includes(pair)) {
          result += pair;
        } else {
          //match each pair to current iteration of values(numbered pairs), return corresponding key(letter)
          for (let [key, value] of Object.entries(polybiusSquare)) {
            if (value === pair) {
              result += key;
            }
          }
        }
      }
      if (result.includes('ij')) {
        result = result.replace(/ij/g, "");
    }
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
