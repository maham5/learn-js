let personid= 678;
var  personName = "ayesha";
const personCity="Hasilpur";
  personid=890;

console.table([personid,personName,personName]);

console.log(typeof personid);
console.log(typeof personName);

let sum=33;
let sumnum = Number (sum)
console.log (typeof sumnum)
let sumstring=String(sum);
console.log(typeof sumstring);
let num = 0;
let numtype=Boolean(num);
console.log(numtype);

console.log(1 + "2")
console.log("1"   + 6 +9)
console.log(2 +3 + "6" );

console.log(null >=0);
console.log(null < 0);
console.log(undefined <= 0);

// primitive types
//7 types :string, number BigInt , Boolean , symbol , null , undefined

//non primitive types 
//arrays , objects , functions
// stack primitive
//heap  non primitive

const user={
    email: "hyuhu76@gmail.com",
    name : "Maham fatima",

}
 let userone =user;
 console.log(user.email);
 console.log(userone.email);

 //Strings
 

let name1 = "hello World  My name is Maham";

//let result = name.split("," , 3)
let result = name1.slice(3 , 10)
console.log(result);


//let Name = "MahamFatima";
//let name1 = Name.at( 3);
//let name1 = Name.charAt(0)
//let name1 = Name.charCodeAt(6);
//let name1 = Name.codePointAt(5);
//let text1="Hello";
//let text2="world";
//let result = text1.concat( " " + text2);
//console.log(result);
//console.log(Name.slice(3 , 7))
//let  message = "Hy! My Name is Maham";
//let text = message.endsWith("Maham");
//console.log(text);
//let text = message.lastIndexOf("Name");
//console.log(text);

//local compare
// 0 if equal
// 1 if sorted after 
// -1  if sorted before
//let text1= "abh"
//let text2= "gfc";
//let result = text1.localeCompare(text2);
// console.log(result)
 //let text =" Hy! My name is Maham";
 //let text1 = text.replace("Maham" , "Fatima");
 //console.log(text1);


 // Numbers and Math
 const balance= 12345.67;
 console.log(balance.toString().length);
 console.log(balance.toFixed(8));
 console.log(balance.toPrecision(4));
 let number = 10000000000;
 console.log(number.toLocaleString())

 /// Math

 //console.log(Math.abs(-5));
 //console.log(Math.round(56.7));
 // floor takes the lowest value
// console.log(Math.floor(9.4));
// console.log(Math.ceil(67.5));

 console.log(Math.floor(Math.random()*10) + 1);

 
 const min= 40;
 const max = 70;
 console.log((Math.random() * (max - min) + min ));


 //Date 
 /*const date = new Date(0-13-2024);
 console.log(date.toDateString());
 console.log(date.toISOString());
 console.log(date.toJSON());
 console.log(date.toLocaleDateString());
 console.log(date.toLocaleString());
 console.log(date.toTimeString());
 console.log(date.toUTCString());*/
 
 //Arrays

 const arr = [1,2,4,5,7,8];
 //console.log(arr);
 //arr.push(68);
 //arr.pop();
 //arr.unshift(56)
 console.log(arr.includes(5));
 console.log(arr.indexOf(7));
 console.log(arr.join());

//console.log(arr);
console.log(arr.slice(2 , 5))
//console.log(arr.splice(1,3))

const names=["maham", "burhan" , "ayesha"];
const ids=[23 ,45,78,90];
const nameIds= [...names , ...ids];
//console.log(nameIds);

const array=[1, 2,3 ,4, [2 ,6,8] ,9, 10,11,[12,13,[134,13,15,16]],17,18,19,20];
//console.log(array.flat(Infinity));

console.log(Array.isArray("maham"));
console.log(Array.from("maham"));
console.log(Array.from({name: "maham"})); // empty output
let score1 = 300;
let score2 = 400;
let score3= 500;
console.log(Array.of(score1,score2,score3));









 




 


 


 