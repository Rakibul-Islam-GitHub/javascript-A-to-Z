/* Recursion is a process of calling itself. 
A function that calls itself is called a recursive function.
A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
Once the condition is met, the function stops calling itself. This is called a base condition.
*/
// program to count down numbers to 0
function countDown(n) {

    console.log(n);
    
    if (n>0) {
        
        countDown(n-1);
    } 
}

countDown(12);


// program to find the factorial of a number using recursion

function factorial(num) {
    //console.log(fac)
    if (num==0) {
        return 1;
        
    }
    else{
        return (num* factorial(num-1));
    }
}

console.log('factorial : '+ factorial(3));
