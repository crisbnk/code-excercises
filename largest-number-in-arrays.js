// LARGEST NUMBER IN ARRAYS - Bonfire excercise on FreeCodeCamp
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    var arrCheck = arr[i];
    var max = 0;
      for (var j = 0; j < arrCheck.length; j++) {
        if (max <= arrCheck[j]) {
          max = arrCheck[j];
        }
      }
    res.push(max);
  }
  return res;
}
