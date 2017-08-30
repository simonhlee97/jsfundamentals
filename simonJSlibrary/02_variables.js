/*
javaScript libirary
0.02_variables
by: Simon Lee
Eleven Fifty Academy
Fall 2017


*** 3 ways to declare a variable:
1. var - Declares a variable, optionally initializing it to a value.
2. let - Declares a block-scoped, local variable, optionally initializing it to a value.
3. const - Declares a block-scoped, read-only named constant.

variable names must start with a letter, _, or $

Evaluating variables - examples:

var a;
undefined
no assigned value returns undefined

var c;
c + 2;
< NaN
an undefined value used in numeric context converts to NaN

var n = null;
n * 32;
< 0
a null value is 0 in numeric context and false in boolean context


*** Variable Scope
Declaring a variable outside a function makes it a Global variable and available to any other code in the document. Global variables are properties of the global object.
Declaring a variable in a function makes it a Local variable, and is only available within that function.

with ECMA2015, block statement scope changed. - if let is in the block, but referenced outside the block, it outputs reference error.

if(true) {
	var x=5;
}
console.log(x)
< 5

if(true) {
	let y=5;
}
console.log(y)
< ReferenceError: y is not defined



*** Variable Hoisting
You can refer to a variable declared later because variables are hoisted (lifted) to the top of a function or statement.
Variables that are hoisted will return a value of undefined.
Therefore all var statements in a function should be placed as near to the top of the function as possible.

ES6 - let and const will NOT hoist variables to the top of the block, but will output REFERENCE ERROR if referenced in the block before the declaration.

*** Function Hoisting
For functions, only the function declaration gets hoisted to the top and not the function expression.

Function declaration example:

foo(); // "bar"

function foo() {
  console.log('bar');
}

Function expression example:

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};

*** Constants
Cannot change value through assignment or be re-declared while script is running.
Must be initialized to a value.

// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL CAUSE AN ERROR ALSO
function f() {
  const g = 5;
  var g;

  //statements
}

*** Data Types
6 Primitive Data Types:
-boolean
-null
-undefined
-Number
-String
-Symbol (new in ES6)
and
-Object

JavaScript is a dynamically typed language. That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution.



*/