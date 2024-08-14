class User {
    constructor(username,password,email) {
        this.username=username;
        this.password=password;
        this.email=email;
    }

    encryptedPassword(){
      return `${this.password}ehgy`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const users = new User("maham" , "3456","mahamf492@gmail.com")
console.log(users.encryptedPassword())
console.log(users.changeUsername())

//behind the scene 
function User(username,password,email){
    this.username=username;
    this.password=password;
    this.email=email;
}
User.prototype.encryptedPassword=function(){
    return `${this.password}ehgy`
}

User.prototype.changeUsername=function(){
   return `${this.username.toUpperCase()}`
}
const user = new User("maham" , "3456","mahamf492@gmail.com")
console.log(user.encryptedPassword())
console.log(user.changeUsername())


