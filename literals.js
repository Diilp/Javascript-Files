// const student={
//     name:"Dilip",
//     age:21,
//     mark:80,
//     city:"Kathmandu"
// };
// console.log(student);

// let delhi={
//     latitude:"28.7041 N",
//     longitude:"77.1025 E"
// };
// console.log(delhi);
 
// // post thread
// const post={
//     username: "@dilipyadav3100",
//     content:"hey!, How are you friends",
//     likes:5,
//     repost:3,
//     tags:["@coding", "@javascript", "@html", "css"]

// };
// console.log(post);

// const obj={
//     1:"a",
//     2:"b",
//     3:"c",
//     4:"d",
//     null:"e",
//     undefined:"f"
    
// };
// console.log(obj);

// Add and Update value
// const student={
//     name:"Dilip",
//     age:21,
//     mark:80,
//     city:"Kathmandu"
// };
// console.log(student);

// nested object
// const classInfo={
//     dilip:{
//         grade: "A",
//         subject:"Math"
//     },
//     sumit:{
//         grade: "B",
//         subject:"Science"
//     }, 
//     kiran:{
//         grade: "A",
//         subject:"English"
//     }

// };
// console.log(classInfo);

// Array of objects
// const students=[
//     {
//         name:"Dilip",
//         age:21,
//         mark:80,
//         city:"Kathmandu"
//     },
//     {
//         name:"Sumit",
//         age:21,
//         mark:80,
//         city:"Kathmandu"
//     },
//     {
//         name:"Kiran",
//         age:21,
//         mark:80,
//         city:"Kathmandu"
//     }
// ];
// console.log(students);

//Random Integer
// for(let i=0; i<10; i++){
// let num=Math.random();
// num=num*20;
// num= Math.floor(num);
// num=num+1;
// console.log(num);
// }
// let number= Math.floor(Math.random()*100)+1;
// console.log(number);
// let number1= Math.floor(Math.random()*5)+21;
// console.log(number1);

//guessing game
const max=prompt("Enter the maximum number:");
console.log(max);
let num= Math.floor(Math.random()*max)+1;
console.log(num);
let guess=prompt("Enter your guess:");
while(true){
    if(guess=="quit"){
        console.log("You quit");
        break;
    }
    if(guess==num){
        console.log("You won", num);
        break;
    }
    if(guess>num){
        guess=prompt(" Too high, Enter your guess again:");
    }
    else{
    
        guess=prompt("Too low,Enter your guess again:");
    }

}