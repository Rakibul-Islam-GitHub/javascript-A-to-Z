function primeNumber(num) {
    for (let i = 2; i < num/2; i++) {
        if (num%i==0) {
            return true;
        }
        else
        return false;
        
    }
}

let num=23;
if (primeNumber(num)) {
    console.log(num+ ' is not a prime number!');
}
else
console.log(num+ ' is a prime number!');
