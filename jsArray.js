// two methods of initializing array

var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);

console.log(myArray);
console.log(theSameArray);

//The indexOf() method returns the first index 
//at which a given element can be found in the array, 
//or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('camel'));
// expected output: 2

//The unshift method is used to insert a variable at the beginning of an array. For example:

var myArray = [1,2,3,4];
myArray.unshift(0);
console.log(myArray);       // will print out 0,1,2,3,4

myArray.push(5);
console.log(myArray);       // will print out 0,1,2,3,4,5



