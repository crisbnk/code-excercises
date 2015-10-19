// VAR DECLARATION

var workTime = document.getElementById('workTime');
var breakTime = document.getElementById('breakTime');
var reverseMin = document.getElementById('reverseMin');
var reverseSec = document.getElementById('reverseSec');

var min = getMinutes(workTime.value);
var sec = getSeconds(workTime.value);

var tempWork = workTime.value;
var tempBreak = breakTime.value;

var stopTime = null; // Var for setInterval-clearInterval

var timeRun = false; // Check if reverse-counter is running

reverseMin.value = min;
reverseSec.value = sec;

// When button #chronoBtn is clicked, the reverse count starts or stops
document.getElementById("chronoBtn").addEventListener("click", function() {
  if(!timeRun) {
    timer();
    document.getElementById("chronoBtn").innerHTML = "STOP";
    timeRun = true;
  } else {
    clearInterval(stopTime);
    document.getElementById("chronoBtn").innerHTML = "START!";
    timeRun = false;
  }
});

// Increment #workTime
function plusWork() {
  var tempPlusWrk = parseInt(workTime.value); // Check the workTime

  tempPlusWrk++;                              // Increment workTime by 1
  workTime.value = tempPlusWrk;               // Assign workTime to #workTime
  tempWork = tempPlusWrk * 60;

  reverseMin.value = tempPlusWrk;             // Assign workTime to #reverseMin
  reverseSec.value = 0;                    // Assign 0 to #reverseSec
}

// Increment #breakTime
function plusBreak() {
  var tempPlusBrk = parseInt(breakTime.value); // Check the breakTime

  tempPlusBrk++;                              // Increment breakTime by 1
  breakTime.value = tempPlusBrk;               // Assign breakTime to #breakTime
  tempBreak = tempPlusBrk * 60;
}

// Decrement #worktime
function minusWork() {
  var tempMinusWrk = parseInt(workTime.value); // Check the workTime

  if(tempMinusWrk > 0) {
    tempMinusWrk--;                              // Decrement workTime by 1
    workTime.value = tempMinusWrk;               // Assign workTime to #workTime
  }

  tempWork = tempMinusWrk * 60;

  reverseMin.value = tempMinusWrk;             // Assign workTime to #reverseMin
  reverseSec.value = 0;                     // Assign 0 to #reverseSec
}

// Decrement #breaktime
function minusBreak() {
  var tempMinusBrk = parseInt(breakTime.value); // Check the breakTime

  if(tempMinusBrk > 0) {
    tempMinusBrk--;                              // Decrement breakTime by 1
  }

  breakTime.value = tempMinusBrk;               // Assign breakTime to #breakTime
  tempBreak = tempMinusBrk * 60;
}

// Calculate minutes
function getMinutes(num) {
  return Math.trunc(num / 60);              // Divide by 60 to find minutes
}

// Calculate seconds
function getSeconds(num) {
  return num % 60;                          // Remainder of division by 60 to find the seconds
}

// This function make the reverse count
function timer() {
  stopTime = setInterval(function() {
      decrease();
      revCounter();
  }, 1000);
}

// This function decrease the workTime
function decrease() {

  var tempMin = 0;
  var tempSec = 0;

    if(tempWork > 0) {
      tempMin = getMinutes(tempWork);
      tempSec = getSeconds(tempWork);
      tempWork--;
    } else if(tempWork <= 0){

      if(tempBreak > 0) {
        tempMin = getMinutes(tempBreak);
        tempSec = getSeconds(tempBreak);
        tempBreak--;
      } else if(tempBreak <= 0){
        tempWork = workTime.value * 60;
        tempBreak = breakTime.value * 60;
      }

    }

  reverseMin.value = tempMin;
  reverseSec.value = tempSec;
}

// REVERSE-COUNTER CLOCK MADE WITH CANVAS

// Set canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var radius = canvas.height / 2;
ctx.translate(radius, radius); // Move to the center of the canvas
radius = radius * 0.90

// Set the reverse-counter clock
revCounter();

function revCounter() {
  chronoBkg(ctx, radius);
  chronoNbr(ctx, radius);
  chronoTime(ctx, radius);
  chronoCenter(ctx, radius);
}

// Set the background of the reverse-counter clock
function chronoBkg(ctx, radius) {
  var colorBkg = '#fff';
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  if(tempBreak >= breakTime.value * 60) {
    colorBkg = '#B52E26';
  } else {
    colorBkg = '#849AC4';
  }
  ctx.fillStyle = colorBkg;
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.stroke();
}

// Set numbers on the chrono display
function chronoNbr(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px bangers";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = '#000';
  // Set numbers from 00 to 55
  for(num = 0; num < 12; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, - (radius * 0.85));
    ctx.rotate(- ang);
    ctx.fillText(num.toString() * 5, 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(- ang);
  }
}

// Set the time checking from #reverseMin and #reverseSec
function chronoTime(ctx, radius){
  var minute = reverseMin.value;
  var second = reverseSec.value;
  // Set seconds with chronoHands function
  second = (second * Math.PI/30);
  chronoHandsSec(ctx, second, radius * 0.75, radius * 0.02);
  // Set minutes with chronoHands function
  minute = (minute * Math.PI / 30) + (second * Math.PI/(30 * 60));
  chronoHandsMin(ctx, minute, radius * 0.6, radius * 0.07);
}

// Set the hands (seconds) of the chrono
function chronoHandsSec(ctx, pos, length, width) {
  var colorSec = '#000';
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  if(tempBreak >= breakTime.value * 60) {
    colorSec= '#112B5F';
  } else {
    colorSec = '#D3D347';
  }
  ctx.strokeStyle = colorSec;
  ctx.stroke();
  ctx.rotate(-pos);
}

// Set the hands (minutes) of the chrono
function chronoHandsMin(ctx, pos, length, width) {
  var colorMin = '#000';
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  if(tempBreak >= breakTime.value * 60) {
    colorMin= '#D3D347';
  } else {
    colorMin = '#B52E26';
  }
  ctx.strokeStyle = colorMin;
  ctx.stroke();
  ctx.rotate(-pos);
}

// Set the internal little circle
function chronoCenter(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = '#000';
  ctx.fill();
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 1.5;
  ctx.stroke();
}
