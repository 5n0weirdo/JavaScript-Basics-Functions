function doMath() {
  // inside scope:
  var x = 40;
  console.log(x)
}
doMath();

// outside scope:
var x = "hello";
console.log(x)

// declared y in global scope:
var y = 99;
function moreMath() {
  y = 100;
  console.log(y)
}
moreMath();

var phrase = "Hi there,";
function greet(name) {
  var phrase = "Goodbye"
  console.log(phrase + " " +name)
}
greet("Developer");
