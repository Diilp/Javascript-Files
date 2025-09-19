// By classname
// let smallImges=document.getElementsByClassName("oldImg");
// for(let i=0; i < smallImges.length; i++){
//     smallImges[i].src="./assets/spiderman_img.png";
//     console.log(`value of image no ${i} is changed.`);
//     }


// By tagname
// let paragraph=document.getElementsByTagName("p");
// let head6=document.getElementsByTagName("h6");
// let change=document.getElementsByTagName("p")[0].innerText="dilip";

// by selector query

// console.dir(document.querySelectorAll("#description"));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));

// Using properties and Methods

// let links=document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color="red";
    
// }
// for(let i=0; i<links.length; i++){
//     links[i].style.color="green";
// }


// Practise Questions
// question1
// let paragaraph= document.createElement("p");
// paragaraph.innerText="Hey I am red";
// document.querySelector("body").append(paragaraph);
// paragaraph.classList.add("red");

// // question2
// let heading3=document.createElement("h3");
// heading3.innerText=" I'm a blue h3";
// document.querySelector("body").append(heading3);
// heading3.classList.add("blue");
// // question3
// let div=document.createElement("div");
// let heading1=document.createElement("h1");
// heading1.innerText="I'm in div";
// div.append(heading1);
// let para2=document.createElement("p");
// para2.innerText="I'm paragraph in div";
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").prepend(div);

// Assignment questions
//Qs1.Create a new input and button element on the page using JavaScript only.Set the text of button to “Clickme”.
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="Click Me!";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Qs2.Add following attributes to the element:
// -Change placeholder value of input to “username”
// -Change the id of button to “btn”.

//input.placeholder="Username";
input.setAttribute("placeholder", "Username");
button.setAttribute("id", "btn");

//Qs3.Access the btn using the query Selector and button id. 
// Change the button background color to blue and text color to white.

let btn=document.querySelector("#btn");
btn.style.backgroundColor="blue";
btn.style.color="white";

let heading1=document.createElement("h1");
heading1.innerText="DOM Practise";
document.querySelector("body").append(heading1);
heading1.setAttribute("class", "headingStyle");

let p=document.createElement("p");
p.innerHTML="Apna College <b> Delta </b> Practise.";
document.querySelector("body").append(p);
