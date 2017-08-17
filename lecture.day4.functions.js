// Functions

function greeting (name, age) {
	console.log("My name is " + name + " and I am " + age + " years old");
}
greeting ('simon', 33);

//understand the difference between parameters and arguments

function sum(num1, num2) { //parameters
	console.log(num1 + num2);
}
sum(12, 23); //arguments

// local variables vs global variables

function hello(fname) {
	lname = "kjhwef";
	console.log(fname + lname);
}
// console.log(lname);  // JS will auto declare lname as a variable because Line 20 - the variable is hoisted to the Global scope
// hello("ThTHTHTHT");

// if ( 1 == 1) {
// 	let sum = 1 + 1
// 	console.log(sum);  //2
// }
// console.log(sum); // error

// create a function called captialize() and use the for loop we created yesterday to capitalize names
function capitalize (name5) {
	var newName = "";
	for ( var l in name5) {
		if ( l == 0) {
			newName = name5[l].toUpperCase();
		} else {
			newName += name5[l];
		}
	}
	return newName; //returns the data output and exits out of the function
}
console.log(capitalize("simon"));  //Simon


// void functions

// functions with parameters