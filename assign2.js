// Objects
 // Objects literals
/* const mysymbl = Symbol("key1")
 const obj = {
    name: "maham",
    [mysymbl]:"key1",// write method or syntax to add symbols
    email: "mahamf492@gmail.com",
    City: "hasiLpur"
 }
 //console.log(obj)
 //console.log(obj["name"]);
 
 //console.log(obj[mysymbl]);
 //Object.freeze(obj);
 //obj.name="fatima"

 //console.log(obj["name"]);

/* obj.greeting=()=>{
    console.log("hello Js user")
 }
 console.log(obj.greeting());*/

 
/* obj.greeting=()=>{
    // template literals (string interpolation)
    console.log(`hello Js user , ${this.name}`)
 }
 console.log(obj.greeting());

 // singleton object 
 const object=new Object();
 // non singleton objectt
 let object1= {

 }

 const tinderuser= {

 }
 tinderuser.name ="maham";
 tinderuser.email="mahamfat93@gmail.com";
 tinderuser.City="America";
 console.log(tinderuser);

 const obj1={1:"0" , 2:"5"};
 const obj2={3:"6" , 4:"9"}

// const obj3 = Object.assign({},obj1,obj2);
const obj3={...obj1 ,...obj2}
 console.log(obj3);

 console.log(Object.keys(tinderuser));
 console.log(Object.values(tinderuser));
 //console.log(Object.entries(tinderuser));
 console.log(tinderuser.hasOwnProperty("name"))


 // first value key and second is values in object
 const user=[
    {
        id: 1234,
        name:"maham"
    },
    {
        id: 1254,
        name:"ayesha"
    },
    {
        id: 1237,
        name:"ahmad"
    }

 ]
 console.log(user[2].name);*/

 // Destructing of Objects
  const course= {

    courseinstructor:"Anaya",
    Coursename:"Science"
  }
   const {Coursename : name} = course ;
   console.log(name);

   //Functions
   const sum=(num1 , num2)=>{
       let result = num1 + num2;
       return result;
       
   }
   console.log(sum(1,6));
   
   const logindetail=(username)=>{
    if(!username){
        //console.log("Please enter your username");
        return;
       }
    return `${username} just logged in`;
   }
   //console.log(logindetail())

   //rest operator in Functions
   const numbers =(...num)=>{
      return num;
   }
   console.log(numbers(400,500,600,700));

   //const clothes={
  //  color: "Blue",
   // style:"baggy"
//
  // }
   const brands=(clothes)=>{
    return clothes.style;
   }
   //console.log(brands());
   //console.log(brands({
   /* color: "Blue",
    style:"baggy"
   }))*/

    // Filter
   const array1=[89,45,6,7,9,0 ,100,];
  let arr= array1.filter((x)=>{
      return x % 10;
  })
  //console.log(arr)

 //Map 
const array2=[89,45,6,7,9,0 ,100,];
let arr1 = array2.map((y)=>{
    return y * y;
})
console.log(arr1);


//for loop
let i=0;
for(i=0 ; i<3 ;i++){
    console.log(i);
}
//for each loop for arrays
let fruits =["apple","mango" , "grapes"];
fruits.forEach((b)=>{
  //console.log(b)
})
// for of loop
for(a of fruits){
    //console.log(a)
}
//for in loop used for objects

let fruit = {
    firts:"apple",
    second :"mango",
    third:"grapes",
}
for(key in fruit){
    console.log( `i love this fruit ${fruit[key]}`)
}

let array5=[89,45,6,7,9,0]
let arr5=array5.reduce((red1 , red2 )=>{
return red1 - red2 ;
})
console.log(arr5)


   
