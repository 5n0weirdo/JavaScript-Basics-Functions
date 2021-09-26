// function declaration:
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
capitalize("yeesss")

// function expression:
var capital = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
capital("noooo");
console.log(capital);
