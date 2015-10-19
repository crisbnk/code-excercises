// DNA PAIRING - Bonfire excercise on FreeCodeCamp
// The DNA strand is missing the pairing element.
// Match each character with the missing element and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.

function pair(str) {
  var basePairs = {
    pair1: ["A", "T"],
    pair2: ["T", "A"],
    pair3: ["C", "G"],
    pair4: ["G", "C"]
  },
      temp = [],
      res = [];
  
  temp = str.split("");
  
  for (var i = 0; i < temp.length; i++) {
    for (var key in basePairs) {
      if (basePairs[key][0] === temp[i]) {
        res.push(basePairs[key]);
      }
    }
  }
  
 return res;
}
