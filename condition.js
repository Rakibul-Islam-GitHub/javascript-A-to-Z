var age = 18;
var ticketPrice = 0;

if (age <= 10) {
	var ticketPrice = 5;
} else if (age >= 11 && age <= 18) {
var ticketPrice = 8;
} else if (age >= 19 && age <= 64) {
	var ticketPrice = 12;
} else {
	var ticketPrice = 8;}
console.log(ticketPrice);
