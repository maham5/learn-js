const object ={
    username : "maham fatima",
    id :234,
    email:"mahamf492@gmail",

    getuserDetails : function(){
       // console.log(`Username :  ${this.username}`)
        console.log(this)
    }
}
console.log(object.username)
console.log(object.getuserDetails())

function user(usernmae, id , email){
    this.username=usernmae;
    this.id=id;
    this.email=email;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

//return this;
}
const userOne = new  user("maham Fatima" ,890 , "mahamty@gmail.com");
const userTwo = new user("Farhan" ,234 , "mahamty@gmail.com");

console.log(userOne.constructor)
//console.log(userTwo)

//object instance of constructor
