// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of li){
//     li.addEventListener("click", function(event){
//     event.stopPropagation();

//     console.log("li was clicked");
// });
// }

// Activity for todo list

let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click", function(){
    let li=document.createElement("li");

    let Deletebtn=document.createElement("button")
    Deletebtn.innerText="Delete";
    Deletebtn.classList.add("delete");
    li.innerText=input.value;

     li.appendChild(Deletebtn);
    //console.log("task is:", input.value);
    ul.appendChild(li);
    input.value="";
    console.log("task is added");
})

ul.addEventListener("click", function(event){
    console.log(event.target.innerText);
    if(event.target.nodeName=="BUTTON"){
        let item= event.target.parentNode;
        item.remove();
        console.log("Deleted");
        
    }
  
})
// let deletebtn=document.querySelectorAll(".delete");
// for(btn of deletebtn){
//     btn.addEventListener("click", function(event){
//         let parent=this.parentNode;
//         parent.remove();
//     })
// }