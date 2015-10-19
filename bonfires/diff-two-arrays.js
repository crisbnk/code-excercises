// DIFF TWO ARRAYS - Bonfire excercise on FreeCodeCamp
// Compare two arrays and return a new array with any items not found in both of the original arrays.

function diff(arr1, arr2) {
  var newArr = [];
  var i = 0;
  var res = [];
  
  if (arr1.length !== 0 && arr2.length !== 0) {
    newArr = arr2.concat(arr1);
    newArr.sort();
    while (i < newArr.length) {
      if (newArr[i] !== newArr[i+1]) {
        res[res.length] = newArr[i];
        i++;
      } else {
        i += 2;
      }
    }  
  } else if (arr1.length === 0 && arr2.length === 0) {
    res = [];
  } else if (arr1.length === 0) {
    res = arr2;
  } else {
    res = arr1;
  }
  
  return res;
}
