const promiseOne = new Promise((resolve, reject) => {
    console.log("hello");
    resolve();
})
promiseOne.then(()=>{
    console.log("Asyn Completed")
})

const promiseTwo=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Promise Series")
        resolve()
    },1000)
}).then(()=>{
    console.log("Promise Resolved")
})


const promiseThree=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "maham" , ID : 34 , Email : "mahamf492@gmail.com"})
    }, 2000);
}).then((user)=>{
     console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    let error = true;
    setTimeout(()=>{
        if(!error){
            resolve({username: "maham" , ID : 34 })
        }else{
            reject("You are facing an error")
        }
    },3000)
   
})
const usrname= promiseFour.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
         console.log(username);
}).catch((error)=>{
   console.log(error);
}).finally(()=>{
     console.log("the promise is either resolve or rejected")
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username: "maham" , ID : 34 })
        }else{
            reject("You are facing an error")
        }
    },2000)
})
async function consumePromise(){
  try{
    const response = await promiseFive;
    console.log(response)
  }
  catch{
    console.log(error);
  }
}

consumePromise()


/*async function getAllUsers(){
    try{
    const url = await fetch("https://api.github.com/users/maham5");
    const data = await url.json();
    console.log(data);
}
catch{
    console.log('E :', error);
}
  
}
getAllUsers()*/

fetch("https://api.github.com/users/maham5")
.then((response)=>{
     return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
  console.log(error)
})