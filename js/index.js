//! <!-- ========== Js Variable & Data type start ========== -->

// & --------------------- Variable---------------------
// *  Variables : Variables are containers for data store.

//* var: var variable can be re-declared & updated .var is a globel scope variable.

//* let: let variable cannot be re-declared but can be update. let is a block scope variable.

//* const: const variable cannot be re-declard or update. const is a block scope variable.

// &------------------- Data types--------------------

// * In js we have 2 types of data types
// 1. Primtive Data type
//^ we have 7 Primitive data type
//^ a.Number
// let age=25;
//^ b.String
// let name="Ram";
//^ c.Boolean
// let isTrue=true;
//^ d.Undefined
// let x;
//^ e.Null
// let y= null;
//^ f.BigInt
// let number=BigInt("123")
// console.log(number);
// console.log(typeof number);
//^ g.Symbol
// let name=Symbol("ram!")
// console.log(name);
// console.log(typeof name);
// 2. Non-Primtive Data type
//^ a.Object
// const student= {
//     name:"Ramkrishna Mahato",
//     roll:14,
// }
// console.log(student);
// console.log(student["name"]);
// console.log(student.name);

// ? 1.excersise
// const product = {
//     name:"Parker Jottered",
//     ratting:4,
//     offer:5,
//     price:270
// }

//! <!-- ========== Operator and Conditional Statement ========== -->

// ? Arithmatic operator

// let a =10;
// let b =20;
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);

// ? Unary Operator
// let a =10;
// let b =20;
// console.log("a + b = ", a+b);
// console.log("a++ = ", a++);
// console.log("a-- = ", a--);

// ? Asignment Operators
// let a =10;

// a +=4;
// console.log(a);
// a -=4;
// console.log(a);
// a /=4;
// console.log(a);
// a *=4;
// console.log(a);

// ? Comparison Operator
// let a =10;
// let b =20;
// console.log("a == b = ", a==b);
// console.log("a === b = ", a===b);
// console.log("a != b = ", a!=b);
// console.log("a !== b = ", a!==b);
// console.log("a > b = ", a>b);
// console.log("a >= b = ", a>=b);
// console.log("a <= b = ", a<=b);
// console.log("a <= b = ", a<=b);

// ? Logical Operator
// let a =true;
// let b =false;
// console.log("a && b = ", a && b);
// console.log("a || b = ", a || b);
// console.log("a ! b = ", a ! b);

// ? Conditional Statement

// *if else
// if (true) {
//         console.log("ram");
// }
// else{
//         console.log("Krishna");
// }

// *switch case
// switch (key) {
//         case value:
//                 console.log(1);
//                 break;
//         case value:
//                 console.log(2);
//                 break;
//         default:
//                 break;
// }

// *tarnary
// let age=18;
// let voter= age>=18 ? "adult":"child";
// console.log(voter);

// !<!-- ========== Loops and Strings ========== -->

//? Loop in js: Loops are used to execute a piece of code again & again

// * for loop
// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }
// *while loop
// *do while loop

// *for of loop: for of loop help us to iterate over strings and arrays.
// let str = "ramkrishna";
// for(let i of str){
//         console.log("i = ",i);
// }

//* for in loop: use in object.


//? string : String is a sequence of charecters used to represent text
// ^ String property and methods
let str = "ramkrishna";
let len=str.length;
console.log(len);
