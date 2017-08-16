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
