// this function capitalizes the first char in a string:
function capitalize(str) {
  // checking if the input is a string:
  if (typeof str === "number") {
    return "That is not a string";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capitalString = capitalize(city);

// print the capitalized string:
console.log(capitalString); //Paris

var num = 38;
var capitalNum = capitalize(num);

console.log(capitalNum); //"That is not a string"
