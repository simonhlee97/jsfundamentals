//Arrays

let	students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jack', 'Perry']];

console.log(typeof(students));

var platypus = students[6][1];

console.log("Hello " + platypus + " the platypus"); //this is just 1 string because of concatenation

console.log('Hello',students[6][1],"the platttt"); //this is 3 separate arguments so 3 strings

console.log(students[0], students[1]);


let arrFood = ['pizza', 'pasta', 'corn', 'burger', 'ice cream'];

for (let i = 0; i<arrFood.length; i++) {
	console.log(arrFood[i]);
};

// PUSH function will append to the end of the arry
arrFood.push('Ny Style pizza');
console.log(arrFood);

// SPLICE function: index start at | how many to cut | what you want to replace it with
arrFood.splice(1, 0, 'cherries');
console.log(arrFood);

//callback functions     (value, index)
arrFood.forEach(function(foodItem, banana) {
	console.log(banana)
	console.log(foodItem)
})
