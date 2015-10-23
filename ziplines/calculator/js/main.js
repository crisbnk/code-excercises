$(document).ready(function() {

  var firstNum = 0;
  var secondNum = 0;
  var execute = null;
  var writeNum = false;
  var res = null;
  var temp = 0;
  var pointClicked = false;
  var calcIsOn = false;

  // Button animation on click
  $('button').on('click', function() {
    $(this).addClass('push');
    setTimeout(function() {
       $('button').removeClass('push');
   }, 200);
  })

  // Button animation on click
  $('#onOff').on('click', function() {
    $(this).addClass('switchOnOff');
    setTimeout(function() {
       $('button').removeClass('switchOnOff');
   }, 200);
  })

  // On/Off button
  $('#onOff').on('click', function() {
    if(!calcIsOn) {
      switchOn();
    } else {
      switchOff();
    }
  })

  // When a number is clicked
  $('.num').on('click', function() {
    var thisNum = parseInt($(this).attr('name'));
    if(calcIsOn) {
      // If any number other than 0 is printed on the screen and if 0 is clicked, nothing happens
      if(thisNum === 0 && !writeNum) {
        temp = 0;
        // The number 0 is printed on the screen
        $('#screen').html(temp);
      }
      // Check if writeNum is false to start typing a new number
      else if(thisNum !== 0 && !writeNum) {
        // Then writeNum is true because the user continue tu insert the number
        writeNum = true;
        // When a button is clicked, add the value on a temp var
        temp = $(this).html();
        // The number clicked is printed on the screen
        $('#screen').html(temp);
      }
      else if(writeNum) {
        // When a button is clicked, add the value on a temp var
        temp = $(this).html();
        // The number clicked is appended on the screen next to the others
        $('#screen').append(temp);
      }
    }
  })

  // Point button can be clicked once for each number
  $('#point').on('click', function() {
    if(calcIsOn) {
      if(!pointClicked && !writeNum) {      // If the point button is clicked before all the other numbers, put a 0 before it
        temp = $(this).html();
        $('#screen').html("0" + temp);
      } else if (!pointClicked) {
        temp = $(this).html();
        $('#screen').append(temp);
      }
      pointClicked = true;
      writeNum = true;
    }
  })

  // When an operation button is clicked
  $('.ops').on('click', function() {
    opClicked();
    // Call the last function (inside execute) on secondNum (older) and firstNum
    switch (execute) {
      case "sum":
        res = sum(secondNum, firstNum);
        // Draw the result of the previous operation on the screen
        $('#screen').html(res);
        // Store the result of the previous operation inside firstNum
        insertNum(res);
        break;
      case "subtr":
        res = subtr(secondNum, firstNum);
        $('#screen').html(res);
        insertNum(res);
        break;
      case "mult":
        res = mult(secondNum, firstNum);
        $('#screen').html(res);
        insertNum(res);
        break;
      case "divide":
        res = divide(secondNum, firstNum);
        $('#screen').html(res);
        if(res !== "error!") {
          insertNum(res);
        } else {
          $('#screen').html(res);
        }
        break;
    }

    // Save the operation clicked inside execute variable
    execute = $(this).attr('name');
  })

  // When AC is clicked, call allClear function
  $('#ac').on('click', function() {
    if(calcIsOn) {
      allClear();
    }
  })

  // When CE is clicked, call clearElement function
  $('#ce').on('click', function() {
    if(calcIsOn) {
      clearElement();
    }
  })

  // When percent button is clicked call percent on the value on the screen
  $('#percent').on('click', function() {
    if(calcIsOn) {
      opClicked();
      var temp = $('#screen').html();
      res = percent(temp);
      $('#screen').html(res);
    }
  })

  // When +/- button is clicked, change the sign of the number
  $('#sign').on('click', function() {
    if(calcIsOn) {
      changeSign();
    }
  })

  // If an operation is clicked do this settings
  function opClicked() {
    // Set new step to write numbers on the screen
    writeNum = false;
    storeNumber();
    // Restore default value for pointClicked
    pointClicked = false;
  }

  // The number on the screen is stored in firstNum
  function storeNumber() {
    var temp = $('#screen').html();
    screenNum = parseFloat(temp);
    insertNum(screenNum);
  }

  // This function take change the value of firstNum in a given number and the value of secondNum in firstNum
  function insertNum(x) {
    secondNum = firstNum;
    firstNum = x;
  }

  // Clear the last insert number
  function clearElement() {
    $('#screen').html('0');
    writeNum = false;
  }

  // Clear all the operations and restore the default value of the variables
  function allClear() {
    firstNum = 0;
    secondNum = 0;
    execute = null;
    writeNum = false;
    $('#screen').html(firstNum);
  }

  // If the sign of the number is positive change it in negative and viceversa
  function changeSign() {
    var numScreen = $('#screen').html();
    var firstDigit = numScreen.substr(0, 1);
    if(firstDigit === "-") {
      numScreen = numScreen.substr(1);
      $('#screen').html(numScreen);
    } else {
      $('#screen').prepend("-");
    }
  }

  // Switch off the calculator
  function switchOn() {
    calcIsOn = true;
    allClear();
  }

  // Switch off the calculator
  function switchOff() {
    calcIsOn = false;
    $('#screen').html('');
  }

  // MATH OPERATIONS

  // Sum two numbers
  function sum(a, b) {
    return a + b;
  }

  // Subtract two numbers
  function subtr(a, b) {
    return a - b;
  }

  // Multiply two numbers
  function mult(a, b) {
    return a * b;
  }

  // Divide two numbers
  function divide(a, b) {
    if(b !== 0) {
      return a / b;
    } else {
      return "error!";
    }
  }

  // Percent
  function percent(x) {
    return x / 100;
  }
});
