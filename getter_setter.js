class User {
    constructor(username , email) {
        this.username=username;
        this.email=email;
    }
    get email(){
   return this._email.toUpperCase();
    }
    set email(value){
          this._email=value;
    }
    get username(){
        return `${this._username}`;
    }
    set username(value){
        this._username = value.toUpperCase();
    }
}
const user = new User("Maham Fatima" , "mahamf48@gmail.com");
console.log(user.username)
console.log(user.email)
