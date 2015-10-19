// BINARY AGENTS - Bonfire excercise on FreeCodeCamp
// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  var arrIn = str.split(" ");
  var arrOut = [];
  for (var i = 0; i < arrIn.length; i++) {
    var dec = parseInt(arrIn[i], 2);
    var char =  String.fromCharCode(dec);
    arrOut.push(char);
  }
  var res = arrOut.join("");
  
  return res;
}
