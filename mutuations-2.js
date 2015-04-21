// MUTATIONS solution 2 - Bonfire exercise
// Return true if the string in the first element of the array
// contains the letters of the string in the second element of the array.
// For example, ['hello', 'Hello'], should return true because all of the letters in the second string
// are present in the first, ignoring case.
// The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.
// Another example, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

function mutuation(arr) {
  var str0 = arr[0].toLowerCase();
  var str1 = arr[1].toLowerCase();
  for (var i = 0; i < str1.length; i++) {
   var c = str0.indexOf(str1.charAt(i));
   if (c === -1) {
     return false;
   }
  }
  return true;
}
