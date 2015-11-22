// NO REPEATS PLEASE - Bonfire excercise on FreeCodeCamp
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// For example, 'aab' should return 2 because it has 6 total permutations,
// but only 2 of them don't have the same letter (in this case 'a') repeating.

function permAlone(str) {
  var firstArr = [""];
  var secondArr = [];
  var charSliced = "";
  var tempArr = [];
  var numPermutat = 0;
  var numRepeated = 0;
  var res = 0;
  var regex = /(\w)\1+/g;
  
  for(var i = 0; i < str.length; i++) {
    charSliced = str.slice(i, i + 1);
    for(var j = 0; j < firstArr.length; j++) {
      tempArr = insertChar(charSliced, firstArr[j]);
      secondArr = secondArr.concat(tempArr);
    }
    firstArr = secondArr;
    secondArr = [];
  }
  
  numPermutat = firstArr.length;
  
  for(k = 0; k < numPermutat; k++) {
    var temp = [];
    temp = firstArr[k].match(regex);
    if(temp !== null) {
      numRepeated++;
    }
  }
  
  res = numPermutat - numRepeated;
  
  return res;
}

function insertChar(someChar, someStr) {
  
  var finalArr = [];
  var arrJoined = "";
  
  for(var i = 0; i <= someStr.length; i++) {
    var arrFromStr = someStr.split("");
    arrFromStr.splice(i, 0, someChar);
    arrJoined = arrFromStr.join("");
    finalArr.push(arrJoined);
  }
  
  return finalArr;
}

permAlone('abb');
