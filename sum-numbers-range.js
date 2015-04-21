// SUM ALL NUMBERS IN A RANGE - Bonfire excercise on FreeCodeCamp
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.
function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var count = min;
  var sum = min;
  while(count < max) {
    count++;
    sum += count;
  }
  return(sum);
}
