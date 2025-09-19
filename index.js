/*console.log("hello, Dilip");
console.log("Hello, World");
console.log("Hello, maya");
let a=9;
let b=8;
console.log("sum:", a+b);
let pricePencil=15;
let priceEraser=5;
//console.log("total price is:",pricePencil+priceEraser,"Rs");
let output="total price is:"+(pricePencil+priceEraser) +" Rs";
console.log(output);
let output1=`total ooutput is:${priceEraser+pricePencil} Rs`;
console.log(output1); */

//Operation In JS
// let a=9;
// let b=8;
// //airthmetic operators
/*console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); */
//unary operators
// console.log(a++);
// console.log(++a);
// console.log(b--);
// console.log(--b);
//comparison operators
//  let age1=19;
//  console.log(age1!=20);

//  console.log('a'>'A');
//  console.log('a'>'b');

//  console.log("Conditional Statements Practice");
//  let age=17;
//  if (age>=18){
//     console.log("you can drive");
//  }
//  else{
//  console.log("you can't drive");
//  }

/* let light="red";
if (light=="red"){
    console.log("stop");
}
else if (light=="yellow"){
    console.log("ready");
}
else {
    console.log("go");
}
// price of popcorn accoding to size
 let size ="S";
 if(size==="XL"){
    console.log("Price is Rs.250");
 }
  else if(size==="L"){
    console.log("Price is Rs.200");
 }
  else if(size==="M"){
    console.log("Price is Rs.100");
 }
  else{
    console.log("Price is Rs.50");
 }

 let string="npple";
 if(string[0]==='a' && string.length>3){
    console.log("It is a good string");
 }
 else{
    console.log("It is not a good string");
 }

 let num=12;
 if((num%3===0)&& (num+1==15) || (num-1==11)){
    console.log("safe");
 }else{
    console.log("not safe");
 }
 let day=9;
 switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
 }
 console.error("This is an error");
 console.warn("This is a warning");
 console.log("This is a log");
 let firstName= prompt("Enter your first name");
 let lastName= prompt("Enter your last name");
 console.log(`My name is ${firstName} ${lastName}`); */

 // String Methods
/* let name=" Dilip ";
let password= prompt("Enter your password");
console.log(password.toUpperCase());
let str1="Yadav";
*/

//String methods with arguments
/* let str="IamDilipYadav";
console.log(str.slice(3,7));
console.log(str.slice(3));
console.log(str.slice(-3));
console.log(str.slice(-3,-1));

let fruit="Mango"; */

// Array
/* let fruits=["apple", "mango", "orange", "apple"];
console.log(fruits);
console.log(fruits.length);
let num=[2, 4, 6, 8, 10];

let mix=["dilip", 8, "sumit", 7, "yadav", 8];
console.log(mix);
console.log(mix.length);
console.log(mix.push("kumar"));
console.log(mix.unshift("Paraslal"));
console.log(mix.pop());
console.log(mix.shift());


let primary=["apple", "mango", "orange", "apple"];
let secondary=[1, 2, 3, 4];
let final=primary.concat(secondary);
console.log(final);
let nums=[1, 2, 3, 4, 5, 6, 7, 8, 9];

*/
// Loop

/* for(let i=0; i<=6; i++){
    console.log(i);
}
//odd numbers
console.log("The odd numbers between 1 to 15 are:");    
for(let k=1; k<=15; k++){
    if(k%2!==0){
        console.log(k);
        
    }
}
console.log("backward odd numbers between 15 to 1 are:");
for(let j=15; j>=1; j=j-2){
  console.log(j);
        
    
}
console.log("the even numbers between 2 to 10 are:");
for(let l=2; l<=10; l=l+2){
    console.log(l);
}
for(let i=1; i>=9; i++){
    console.log(i);
}

// Multiple of 5
console.log("The multiplication table of 5 is:");
for(let i=1; i<=10; i++){
    console.log(5*i);
}
let num8= prompt("Which number table you want?:");
num8=parseInt(num8);
for(let i=num8; i<=num8*10; i=i+num8){
    console.log(i);
} */
// Favourte game guess
/*const favaorGame="hockey";
let guess= prompt("Enter your guess:");
while((guess!=favaorGame)){
if(guess=='quit'){
    console.log("You quit");
    break;
}
    console.log("Wrong guess");
    guess= prompt("Enter your guess again:");
}
if(guess==favaorGame){
    console.log("You won");
}
*/

/*let t=1;
while(t<=10){
    if(t==9){
        break;
    }
    console.log(t);
    t++;
}
    */
   // loops with array
   /* let fruits=["apple", "mango", "orange", "apple"];
   for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
   }

   let names=[["Dilip", "Sumit", "Yadav"],["Paraslal", "Kumar", "Yadav"]];
   for(let i=0; i<names.length; i++){
    console.log(`list # ${i}`);
    for(let j=0; j<names[i].length; j++){
        console.log(names[i][j]);
    }
   }
    */

   // for of loop
//    let fruits=["apple", "mango", "orange", "apple"];
//    for(let fruit of fruits){
//     console.log(fruit);
//    }
//    for(char of "Dilip"){
//     console.log(char);
//    }
   // nested for of loop
//    let names=[["Dilip", "Sumit", "Yadav"],["Paraslal", "Kumar", "Yadav"]];
//    for(list of names){
//     for( person of list){
//         console.log(person);
//     }
  // }
  // Practise part 4
//   let array=[1, 2, 3, 4, 5, 6, 2, 3];
//   console.log(array);
//   let num=2;
//   for(let i=1; i<array.length; i++){
//     if(array[i]==num){
//         array.splice(i,1);
//         }

//   }
//   console.log(array);

// questi0n no 2
// let number=287152;
// let count=0;
// let copy=number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
   
// }
// console.log(count); 

//question no 3
// let number=287152;
// let sum=0;
// let copy=number;
// while(copy>0){
//     sum+=copy%10;
//     copy=parseInt(copy/10);
// }
// console.log(sum);

// qiuestion no 4: factorial of a number n
// let number=5;
// let fact=1;
// for(let i=1; i<=number; i++){
//     fact=fact*i;
// }
// console.log(`The factorial of ${number} is ${fact}`);

// question no 5 : largest number in an array
let array=[1, 2, 3, 4, 5, 6, 2, 3, 12, 8, 9, 10];
let largest = array[0];
for(let i=1; i<array.length; i++){
    if(array[i]>largest){
        largest=array[i];
    }
}
console.log(largest);