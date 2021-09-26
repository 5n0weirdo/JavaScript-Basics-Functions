// function that calcualtes factorial of a number:
function factorial(num) {
// define a result variable
  var result = 1;
  // calcualte factorial
   for (var i = 2; i <= num; i++) {
     result *= i;
   }
  // return result variable
  return result;
}
var num2 = 6;
var factor = factorial(num2);
console.log(factor);
