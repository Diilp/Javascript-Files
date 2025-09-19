// For cat facts
// let button=document.querySelector("button");
// button.addEventListener("click",async ()=>{

//    let facts= await getFacts();
//    console.log("facts:",facts);
//    let p=document.querySelector("#result");
//    p.innerText=facts;

// })
// let url="https://catfact.ninja/fact";
// async function getFacts(){

//     try{
//         let res= await axios.get(url);
    
//     return res.data.fact;
//     }
//     catch(error){
//         console.log("Error:",error);
//         return "No Cat Facts Available";
//     }
    
// }


// For Dog Image
// let url2="https://dog.ceo/api/breeds/image/random";
// let button=document.querySelector("button");
// button.addEventListener("click", async()=>{
//     let imgUrl= await getRandomDogImage();
//     console.log("imgUrl:",imgUrl);
//     let img=document.querySelector("#img");
//     img.src=imgUrl;


// })

// async function getRandomDogImage(){
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }
//     catch(error){
//         console.log("Error:",error);
//         return "No Dog Image Available";
//     }
// }

// axios : sending headers
// const url="https://icanhazdadjoke.com/";

// async function getJoke(){
//    try{ 
//     const config={
//         headers:{
//             Accept:"application/json"
//         }
//     }
//     let result= await axios.get(url,config);
//     console.log("result:",result);
//    }
//     catch(error){
//         console.log("Error:",error);
//     }
// }

// getJoke();

// Query Strings
// on the basis of country we will get universities
// let url3 = "http://universities.hipolabs.com/search?country";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log("country:", country);

//     let universities = await getUniversity(country);  
//     show(universities);
// });

// function show(universities) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (let university of universities) {   
//         console.log(university.name);
//         let li = document.createElement("li");
//         li.innerText = university.name;
//         list.appendChild(li);
//     }
// }

// async function getUniversity(country) {
//     try {
//         let result = await axios.get(`${url3}=${country}`);  
//         return result.data;
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// on the basis of state of india we get universities
let url3 = "http://universities.hipolabs.com/search?country=India";
let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    let stateInput = document.querySelector("#country").value.trim().toLowerCase();
    console.log("State entered:", stateInput);

    let universities = await getUniversity();
    let filtered = universities.filter(uni => 
        uni["state-province"] && uni["state-province"].toLowerCase().includes(stateInput)
    );

    show(filtered);
});

function show(universities) {
    let list = document.querySelector("#list");
    list.innerText = "";

    if (universities.length === 0) {
        list.innerText = "No universities found for this state.";
        return;
    }

    for (let university of universities) {
        console.log(university.name, university["state-province"]);
        let li = document.createElement("li");
        li.innerText = `${university.name} (${university["state-province"]})`;
        list.appendChild(li);
    }
}

async function getUniversity() {
    try {
        let result = await axios.get(url3);
        return result.data;
    } catch (error) {
        console.log("Error:", error);
        return [];
    }
}
