// question 2
// let button=document.createElement("button");
// button.innerText="Click Here!";
// let body=document.querySelector("body");
// body.appendChild(button);
// button.addEventListener("click", function(){
//     button.style.backgroundColor="red";
//     console.log("Clicked");
 //})
// let button=document.querySelector("button");
// button.addEventListener("mouseout", function(){
//     button.style.backgroundColor="red";
//     console.log("mouse out");
    
// })
// button.addEventListener("keypress", function(){
//     button.style.backgroundColor="green";
//     console.log("key pressed");
    
// })
// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });

// question 3
let input=document.querySelector("#user");
let h2=document.querySelector("h2");
input.addEventListener("input", function(){
    let filter=input.value.replace(/[^A-Za-z ]/g, " ");
    if(input.value=filter){
        input.value=filter;
    }
    console.log(input.value);
    h2.innerText=filter;
})