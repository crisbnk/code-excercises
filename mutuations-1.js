// MUTATIONS solution 1 - Bonfire exercise
// Return true if the string in the first element of the array
// contains the letters of the string in the second element of the array.
// For example, ['hello', 'Hello'], should return true because all of the letters in the second string
// are present in the first, ignoring case.
// The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.
// Another example, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.
function mutuation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
          var c = arr[1].toLowerCase().charAt(i);
          for (var j = 0; j < arr[0].length; j++) {
            var x = arr[0].toLowerCase().charAt(j);
            if (c == x) {
              break;
            }
            else if (j == arr[0].length - 1){
              return false;
            }
          }
  }
  return true;
}
