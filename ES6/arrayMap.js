let students= [
    {id: 15, name:'Rakibul'},
    {id: 16, name:'Jhon'},
    {id: 17, name:'Jane'}
];

const studentName=[];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     studentName.push(element);
// }

const result= students.map((x)=>x.name);

const friends=['Rakibul', 'John', 'Jane'];
const result2= friends.map((element) => {
  return element;
});

console.log(result);
console.log(result2);