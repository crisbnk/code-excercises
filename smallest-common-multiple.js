// SMALLEST COMMON MULTIPLE - Bonfire excercise on FreeCodeCamp
// Find the smallest number that is evenly divisible by all numbers in the provided range.
// The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
  arr.sort();
  var min = arr[0],
      max = arr[1],
      index = 1,
      res = false,
      test = 0;
  
  while(res === false) {
    var sub = max - 1;
    test = max * index;
    
    while (sub >= min) {
      if(test % sub === 0) {
        res = true;
        sub--;
      } else {
        res = false;
        break;
      }
    }
    
    index++;
  }
  
  return test;
}
