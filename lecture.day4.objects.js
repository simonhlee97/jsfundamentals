// Objects

// Example 1
let food2 = {
	pies: ['cherry', 'pumpkin', 'pear', 'apple']
}
console.log(food2.pies[3] + " example 1 pie");

// Example 1 challenge: Iterate thru the pie array and print out each pie, and add 'pie' to them using the forEach() method

food2.pies.forEach(function(i) {
	console.log (i + ' pie');
})

let food = {
	pies: ['american', 'nasty', 'cobbler', 'peach'],
	newArray: [],
	getPies: function() {
		return this.pies; // food object
	},
	pieName: function() {		
		
		this.pies.forEach(function(gg) {
			food.newArray.push(gg + ' pie');
		})
		return food.newArray;
	}
	
}
// console.log(food.pies);
// console.log(food.getPies()); //functions inside an object are methods

//create a method inside of the object food that appends ' pie' to the different pies in the array, and add each pie to a new array in the food object
console.log(food.pieName());

