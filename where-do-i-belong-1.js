// WHERE DO I BELONG - Bonfire excercise on FreeCodeCamp
// Return the lowest index at which a value (second argument)
// should be inserted into a sorted array (first argument).
// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index),
// but less than 2 (1st index).
function where(arr, num) {
  // Find my place in this sorted array.
  var solution = 0;
  for(var i = 0; i < arr.length; i++) {
    if(num > arr[i] && num < arr[i+1]) {
      solution = i+1;
    }
    else if (num === arr[i]) {
      solution = i;
    }
  }
  return solution;
}
