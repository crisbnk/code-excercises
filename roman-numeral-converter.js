// ROMAN NUMERAL CONVERTER - Bonfire excercise on FreeCodeCamp
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convert(num) {
  var romNum = ["I", "X", "C", "M"];
  var romNum2 = ["V", "L", "D"];
  var sNum = num.toString();
  var test = sNum.split("");
  var goal = [];
  
  function repeat (str, rep) {
    var res = "";
    if (rep >= 0) {
      for (var i = 0; i < rep; i++) {
        res += str;
      }
    }
    return res; 
  }
  
  for (var i = 0; i < test.length; i++) {
    test[i] = parseInt(test[i], 10);
  }
  
  test = test.reverse();
  
  for (var j = 0; j < test.length; j++) {
    var temp = repeat(romNum[j], test[j]);
    if (temp.length == 5) {
      temp = romNum2[j];
    }
    else if (temp.length > 5 && temp.length < 9) {
      var rem = (temp.length) % 5;
      var temp2 = repeat(romNum[j], rem);
      temp = romNum2[j] + temp2;
    }
    else if (temp.length == 4) {
      temp = romNum[j] + romNum2[j];
    }
    else if (temp.length == 9) {
      temp = romNum[j] + romNum[j + 1];
    }
    
    goal.push(temp);
  }
  
  goal = goal.reverse().join("");
  
 return goal;
}
