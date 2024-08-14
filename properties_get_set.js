function User(username , email){
this._username=username;
this._email=email;

Object.defineProperty(this, 'username', {
     get : function(){
        return this._username;
     },
     set : function(value){
        this._username = value.yoUpperCase();
     }
})

Object.defineProperty(this, 'email', {
    get : function(){
       return this._email;
    },
    set : function(value){
       this._email = value.yoUpperCase();
    }
})
}

const users = new User("Maham Fatima" , "hehehe@gmail.com");
console.log(users.username)
console.log(users.email)

