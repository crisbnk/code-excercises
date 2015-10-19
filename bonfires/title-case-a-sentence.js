// TITLE CASE A SENTENCE - Bonfire excercise on FreeCodeCamp
// Return the provided string with the first letter of each word capitalized.
// For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

function titleCase(str) {
  var low = str.toLowerCase();
  var arr = low.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var char = arr[i].charAt(0);
    var newWord = arr[i].replace(char, char.toUpperCase());
    newArr.push(newWord);
  }
  var res = newArr.join(" ");
  return res;
}
