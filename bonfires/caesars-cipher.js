// CAESARS CIPHER - Bonfire excercise on FreeCodeCamp
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
// but do pass them on.

function rot13(str) { // LBH QVQ VG!
  var res = [];
  var value;
  var uniNum;
  var letter;
  var solution;
  
  for(var i = 0; i < str.length; i++) {
    value = str[i];
    uniNum = value.charCodeAt(0);
    if(uniNum < 65 || uniNum > 90) {
      res.push(value);
    } else {
      var charCipherNum = uniNum + 13;
      if(charCipherNum > 90) {
        charCipherNum = charCipherNum - 26;
        letter = String.fromCharCode(charCipherNum);
      } else {
        letter = String.fromCharCode(charCipherNum);
      }
      res.push(letter);
    }
  }
  
  solution = res.join("");
  
  return solution;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
