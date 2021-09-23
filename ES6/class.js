class User {
    constructor(name) {
        let task= "my task";
         this.myName = name; 
        //  console.log(name);
        this.task= task;
        // console.log(task);
        }
    getName() {
        return this.myName;
    }
    getTask(){
        console.log(this.task);
    }
    
  }
  
  // class is a function
  console.log(typeof User); // function
  
  // ...or, more precisely, the constructor method
  console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  console.log(User.prototype.getName); // the code of the getName method
  
  let user= new User('Rakibul');
  console.log(`Hi, ${user.getName()}`);  // 'Hi, Rakibul'  -using template literals
  console.log(user.myName); // Rakibul   this will also access the variable from class..
  user.getTask();  // my task


//adding new property to class without let const
  class User2 {
    name = "John";  //new property name
//   constructor(){
//       this.name='New name';
//   }
    sayHi() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  new User2().sayHi(); // Hello, John!