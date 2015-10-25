// SYMMETRIC DIFFERENCE - Bonfire excercise on FreeCodeCamp
// Create a function that takes two or more arrays and returns an array of
// the symmetric difference of the provided arrays.
// The mathematical term symmetric difference refers to the elements in two sets that are in either
// the first or second set, but not in both.

function sym(args) {
  var argArr = [];
  for(var i = 0; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }
  
  var res = argArr.reduce(function(arrA, arrB) {
    var temp;
    if (arrB.length > arrA.length) {
      temp = arrB, arrB = arrA, arrA = temp;
    }
    var tempA = arrA.filter(function (elem) {
        if (arrB.indexOf(elem) === -1) {
          return true;
        }
    });
    var tempB = arrB.filter(function (elem) {
        if(arrA.indexOf(elem) === -1) {
          return true;
        }
    });
  return tempA.concat(tempB);
  });
  
  return res;
}

sym([1, 2, 3], [5, 2, 1, 4]);
