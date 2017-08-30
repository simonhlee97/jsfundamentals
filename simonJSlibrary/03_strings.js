/*
Simon Lee
JS Library Project
8/30/2017
03_strings.js

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"
In statements involving other operators, JavaScript does not convert numeric values to strings. For example:

'37' - 7 // 30
'37' + 7 // "377"


*** Converting strings to numbers
In the case that a value representing a number is in memory as a string, there are methods for conversion.

parseInt()
parseFloat()

'2.2' + '2.2' = '2.22.2'  // 2 strings concatenated
(+'1.1') + (+'1.1') = 2.2   // +'1.1' is equal to 1.1 and has been converted to Number
// Note: the parentheses are added for clarity, not required.

*** Literals
Literals are Fixed values (not variables)
-array literals: an array of fixed values. Array literals are also Array objects.

-boolean literals:
The Boolean type has two literal values: true and false. Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type. 

-floating-point literals
A floating-point literal can have the following parts:
	A decimal integer which can be signed (preceded by "+" or "-"),
	A decimal point ("."),
	A fraction (another decimal number),
	An exponent.
examples:
	3.1415926
	-.123456789
	-3.1E+12
	.1e-23

-integers
examples of integer literals:
	0, 117 and -345 (decimal, base 10)
	015, 0001 and -0o77 (octal, base 8) 
	0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
	0b11, 0b0011 and -0b11 (binary, base 2)

-object literals
An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). You should not use an object literal at the beginning of a statement. This will lead to an error or not behave as you expect, because the { will be interpreted as the beginning of a block.

-RegExp literals
A regex literal is a pattern enclosed between slashes. The following is an example of an regex literal.
example:
var re = /ab+c/;

-String literals:
A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation marks. The following are examples of string literals:
'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"

