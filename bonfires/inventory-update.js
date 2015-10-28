// INVENTORY UPDATE - Bonfire excercise on FreeCodeCamp
// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found,
// add the new item and quantity into the inventory array in alphabetical order.

function replaceElement(firstArr, secondArr) {
  var temp = [];
  for(var i = 0; i < secondArr.length; i++) {
    for(var j = 0; j < firstArr.length; j++) {
      if(secondArr[i] === firstArr[j][1]) {
        temp[i] = firstArr[j];
      }
    }
  }
  return temp;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

inventory(curInv, newInv);
