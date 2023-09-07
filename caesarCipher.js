const shiftWrap = (shift, j) => {
  while (shift > 26) {
    return shift % 26;
  }

  return shift;
};

// console.log(shiftWrap(52));

const caesarCipher = (str, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  let overWrap = shiftWrap(shift);
  const punctuationPattern = /\p{P}/u;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += " ";
    } else if (punctuationPattern.test(str[i])) {
      newStr += str[i];
    }
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        if (j + overWrap > alphabet.length - 1) {
          newStr += alphabet[j + overWrap - alphabet.length];
        } else {
          newStr += alphabet[j + overWrap];
        }
      }
    }

    // newStr += alphabet[shift];
  }

  //   console.log(alphabet[0]);

  return newStr;
};

module.exports = caesarCipher;
