let fname = "Jaz";
let lname = "F ";
let age = prompt("Guess Jaz's age...");

//old way
// let result = fname + " " + lname + " " + age + " years old";
// alert (result);

//using template string
let result = `${fname} ${lname} is ${age} years old`;
alert(result);