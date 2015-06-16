// MISSING LETTERS - Bonfire excercise on FreeCodeCamp
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var res = "",
      check = 0,
      index = 0;
  
  while (index < str.length) {
    check = str.charCodeAt(index + 1) - str.charCodeAt(index);
    if (check == 2) {
      res = String.fromCharCode(str.charCodeAt(index) + 1);
      break;
    } else {
      index++;
    }
    res = undefined;
  }
  
  return res;
}
