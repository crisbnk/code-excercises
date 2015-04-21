// FALSEY BOUNCER - Bonfire excercise
// Remove all falsey values from an array.
// Falsey values in javascript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  var newArr = arr.filter(function(value){
    if (Boolean(value)) {
      return true;
    }
  });
  return newArr;
}
