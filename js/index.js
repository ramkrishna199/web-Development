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
// let str = "ramkrishna";
// let len=str.length;
// console.log(len);



// ! ***********************************************************
//? memory in js 
// 1.Stack (Primitive)
// 2.Heap (Non primitive)

// ? Maths in Js and Number
// const number =100;
// console.log(number.toFixed(2));
// *toFixed method is use to fixed decimal number 

// const flot =30.544
// console.log(flot.toPrecision(1));
// *toPrecision is use to presize the value of this number

// const balance = 1000000;
// console.log(balance);
// console.log(balance.toLocaleString());
// console.log(balance.toLocaleString('en-IN'));


// ? Maths*************************************

// console.log(Math);
// const number = -5;

// console.log(Math.abs(number));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));

// let min = 1;
// let max = 6;
// console.log(Math.floor(Math.random()*(max)+min));


// ? Arrays in js***********************************
// *Array is an Object . when we need to store multiple value in a single variable we use arrays.
// const myArr = [0,1,2,3,4,5];

// *Deep copy => A deep copy of an object is a copy whose properties do not share the same references 

// * Array Methods
// !Push Method
// const myArr = [0,1,2,3,4,5];
// const newArr = myArr.push(6)
// console.log(newArr);
// & Push methods use for add valuse and returns array length

// ! Pop Methods
// const myArr = [0,1,2,3,4,5,100];
// const newArr = myArr.pop()
// console.log(newArr);
// console.log(myArr);
// & Pop methods use for remove valuse at the end of an arry  and returns remove element

// ! shift Method
// const myArr = [1000,1,2,3,4,5];
// const newArr = myArr.shift()
// console.log(newArr);
// console.log(myArr);
// & shift methods use for remove valuse at the start of  an arry and returns remove element

// ! unshift Method
// const myArr = [1000,1,2,3,4,5];
// const newArr = myArr.unshift(2000)
// console.log(newArr);
// console.log(myArr);
// & shift methods use for remove valuse at the start of  an arry and returns array length

// ! includes Method
// const myArr = [1000,1,2,3,4,5];
// const newArr = myArr.includes(1000)
// console.log(newArr);
// console.log(myArr);
// & when we need to check valus are available or not in this array we use includes Methods ,Its return boolean valuse true or false if availavle in array return true else return false.

// ! indexOf Method
// const myArr = [1000,1,2,3,4,5];
// const newArr = myArr.indexOf(9)
// console.log(newArr);
// console.log(myArr);
// & when we need to check index of an element then we use indexOf if it is valid it returns index number else -1

// ! slice Method
// const myArr = [1000,1,2,3,4,5];
// const newArr = myArr.slice(2)
// console.log(newArr);
// console.log(myArr);
// & when we need to slice of an array then we need to use slice Methods it's returns new array

// ! splice Method
// const myArr = [1000,1,2,3,4,5];
// const newArr = myArr.splice(2,5)
// console.log(newArr);
// console.log(myArr);
// & when we need to slice of an array then we need to use splice Methods it's returns new array but original array also modified.

//? Array Datastracture Algorithms
// ! Bubble Sort*******************

// const arr = [7,8,3,1,2]

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         // swap
//         if(arr[j]>arr[j+1]){
//             let temp =arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }

// console.log(arr);


// ! Selection Sort*******************

// const arr = [7,8,3,1,2];

// for(let i=0;i<arr.length-1;i++){
//     let selectSmallestElement = i;

//     for(let j =i+1;j<arr.length;j++){
//         if(arr[selectSmallestElement]>arr[j]){
//             selectSmallestElement=j;
//         }
//     }

//     let temp = arr[selectSmallestElement];
//     arr[selectSmallestElement]=arr[i];
//     arr[i]=temp
// }

// console.log(arr);

// ! Insertion Sort*******************
// const arr = [7,8,3,1,2];

// for(let i=1;i<arr.length;i++){
//     let currentElement = arr[i];

//     j=i-1;
//     while(j>=0 && arr[j]>currentElement){
//         arr[j+1] =arr[j];
//         j--;
//     }
//     arr[j+1]=currentElement;

    
// }
// console.log(arr);


// ? Objects in js ----------------------------------
let symbol = Symbol("Ram")
let user ={
    name: "ramkrishna",
    roll:14,
    [symbol]:"ram"
}
console.log(Object.keys(user));
console.log(Object.values(user));


// console.log(user);






// !binary Search--------------------------------
// const binarySearch = (arr,x,left,right)=>{
//     let mid = Math.floor((left+right)/2);
//     if(left>right) return false

//     if(arr[mid]===x) return mid;
    
//     if(arr[mid]>x){
//         return binarySearch(arr,x,left,mid-1);
//     }else{
//         return binarySearch(arr,x,mid+1,right);
//     }
// }


// let arr = [30,40, 50 ,60,70,80]

// const x = 90;
// let left = 0;
// let right = arr.length-1;
// const value = binarySearch(arr,x,left,right);

// if(value){
//     console.log(value);
// }else{
//     console.log('Element Not Found');
// }





