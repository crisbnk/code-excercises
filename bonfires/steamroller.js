// STEAMROLLER - Bonfire excercise on FreeCodeCamp
// Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  var inp = arr;
  var out = [];
  
  while(arrayCheck(inp)) {
    if(arrayCheck(inp)) {
      iterate(inp,out);
      inp = out;
      out = [];
    }
  }
  return inp;
}

function extract(fromArr, toArr) {
  while (fromArr.length > 0) {
    toArr.push(fromArr.shift());
  }
}

function iterate(enter,exit) {
  while(enter.length > 0) {
    if(Array.isArray(enter[0])){
      var temp = enter.shift();
      extract(temp,exit);
    } else {
      exit.push(enter.shift());
    }
  }
}

function arrayCheck(arrToCheck) {
  var res = arrToCheck.some(function(arrElem){
    return Array.isArray(arrElem);
  });
  return res;
}
