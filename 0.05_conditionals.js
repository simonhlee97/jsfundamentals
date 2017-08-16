var age= Math.floor(Math.random()*100+1);
console.log(age);


if(age<=5) {
	console.log("You are a baby or toddler");
	} else if (age <= 12){
	console.log("You are just a kid");
	} else if (age<=19) {
		console.log("You are a punk teenager");
	} else if (age <=30) {
		console.log("You are a young adult");
	} else {
		console.log("You are quite old");
	};


// Gold Challenge - "FizzBuzz"
for (i=1; i<=100; i++) {
	if (i % 3 === 0 && i%5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
