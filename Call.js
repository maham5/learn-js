function User(username){
     this.username = username;
     console.log("called")
}

function createUser(username , email , password){
    User.call(this,username)
    this.email = email;
 this.password=password;

}
 
const chai = new createUser("chai" , "mahamf@gmail.com" , "hy789");
console.log(chai)