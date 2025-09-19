// for single button
// let btn=document.querySelector("button");
// console.dir(btn);
// // btn.onclick=function(){
// //     alert("something went wrong");
    
// // }
// function hey(){
//     alert("hey you?");

//  }
// btn.onclick=hey;

// for multiple button
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=hey;
//     btn.onmouseenter=function(){
//         console.log("mouse entered");
//     }
//     console.dir(btn);


// }
// function hey(){
//     alert("hey you?");

//  }

// event listener
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//    // btn.addEventListener("click",hey);
//    // btn.addEventListener("click",greeting);
//     btn.addEventListener("dblclick",night);
//      //btn.addEventListener("mouseenter",time);
// }
// function hey(){
//     alert("hey you?");
//  }
//  function greeting(){
//      alert("Good Morning");
//  }
//  function night(){
//      alert("Good Night");
//  }
// //  function time(){
// //      alert("Good Afternoon");
// //  }

// activity of event listener: to create a random color generator

// let btn=document.querySelector("button");
// btn.addEventListener("click", randomcolor);
// function randomcolor(){
//     let h3=document.querySelector("h3");
//     let color=getRandomColor();
//     h3.innerText=color;
//     console.log("color updated");
//     let div=document.querySelector("div");
//     div.style.backgroundColor=color;
// }
// function getRandomColor() {
//     let red= Math.floor(Math.random()*255);
//     let green= Math.floor(Math.random()*255);
//     let blue= Math.floor(Math.random()*255);
   
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// } 

// let paragraph=document.querySelector("p");
// paragraph.addEventListener("click", function(){
//     console.log("you clicked paragraph");
// })
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("you clicked box");
// })

// use of "this" in event listener
// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="green";


// }
// btn.addEventListener("click", changeColor);
// h1.addEventListener("mouseenter", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// Keyword Events
//let btn=document.querySelector("button");
//  btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("you clicked button");
//  });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("you clicked button");
//  });
//  let input=document.querySelector("input");
//  input.addEventListener("keyup", function(event){
//     // console.dir(event);
//     // console.dir(event.key);
//     console.log("code=",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("character is up");
//     }
//     if(event.code=="ArrowDown"){
//         console.log("character is down");
//     }
//     if(event.code=="ArrowRight"){
//         console.log("character is right");
//     }
//     if(event.code=="ArrowLeft"){
//         console.log("character is left");
//     }

    // console.dir(event.keyCode);
    //  console.log("Key was released");
// })
//  input.addEventListener("keydown", function(event){
//     console.dir(event);
//      console.log("Key was pressed");
//  })

// form events
// let form=document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("form was submitted");
// })

 // extracting data from form
//  let form=document.querySelector("form");
//  form.addEventListener("submit", function(event){
//      event.preventDefault();
//     console.dir(form);
//    let user=document.querySelector("#user");
//    let pass=document.querySelector("#pass");
//    console.log("username=",user.value);
//    console.log("passowrd=",pass.value);
//    alert(`Hi ${user.value} your password is ${pass.value}`);

//})

// let user=document.querySelector("#user");
// user.addEventListener("change", function(event){
//     console.log("changed event");
//     console.log(" final username=",this.value);
// })
// user.addEventListener("input", function(event){
//     console.log("input event");
//     console.log(" final username=",this.value);
// })

let inp=document.querySelector("#text");
let p=document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
})