
// Assnc Function
// async function greet(){
//     return"Hello, World!";
// }

// greet()
// .then(result =>{
//     console.log(result)
//     console.log("promise was resolved")
//      })
//      .catch((error)=>{
//         console.log(error)
//         console.log("promise was not resolved")
// })

// let demo = async () =>{
//     return  "Hello, World!";
// }

// Await keyword
//  function getNumber(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         let num  = Math.floor(Math.random() * 10) + 1;
//     console.log(num);
//     resolve();
//      }, 1000);
    
//   });
//  }
//  async function name() {
//     await getNumber();
//     await getNumber();
//     await getNumber();
//  }



// h1 = document.querySelector("h1")

// function changeColor(color, delay, nextColorChange){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>  {
            
//             let num =  Math.floor(Math.random() * 10) + 1;
//             if(num > 3){
//                 reject("promise  was not resolved")

//             }

            
//                 h1.style.color = color;
//                 console.log(`color changed to ${color}`);
//                 resolve("color changed");
//             }, delay);
    
//     })
// }

//     async function demo() {
//         await changeColor("red", 1000, "blue");
//         await changeColor("blue", 2000, "green");
//         await changeColor("green", 3000, "yellow");

//         let a = 5;
//         console.log(a)
//         console.log("new number",  a + 5);
        
//     }
    // handling rejection with await

//     h1 = document.querySelector("h1")

// function changeColor(color, delay, nextColorChange){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>  {
            
//             let num =  Math.floor(Math.random() * 10) + 1;
//             if(num > 3){
//                 reject("promise  was not resolved")

//             }

            
//                 h1.style.color = color;
//                 console.log(`color changed to ${color}`);
//                 resolve("color changed");
//             }, delay);
    
//     })
// }

//     async function demo() {
//         try {
//             await changeColor("red", 1000, "blue");
//             await changeColor("blue", 2000, "green");
//             await changeColor("green", 3000, "yellow");
//             await changeColor("red", 1000, "blue");
//             await changeColor("blue", 2000, "green");
//             await changeColor("green", 3000, "yellow");
    
//         } catch(err){
//             console.log("erroro caught");
//         console.log(err)

//         } 


    //     let a = 5;
    //     console.log(a)
    //     console.log("new number",  a + 5);
        
    // }

// Apis ( Application Programming interface )

// json
// 1. json is a lightweight data interchange format
// json.parse(data) mthod string data into  a javascript object
// json.stringify(data) method converts a javascript object into a string
// json is a string format that is easy to read and write


// api testing tools
// hoppscoth
//  postman


// ajax
// asyncchronous javascript and xml
// 1. ajax is a method to send and receive data from a server asynchronously


// http verb
// 1. get: used to retrieve data from a server
// 2. post: used to send data to a server
// 3. put: used to update data on a server
// 4. delete: used to delete data from a server
// 5. patch: used to update a part of data on a server
// etc

// cats 

// let btn  = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//     let fact = await getFacts ();
//     // console.log(fact);

//     let p = document.querySelector("#results")
//     p.innerText=fact;
// });

// let url ="https://catfact.ninja/fact"



// async function getFacts() {
//     try {
//        let res = await axios.get(url)
//         return res.data.fact;
// }  catch (e) {
//     console.log("error -", e);
//     return "no fact found";
// }}


//dogs Apis

// let btn1  = document.querySelector("button");
// let url2 ="https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () =>{
//     let link = await getImage ();
//     console.log(link);

//     let img = document.querySelector("#img")
//     img.setAttribute("src", link);
// });





// async function getImage() {
//     try {
//        let res = await axios.get(url2)
//         return res.data.message;
// }  catch (e) {
//     console.log("error -", e);
//     return "no fact found";
// }}




 

