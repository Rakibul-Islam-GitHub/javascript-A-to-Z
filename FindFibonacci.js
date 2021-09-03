// The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. 
// finding the fibonacci upto the certain number...

function fibonacci(num) {
    let fib=[0,1];
    let sum=1;
    for (let i = 1; i < num; i++) {

        if (fib[fib.length-1]<=num) {
            sum= fib[fib.length-1]+ fib[fib.length-2];
            fib.push(sum);
        } else {
            if (fib[fib.length-1]>num) {
                fib.pop();
                return fib;
            }
            
        }
        
        
        
    }
    return fib;
}

console.log(fibonacci(100));