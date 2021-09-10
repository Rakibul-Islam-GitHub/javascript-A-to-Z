// swap using temp variable:
let a= 10;
let b=20;
console.log('Before swaping, a=',a, 'b=',b);
let temp=a;
a=b;
b=temp;
console.log('After swaping, a=',a, 'b=',b);

// swap without using temp/3rd variable:
let x=10;
let y=20;
x=x+y;
y= x-y;
x=x-y;

console.log('After swaping, x=',x, 'y=',y);