// SORTED UNION - Bonfire excercise on FreeCodeCamp
// Write a function that takes two or more arrays and returns
// a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order,
// but with no duplicates in the final array.
// The unique numbers should be sorted by their original order,
// but the final array should not be sorted in numerical order.

function unite(arr1, arr2, arr3) {
  var res = [],
      args = Array.prototype.slice.call(arguments),
      flattened = [],
      i = 0;
  
  flattened = args.reduce(function(a, b) {
    return a.concat(b);
  });
  
  while (i < flattened.length) {
    var temp = res.indexOf(flattened[i]);
    if (temp === -1) {
      res.push(flattened[i]);
    }
    i++;
  }
    
  return res;
}
