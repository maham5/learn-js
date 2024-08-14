class User {
    constructor(username) {
        this.username=username;
    }
    logMe(){
        console.log(`The Username is : ${this.username}`)
    }

   static createdat(){
        return `123`
    }
}
const user=new User("Maham fatima");
//console.log(user.createdat());
class Teacher extends User {
    constructor(username , password) {
        super(username);
        this.password = password;
    }
}

const users = new Teacher("Maham Fatima" , "4567");
//users.createdat()
users.logMe();

