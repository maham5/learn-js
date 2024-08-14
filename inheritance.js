class User {
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(  `Username is: ${this.username}`)
    }
}
class Teacher extends User {
    constructor(username,email,password) {
       super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log( `${this.username} added a new course`)
    }
}

const user =new User("Maham");
const users =new Teacher("maham fatima " , "mahamf492@gmail.com" ,"345");
users.addCourse();
user.logMe()
user.logMe()
console.log(user instanceof User);