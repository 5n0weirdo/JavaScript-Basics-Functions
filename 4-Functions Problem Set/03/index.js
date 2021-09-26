function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;
}
var sen = "hello-world";
var newSen = kebabToSnake(sen);
console.log(newSen);
