// Using var, variables are function-scoped because their visibility is limited to the function. When we try to use it outside of the function, we’ll get an error:

function myFunc() {
    var foo = 'peekaboo!';
    
    console.log(foo); // 'peekaboo!'
  }
  myFunc();
//   console.log(foo); // ReferenceError: foo is not defined
// ***********

// var does not work only on function scoped but works fine into block scope like below:
var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead";
// *************  end of var examples***********


// let is block scoped!! So a variable declared in a block with let  is only available for use within that block.. but initial a bariable top of the block can be access & updated into the block.
// let can be updated but not re-declared.
let greeting = "say Hi";
   let x = 4;

   if (x > 3) {
        let hello = "say Hello";
        console.log(hello);// "say Hello"
        greeting='changed';   // updated the value but if I would used let greeting=' something'; again then it would redeclare the value again.. and in outside of block it would show 'say Hi'in console log.
        console.log(greeting);  // changed
    }
  // console.log(hello) // error- hello is not defined
  console.log(greeting);  // changed
// **************


let y='first';
function myFunc() {
    let y = 'let example!';
    
    console.log(y); 
  }
  myFunc(); // 'let example!'
  console.log(y); // 'first'
// *************  end of let examples***********



//  Similar to let, const is block-scoped, however, const cannot be updated / reassigned or re-declared.
const greeting2 = "say Hi from const";
   const x2 = 4;

   if (x2 > 3) {
        const hello2 = "say Hello from const";
        console.log(hello2);// "say Hello"
        //greeting2='changed';   // error
        console.log(greeting2);  // sya Hi
    }
  // console.log(hello2) // error- hello is not defined
  console.log(greeting2);  // changed