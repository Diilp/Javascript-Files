// function hello(){
//     console.log("hello, Dilip");
//     console.log("Hello, World");
//     console.log("Hello, maya");
// }
// hello();

//print poem
// function poem(){
//     console.log("Twinkle twinkle little star");
//     console.log("How I wonder what you are");
//     console.log("Up above the world so high");
//     console.log("Like a diamond in the sky");
// }
// poem();

// // function to roll a dice & always display the value of the dice(1 to 6).
// function diceRoll(){
//     roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// diceRoll();

// function with arguments
// function funcName(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }
// let name=prompt("Enter your name:");
// let age=prompt("Enter your age:");
// funcName(name,age);

// average of 3 numbers
// function average(num1, num2, num3){
//   return (num1+num2+num3)/3;
    
// }
// console.log(average(5,7,9));

//multiplication table of number
// function table(num){
// for(let i=1; i<=10; i++){
//     console.log(`${num}*${i}=${num*i}`);
// }
// }
// let num=prompt("Enter the number:");
// table(num);

// sum of n numbers
// function sumNum(n){
//     let sum=0; 
//     for(let i=1; i<=n; i++){
//         sum+=i;
     
//     }
//     return sum;
// }
// console.log(sumNum(5));

// // concatenation of all strings  in an array
// function concat(arr){
//     let str="";
//     for(let i=0; i<arr.length; i++){
//         str+=arr[i];
//     }
//     return str;
// }
// let arr=["dilip", "yadav", "sumit"];
// console.log(concat(arr));

// function scope and global scope
// let sum= 78; // global scope
// function calSum(a, b){
//     let sum=a+b; // funcation or local scope
//     console.log(sum);
// }
// calSum(7,9);
// console.log(sum);

// lexial scope
// function outer(){
//     let x=7;
//     let y=9;
//     function inner(){ // function scope
//         let b=5;
//         let sum=x+y;
//         console.log(sum);
//     }
//     inner();
//     console.log(b);
    

// }

// let greet="hello";
// function changeGreet(){
//     let greet="namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();

// function expression
// let func=function(a, b){
//     return a+b;
// }
// func(2, 6);

// higher order function
// function multipleGreet(func , n){
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// multipleGreet(greet, 5);

// returns a function
// function odd(){
//     return function(){
//         console.log("hello");
//     }
// }
// let func=returnFunc();
// func();

// Methods
// const calculator={
//     num: 99,
//     add: function(a, b){
//         return a+b;
//     },
//     sub: function(a, b){
//         return a-b;
//     },
//     mul: function(a, b){
//         return a*b;
//     },
//     div: function(a, b){
//         return a/b;
//     }
// }

// Methods shortand
const calculator={
    num: 99,
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    },
    div(a, b){
        return a/b;
    }
}