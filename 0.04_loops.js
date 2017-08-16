// Loops

// for Loop
for (var i = 0; i<10; i++) {
	console.log(i);
}

// problem1: use a FOR loop to print all odd numbers to 20
for (i=1; i <= 20; i += 2) {
	console.log(i)
}

// while Loop -- put a Boolean expression inside the parentheses
//initialize counter variable first
var j=0;
while (j<5) {
	j += 1;
	console.log(j)
}
// challenge: create a while loop that counts to 100 by 10s
var j=0;
while (j<100) {
	j += 10;
	console.log(j);
}

// for in loop
var studentName = "smita";
var capSN = "";
for ( var l in studentName) {
	if (l == 0) {
		capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}
console.log(capSN);

// do while loop (runs at least once)