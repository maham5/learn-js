const User = {
    _email:"hehehe@gmail.com",
    _password : "678",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}
 const user = Object.create(User);
 console.log(user.email)