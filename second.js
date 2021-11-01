var toys = "SIX GLOBAL";
console.log(" the number of toys are " + toys );
var b = function () {
  var toys = "THREE LOCAL";
  console.log(" the number of toys are " + toys ); }
b();
console.log(" the number of toys are " + toys );
