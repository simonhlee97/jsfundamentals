// GOLD:
// Create a for loop that counts to 10.
// Print each number, 1 through 8.
// But print 9 & 10 as "nine" & "ten"


for (i=1; i<=10; i++) {
	if (i<9) {
		console.log(i)
	} else if (i<10) {
		console.log ("nine")
	} else {
		console.log ("ten")
	}
}