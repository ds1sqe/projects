//              Data Types

// let message;

// message = "hello there";

// let user = "ds1sqe",
//     age = 23;

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "00F";
// const COLOR_ORANGE = "#ff7f00";

// let color = COLOR_ORANGE;
// alert(color);

// let admin, name;
// name = "John";

// admin = name;

// // alert(admin);

// let ourPlanetName = "Earth";

// let currentUserName = "John";

// let str = "Hello";

// let str2 = "Single quotos";

// let phrase = `embed with another ${str}`;

// alert(`${str},${name}`);

// let nullChecked = true;

// let isGreater = 3 > 1;

// let nullValue = null;

// let age = undefined;

// let userName = prompt("What is your name", "name");
// alert(userName);

//              TYPE Conversions

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// let str = "123";

// let num = Number(str);

// let a = 1,
//     b = 1;

// let c = ++a;
// //c=2

// let d = b++;

// //d = 1

// let a = 2;

// let x = 1 + (a *= 2);

// // A = 4
// // X = 5o

// ////
// // ...let a = prompt
// alert(+a + +b);

//              Comparisons

// alert("" == false);

// let officialName = prompt('What is the "Official" Name of JavaScript', "name");

// if (officialName == "ECMAScript") {
//     alert("Right");
// } else {
//     alert('You don`t Know?? "ECMAScript!"');
// }

// let Number = prompt("Number?", "");
// let Output;
// if (Number > 0) {
//     Output = 1;
// } else if (Number == 0) {
//     Output = 0;
// } else {
//     Output = -1;
// }
// alert(Output);

// let result;

// result = a + b < 4 ? (result = "Below") : (result = "Over");

// let message =
//     login == "Employee"
//         ? "Hello"
//         : login == "Director"
//         ? "Greeting"
//         : login == ""
//         ? "no login"
//         : "";

//          Logical operators

// if (!(age >= 14 && age <= 90));
// if (age < 14 || age > 90);

// let user = prompt("Who`s there?", "");

// if ((user = "Admin")) {
//     inputPasswd = prompt("Password?", "");
//     if (inputPasswd === "TheMaster") {
//         alert("Welcome!");
//     } else if (inputPasswd === "" || inputPasswd === null) {
//         alert("canceled");
//     } else {
//         alert("Wrong password");
//     }
// } else if (userName === "" || userName === null) {
//     alert('Canceled');
// } else {
//     alert("I dont know you");
// }

//          Loops

// for (let numbers = 2; numbers<11; numbers++ )   {
//     if((numbers%2)==0) alert(numbers);
// }
// let i = 0;

// while(i<=3){
//     alert(`numbers ${i}!`);
//     i++;
// }

// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// outer: for (let i = 0;i<3;i++)  {
//     for (let j=0; j<3;j++) {
//         let input = prompt(`Value at coords (${i},${j})`,'');
//         if (!input) break outer;
//     }
// }
// alert('Done');

//          Function

// function checkAge(age){

//     return (age >18) ? true : confirm("Did parents allow you");
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }

// function min(a,b) {
//    return (a >= b) ? b : a;
// }

// function pow(x,n) {

//     let output = x;
//     for (let count = 0 ; count > n ; count++) {
//         output *= x;
//     }
//     return output;
// }

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
//   return 1;
// };

// ask(
//   "Do you agree?",
//   () => alert("you agreed."),
//   () => alert("you canceled the excution")
// );

