/*
Simon Lee
JS Library Project
8/30/2017
04_booleans.js

The Boolean object is an object wrapper for a boolean value.

Syntax:
	new Boolean([value])







Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement.

var x = new Boolean(false);
if (x) {
  // this code is executed
}

This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:

var x = false;
if (x) {
  // this code is not executed
}

Do not use a Boolean object to convert a non-boolean value to a boolean value. Instead, use Boolean as a function to perform this task:

var x = Boolean(expression);     // preferred
var x = new Boolean(expression); // don't use
If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.

var myFalse = new Boolean(false);   // initial value of false
var g = new Boolean(myFalse);       // initial value of true
var myString = new String('Hello'); // string object
var s = new Boolean(myString);      // initial value of true

Properties

Boolean.length
	Length property whose value is 1.

Boolean.prototype
	Represents the prototype for the Boolean constructor.

Methods
	While the global Boolean object contains no methods of its own, it does inherit some methods through the prototype chain:

Boolean instances
	All Boolean instances inherit from Boolean.prototype. As with all constructors, the prototype object dictates instances' inherited properties and methods.
	Boolean.prototype.constructor
		Returns the function that created an instance's prototype. This is the Boolean function by default.

Example1: Creating Boolean objects with an initial value of false
	var bNoParam = new Boolean();
	var bZero = new Boolean(0);
	var bNull = new Boolean(null);
	var bEmptyString = new Boolean('');
	var bfalse = new Boolean(false);

Example2: Creating Boolean objects with an initial value of true
	var btrue = new Boolean(true);
	var btrueString = new Boolean('true');
	var bfalseString = new Boolean('false');
	var bSuLin = new Boolean('Su Lin');
	var bArrayProto = new Boolean([]);
	var bObjProto = new Boolean({});

