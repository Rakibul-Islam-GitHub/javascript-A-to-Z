// instead of using the single quotes or double quotes, a template literal uses backticks as shown in the following example:

let str = `Using Template literal in ES6`;

console.log(str);// Template literal in ES6
console.log(typeof str);// string
console.log(str.length); // 29

let p =
`This text
can
span multiple lines`;     // multiline string
console.log(p);

// it allows us to use string and variable at a time without using + sign..
let firstName = 'John',
    lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe



