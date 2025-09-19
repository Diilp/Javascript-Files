// function hello(){
//     console.log("Inside hello function.")
//     console.log("hello, Dilip");
// }
// function demo(){
//     console.log("calling hello function")
//     hello();
// }
// console.log("calling demo function");
// demo();
// console.log("outside demo function");

// 
// setTimeout(function(){
//     console.log("MMDU is a good collage");
// }, 2000);

// console.log("hello, Dilip");

// let h1= document.querySelector("h1");
// function changeColor(color, delay, nextColor){
//     setTimeout(function(){
//         h1.style.color=color;
//        if(nextColor) nextColor();
//     }, delay);

// }
// changeColor("red", 1000,()=>{
//     changeColor("green", 1000,()=>{
//         changeColor("blue", 1000,()=>{
//             changeColor("yellow", 1000,()=>{
//                 changeColor("white", 1000, ()=>{
//                     changeColor("black", 1000, ()=>{
//                         changeColor("red", 1000);
//                     });
//                 });
//             });
//         });
            
//     });
        
//});
// callback nesting = callback hell

// setTimeout(changeColor, 1000, "red");
// setTimeout(changeColor, 2000, "green");
// setTimeout(changeColor, 3000, "blue");
// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);


//setTimeout(function(){
//     h1.style.color="green";
// }, 1000);
// setTimeout(function(){
//     h1.style.color="red";
    
// }, 2000);

// setTimeout(function(){
//     h1.style.color="blue";
    
// }, 3000);

// callback hell - prevent through promises

// function savetoDb(data, success, failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         success();
        
//     }
//     else{
//         failure();
     
//     }
// }
// savetoDb("Dilip Kumar Yadav",()=>{
//     console.log("sucess 1:data saved");
//     savetoDb("Greeting, Hello",()=>{
//         console.log("sucess 2:second data saved");
//         savetoDb("Good Morning",()=>{
//             console.log("sucess 3:third data saved");
//         },()=>{
//             console.log("failure3:third data not saved");
//         })
//     },()=>{
//         console.log("failure2:second data not saved");
//     })
// }, ()=>{
//     console.log("failure 1 :weak connection.data not saved");
// });


// promises
// function savetoDb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     return new Promise((resolve, reject)=>{
//         //let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>5){
//             resolve("sucess: data was saved");
//         }
//         else{
//             reject("failure: week connection ");
//         }
//     });
// }
// savetoDb("MMDU, MMEC");

// then & catch
//let request=
// savetoDb("MMDU")
// .then(()=>{
//     console.log("promise resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise rejected");
// });

// promise chaining
// savetoDb("MMDU")
// .then(()=>{
//     console.log("Promise 1 resolved");
//     return savetoDb("MMEC");
// })
// .then(()=>{
//     console.log("Promise 2 resolved");
//     return savetoDb("MMET");
// })
// .then(()=>{
//     console.log("Promise 3 resolved");
//     return savetoDb("MMET");
// })
// .then(()=>{
//     console.log("Promise 4 resolved");
//     return savetoDb("MMET");
// })
// .then(()=>{
//     console.log("Promise 5 resolved");
//     return savetoDb("MMET");
// })
// .catch(()=>{
//     console.log("Promise rejected");

// });

// results & errors of promises
// savetoDb("MMDU")
// .then((result)=>{
//     console.log("Promise 1 resolved");
//     console.log("result of promise 1:",result);
//     return savetoDb("MMEC");
// })
// .then((result)=>{
//     console.log("Promise 2 resolved");
//     console.log("result of promise 2:",result);
//     return savetoDb("MMET");
// })
// .then((result)=>{
//     console.log("Promise 3 resolved");
//     console.log("result of promise 3:",result);
    
// })
// .catch((error)=>{
//     console.log("Promise rejected");
//     console.log("failure of promise",error);

// });


// lets apply promises to our callback hell

let h1= document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((reolve, reject)=>{
        setTimeout(function(){
        h1.style.color=color;
        reolve("color changed");

    }, delay);

})
}

changeColor("red", 1000)
    .then(()=>{
        console.log("red color completed");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color completed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color completed");
        return changeColor("yellow",1000);

    })
    .then(()=>{
        console.log("yellow color completed");
        return changeColor("purple",1000);
    })
    .then(()=>{
        console.log("purple color completed");
    })
    .catch(()=>{
        console.log("something went wrong");
    });

        