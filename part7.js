// const student={
//     name:"Dilip",
//     age:21,
//     eng:80,
//     math:89,
//     phy:78,
//     city:"Kathmandu",
//     getAvg(){
//         console.log(this);
//         let avg=(this.eng+this.math+this.phy)/3;
//         console.log(`${this.name}'s average is ${avg}`); // this.name is a keyword which is used to access the property of the object.avg);
//     }
// }

// try & catch
// console.log("hello");
// console.log("hello, how are you");
// try{
//     console.log(a);
// }
// catch(e){
//     console.log("error");
// }
// arrow function
// const add=(a,b)=>{
//     console.log(a+b);
// }
// // implicit return
// const sub=(x, y)=>(
//      x-y
// );

// set timeout
// console.log("hello");
// setTimeout(()=>{
//     console.log("hello, how are you");
// },1000);
// console.log("Welcome to Nepal");

// set interval
// console.log("hello");
// let id1=setInterval(()=>{
//     console.log("hello, how are you");
// },5000);
// console.log(id1);
// let id2=setInterval(()=>{
//     console.log("Welcome to Nepal");
    
// },1000);
// console.log(id2);

// this with arrow function
// 


// Practice question
// write an arrow functions that return the square of a number 'n'.
// const square=(n)=>{
//     return n*n;
// }
// console.log(square(3));

let id=setInterval(()=>{
        console.log("hello world");
    },2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval run");
}, 10000);