// async function greet(){
//    // throw "error";
//     return "hello world";

// }
// greet()
// .then((result)=>{
//     console.log("promise resolved");
//     console.log("result is:",result);
// })
// .catch((error)=>{
//     console.log("promise rejected");
//     console.log("error is:",error);
// })

// let demo= async()=>{
//     return 9;
// }

// function getNum(){
//     return new Promise((resolve, rejected)=>{
//         setTimeout(()=>{
//             let randomNum= Math.floor(Math.random()*10)+1;
//         console.log("generated random number is:",randomNum);
//         resolve();
//         }, 1000);
//     });
// }
// async function demo(){
//    await getNum();
//     await getNum();
//     await getNum();
//      await getNum();
//      await getNum();
//      getNum();
// }

// demo();

// let h1=document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject("promise rejected");
//             }
//             h1.style.color=color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         }, delay);
//     })
// }
// async function demo(){
//     try{
//         await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("purple", 1000);
//     }
//     catch(error){
//         console.log(error);
//     }
//     let a=4;
//     console.log(a);
//     // console.log(num);
//     console.log("new number: ", a+4);
// } 

// demo();
// to convert json to js object
let jsonResponse='{"fact":"There are up to 60 million feral cats in the United States alone.","length":65}';
console.log(jsonResponse);
let validResponse=JSON.parse(jsonResponse);
console.log(validResponse.length);

// to convert js object to json
let student={
    name:"Sumit",
    age:18,
    class:12,
    subject:["Maths", "Physics", "Chemistry", "Biology"],
    username:"sumit123",
    password:"123456",
}
 let studentJson=JSON.stringify(student);
console.log(studentJson);

//our first request
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     // console.log(response.json()); // make data in redable format
//     // response.json().then((data)=>{
//       //  console.log(data.fact);
//   //  })
//   return response.json();

// })
// .then((data)=>{
//     console.log("data1: ",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log("data2:",data2.fact);
// })
// .catch((error)=>{
//     console.log("Error:",error);

// });

// console.log("Hey you, Do you know JSON?");

// async and await
let url="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res= await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2= await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    }
    catch(error){
        console.log("Error:",error);
    }
    console.log("Hey you, Do you know JSON?");
}
getFacts();