// EXACT CHANGE - Bonfire excercise on FreeCodeCamp
// Design a cash register drawer function that accepts purchase price as the first argument,
// payment as the second argument, and cash-in-drawer (cid) as the third argument.
// cid is a 2d array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
// Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function drawer(price, cash, cid) {
  var cashInDrawer = {
    "ONE HUNDRED": 100.00,
    "TWENTY": 20.00,
    "TEN": 10.00,
    "FIVE": 5.00,
    "ONE": 1.00,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }

  var changeDue = totalChange(price, cash);
  var arr = [];
  var tempDue = changeDue;
  var count = 0;
  var resto = 0;
  
  for(var key in cashInDrawer) {
    var tempArr = [];
    var cashNeeded = divisionRes(parseFloat(tempDue.toFixed(2)), cashInDrawer[key]);
    var money = cashNeeded * cashInDrawer[key];
    var insideCash = search(key, cid);
    if(money <= insideCash && money !== 0 && insideCash !== 0) {
      var difference = insideCash - money;
      tempArr = [key, money];
      arr.push(tempArr);
      tempDue = tempDue - money;
      resto += difference;
    } else if(money > insideCash && insideCash !== 0 && key !== "PENNY") {
      tempArr = [key, insideCash];
      arr.push(tempArr);
      tempDue = tempDue - insideCash;
    }
  }
  
  if(tempDue > 0) {
   return "Insufficient Funds";
  } else if(tempDue === 0 && resto === 0){
   return "Closed";
  } else {
    return arr;
  }

}

function totalChange(priceDue, totalCash) {
  return totalCash - priceDue;
  
}

function divisionRes(first, second) {
  var res = first / second;
  return Math.trunc(res);
}

function search(name, arr) {
  for(var i = 0; i < arr.length; i++) {
    if(name === arr[i][0]) {
      return arr[i][1];
    }
  }
}

function compare(num1, num2) {
  if(num1 === num2) {
    return true;
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
