/*
Simon Lee
JS Library Project
8/30/2017
06_functions.js

A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function, as shown in the following example:

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

*** Function Declarations
function nameOfFunction(parameters){
	statements
}

*** Function Expressions
can be anonymous.
Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function being defined and then called with an expression function as its first parameter:
function map(f, a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}

a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:

var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}

Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows:

square(5);
The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.

Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:

console.log(square(5));

function square(n) { return n * n; }
The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.



This works only when defining the function using the above syntax (i.e. function funcName(){}). The code below will not work. That means, function hoisting only works with function declaration and not with function expression.
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) { 
  return n * n; 
}


// class notes and modules

// Bronze Challenge:
// Write a function with two parameters, city & state.
// Inside the function concatenate the two parameters into a single string and print to the console.
// When you run the function, it should print a sentence that says where a person is from. For example,
		
// I am from Westfield, Indiana.

function home(city, state) {
	
	console.log("I am from " + city + ' ' + state);
}
home('carmel', 'Indiana');

// SILVER:
// Write a function that will help a person easily calculate monthly bills such as water, power, rent, netflix, etc.
// When we run the function, it should print the total to the console with a pretty message. For example,
	
// 		I will pay $850.00 in bills this month

function calcBills (water, power, rent, netflix) {
	var totalBill = water + power + rent + netflix;
	console.log(totalBill);
}
calcBills(5, 2, 40, 10);

