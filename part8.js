// let arr=[1, 2, 3, 4, 5];
// arr.forEach(function(el){
//     console.log(el);
// });
// arr.forEach((el)=>{
//     console.log(el);
// });
// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);

// for each for objects
// let obj=[{name:"dilip",
//     age:22,},
// {
//     name:"Kiran",
//     age:23,
// },
// {
//     name:"Sumit",
//     age:18,
// }];
// obj.forEach(function(el){
//     console.log(el.age);
// })
// let avgAge= obj.map((el)=>{
//     return el.age /3 ;
// });

// map 
// let arr=[5, 4, 3, 2, 1];
// let ans=arr.map(function(el){
//     return el*2;
// });
// console.log(ans);

// filter
// let nums=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even=nums.filter((num)=>{
//     return num%2===0;
// }
// );
// let odd=nums.filter((num)=>{
//     return num%2!==0;
// }
// );
// every
// let id1=nums.every((num)=>{
//     return num%2===0;
// })
// nums2=[2, 4, 6, 8];
// let id2=nums2.every((num)=>{
//     return num%2===0;
// });

// //some
// let id3=nums.some((num)=>{
//     return num%2===0;
// });
// let id4=nums2.some((num)=>{
//     return num%2!=0;
// });

// reduce
// let arr=[1, 2, 3, 4, 5];
// let sum=arr.reduce((acc, el)=>{
//     return acc+el;
// });
// console.log(sum);

// maximum number in an array 
// let nums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 39];
// let max=nums.reduce((max,el)=>{
//     if(el>max){
//         return el ;
//     }
//     else{
//         return max; 
//     }
// });

// check if all numbers in our array are multiples of 10 or not
// let arr1=[10, 20, 30, 40, 50, 55];
// let id=arr1.every((num)=>{
//     return num%10===0;
// });
// console.log(id);
// to find minimum number in an array
// let arr2=[1, 2, 3, 4,-2, 5, 6, 7, 8, 9, 39];
// let min= arr2.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });

// function getMin(arr2){
//     let min= arr2.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// return min;
// }
// let arr2=[1, 2, 3, 4,-2, 5, 6, 7, 8, 9, 39];
// console.log(getMin(arr2));

// Default parameters
// function sum(a, b=10){
//     return a+b;
// }
// console.log(sum(8));

// spread
// let num1=[1, 2, 3, 4, 5];
// console.log(Math.max(...num1));
// console.log(...num1);
// console.log(...'DilipKumarYadav');
// let arr1=[1, 2, 3, 4, 5];
// let newarr=[...arr1];
// console.log(newarr);
// let char=[..."DilipKumarYadav"];
// let name=[...char];
// console.log(name);

// spread with objects
// let info={
//     name:"Dilip",
//     age:22,
//     city:"Birgunj"
// }
// let finalInfo={
//     ...info, country:"Nepal", RollNo:11232989,
// };
// let obj1={...arr1};
// let obj2={..."DilipKumarYadav"};

//Rest
// function sum(...args){
//     for(let i=0; i<args.length; i++){
//        return args.reduce((sum, el)=> sum+el);
//     }
// }
// function min(message,...args){
//     console.log(message);   
//     return args.reduce((min, el)=>{
//         if(el<min){
//             return el;
//         }
//         else{
//             return min;
//         }
//     });
// }       

// desrusturing
// let names=["Dilip", "Kumar", "Yadav", "Sumit", "Paraslal"];
// let [firstName, middleName, lastName, ...others]=names;
//console.log(firstName, middleName, lastName);

// destructurin objects
const student={
    name:"Sumit",
    age:18,
    class:12,
    subject:["Maths", "Physics", "Chemistry", "Biology"],
    username:"sumit123",
    password:"123456",
}
const{username:user, password:pass}=student;
console.log(user);