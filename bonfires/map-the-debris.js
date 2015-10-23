// MAP THE DEBRIS - Bonfire excercise on FreeCodeCamp
// Return a new array that transforms the element's average altitude into their orbital periods.
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for(var i = 0; i < arr.length; i++) {
    var avgAlt = arr[i].avgAlt;
    var smAxis = earthRadius + avgAlt;
    var orbital = Math.round(2 * Math.PI * Math.sqrt(Math.pow(smAxis, 3) / GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbital;
  }
  
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
