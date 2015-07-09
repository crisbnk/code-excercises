// MAKE A PERSON - Bonfire excercise on FreeCodeCamp
// Fill in the object constructor with the methods specified in the tests.
// Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first),
// setLastName(last), and setFullName(firstAndLast).
// All functions that take an argument have an arity of 1, and the argument will be a string.
// These methods must be the only available means for interacting with the object.

var Person = function(firstAndLast) {
  var fullNameArr = firstAndLast.split(" ");
  var fullName = firstAndLast;
  
  this.getFirstName = function(){
    return fullNameArr[0];
  };
  
  this.getLastName = function(){
    return fullNameArr[1];
  };
  
  this.getFullName = function(){
    return fullName;
  };
  
  this.setFirstName = function(first){
    fullNameArr[0] = first;
  };
  
  this.setLastName = function(last){
    fullNameArr[1] = last;
  };
  
  this.setFullName = function(newFirstAndLast){
    fullName = newFirstAndLast;
  };
  
};
