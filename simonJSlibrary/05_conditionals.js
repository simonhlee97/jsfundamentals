/*
Simon Lee
JS Library Project
8/30/2017
05_conditionals.js

Important: JavaScript prior to ECMAScript2015 does Not have block scope. Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not define a scope. "Standalone" blocks in JavaScript can produce completely different results from what they would produce in C or Java. For example:

var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
This outputs 2 because the var x statement within the block is in the same scope as the var x statement before the block

*** Conditional Statements

* if...else
Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:

if (condition) {
  statement_1;
} else {
  statement_2;
}

compound the statements using else if to have multiple conditions tested in sequence, as follows:

if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
} 

--Falsy values
	The following values evaluate to false (also known as Falsy values):
-false
-undefined
-null
-0
-NaN
-the empty string ("")


** switch
---A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement. A switch statement looks as follows:

switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    ...
  default:
    statements_def
    [break;]
}

** Exception Handling Statements
---You can throw exceptions using the throw statement and handle them using the try...catch statements.

* throw statement
Use the throw statement to throw an exception. When you throw an exception, you specify the expression containing the value to be thrown:

throw expression;
You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };


* try...catch statement
The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it.

The try...catch statement consists of a try block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block. That is, you want the try block to succeed, and if it does not succeed, you want control to pass to the catch block. If any statement within the try block (or in a function called from within the try block) throws an exception, control immediately shifts to the catch block. If no exception is thrown in the try block, the catch block is skipped. The finally block executes after the try and catch blocks execute but before the statements following the try...catch statement.

Exception types
---Just about any object can be thrown in JavaScript. Nevertheless, not all thrown objects are created equal. While it is fairly common to throw numbers or strings as errors it is frequently more effective to use one of the exception types specifically created for this purpose:


*** Promises

Starting with ECMAScript2015, JavaScript gains support for Promise objects allowing you to control the flow of deferred and asynchronous operations.

A Promise is in one of these states:

pending: initial state, not fulfilled or rejected.
fulfilled: successful operation
rejected: failed operation.
settled: the Promise is either fulfilled or rejected, but not pending.