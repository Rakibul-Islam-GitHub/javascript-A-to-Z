let greeting= ()=>  'Good morning!';
console.log(greeting());

let add= (x,y)=> x+y;
console.log(add(10,5));

let getSquare = (x)=>{
    return x*x;
};
console.log(getSquare(5));

let fitToMile = (ft)=>{
    let result= (ft * 0.000189394).toFixed(2);  //Convert a number, rounding to nearest integer 2 decimal point
    // return result;
    console.log(`${result} mile`);
}
fitToMile(528);