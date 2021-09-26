// this function capitalizes the first char in a string:
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris" //"paris"
var capital = capitalize(city); //"Paris"

// print the capitalized string
console.log(capital);
