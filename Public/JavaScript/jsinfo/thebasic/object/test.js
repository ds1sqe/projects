"use strict"

/*
let fruit = prompt("Which fruit to buy?","apple")
let bag =
{
  [fruit]: 5,
};

alert(bag.apple);
*/

/*
function makeUser(name,age)
{
  return {
    name,
    age
  };
}

let user = makeUser("John",30);
alert(user.name);
alert(user.age);
*/

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete"
delete user.name;
*/



/*
    Check For empthiness



let schedule = {};

alert(isEmpty(schedule));  //ture
schedule["8:30"] = "get up";
alert(isEmpty(schedule));  //false

function isEmpty (objects) {
  objects === undefined ? return true : return false;
}

function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

*/

/*
    Return Sum of Object value

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumObjectValue(object){
  let sum = 0;
  for(let key in object) {
    sum += object[key];
  }
  return sum;
}

alert(sumObjectValue(salaries));

*/



/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(object) {
  for(let key in object){
    if (typeof object[key] == 'number') {
      object[key] *= 2
    }
  }
}
*/

/*
let tempMemory = {};
function fibonachi(number) {
  if (number==1 | number==2) {
    return number;
  }
  if (tempMemory[number] !== undefined) {
    return tempMemory[number];
  } // else if Memory === undefined
  tempMemory[number] = fibonachi(number-1)+fibonachi(number-2);
  console.log('Key:'+number+', value: '+tempMemory[number]);
  return tempMemory[number];
}
alert(fibonachi(100));
*/

/*
function makeUser() {
  return {
    name: "John",
    ref: this 
    }
  };
}
*/
// ref:makeUser()

/*
function makeUser() {
  return {
    name: "John",
    ref() {
      return this; // name: "John"
    }
  };
}

let user = makeUser();

// let user = {name : "John", ref() {return this}}
// let user = {name : "John", ref() {name: John}}

alert(user.ref().name);
*/

// let Calculator = {
//   value1 : 0,
//   value2 : 0,
//   // prompts for two values and saves them as object properties
//   read() {
//     this.value1 = +prompt("Value 1 ?",0)
//     this.value2 = +prompt("Value 2 ?",0)
//   },
//   // returns the sum of saved values 
//   sum() {
//     return (this.value1 + this.value2)
//   },
//   //mulitplies saved values and return the result
//   mul() {
//     return (this.value1 * this.value2)
//   }
// };
// 
// 
// Calculator.read();
// alert(Calculator.sum());
// alert(Calculator.mul());
// 
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   }
// };
// ladder.up().up().down().showStep();
// 


// ========== Constructor 

// 
// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }
//   // this = {}
//   // add properties to this
//   this.name = name;
//   this.Admin = false;
//   this.sayHi = function() {
//     alert("My name is: " + this.name);
//   };
//   // return this;
// }
// let user = new User("Jack");
// // let user = {
// //   name = "Jack",
// //   is Admin: false
// // };
// // 
// 
// alert(user.name);
// user.sayHi();
// 
// function BigUser() {
//   this.name = "john";
//   return { name: "Godzilla" };
// }
// 
// alert(new BigUser().name)
// 
// function SmallUser() {
//   this.name = "eric";
//   // return { name: "Mouse"}
//   return "mouse"; // ignored return if the return value is primative
// }
// 
// alert(new SmallUser().name);
// 
// 
// let objectExample = {
//   something: true,
//   number: 5
// };
// 
// function A() {
//   return objectExample;
// }
// function B() {
//   return objectExample;
// }
// 
// let a = new A;
// let b = new B;
// 
// alert(a == b);




// function Calculator() {
// 
//   this.read = function() {
//     this.numberfirst = +prompt("Type first number",);
//     this.numbersecond = +prompt("Type second number",);
//   };
//   this.sum = function() {
//     return (this.numberfirst + this.numbersecond);
//   };
//   this.mul = function() {
//     return (this.numberfirst * this.numbersecond);
//   };
// }
// 
// let calculator = new Calculator();
// 
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
// 

let accumulator = new Accumulator(1);

accumulator.read()
accumulator.read()
//
// alert(accumulator.value)
// 
// function Accumulator(startnumber) {
//   this.value = startnumber;
// 
//   this.read = function() {
//     this.value += +prompt("Add number. ", 0)
//   };
// }
// 
