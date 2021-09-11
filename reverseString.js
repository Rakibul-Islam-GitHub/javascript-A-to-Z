let str = 'Rakibul';
let newstr=[];
for (let i = str.length-1; i >= 0; i--) {
  let str2= str[i];
  
  newstr.push(str2);
}
let str3="";
for (let i = 0; i <newstr.length; i++) {
   
   str3= str3 + newstr[i];

}
console.log(str3.toLowerCase());  // lubikar


// WITHOUT USING ARRAY

let str2 = '';
for (let i = 0; i < str.length; i++) {
  str2 = str[i] + str2;
}
console.log(str2.toLowerCase()); // lubikar