// PAIRWISE - Bonfire excercise on FreeCodeCamp
// Return the sum of all indices of elements of 'arr' that can be paired with one other element
// to form a sum that equals the value in the second argument 'arg'.
// If multiple sums are possible, return the smallest sum. Once an element has been used,
// it cannot be reused to pair with another.
// For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired
// with each other to equal 7.
// pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4,
// and the first element has an index of 0!

function pairwise(arr, arg) {
  var pair = [];
  var res = 0;
  
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      var goodPair = checkTheSum(arr[i], arr[j], arg);
      if(goodPair) {
        pair.push([[arr[i], i], [arr[j], j]]);
        arr[i] = "";
        arr[j] = "";
      }
    }
  }
  
  
  for(var i = 0; i < pair.length; i++) {
    var temp = pair[i][0][1] + pair[i][1][1];
    res += temp;
  }
  
  return res;
}

function checkTheSum(numA, numB, numC) {
  var sumPair = numA + numB;
  if(sumPair === numC) {
    return true;
  } else {
    return false;
  }
} 

pairwise([1, 3, 2, 4], 4);
