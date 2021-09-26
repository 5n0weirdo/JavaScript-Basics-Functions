// a function(isEven) which takes a sungle numeric argument and returns
// true if the function is even, and false otherwise:
function isEven(num) {
  // return true if even
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
var value = 8;
var even = isEven(value);
console.log(even);
