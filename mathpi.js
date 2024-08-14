const descriptor=Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);

const user = {
    name :"maham",
    email :"blue6@gmail.com",
    isAvailable : true,
     object:function(){
        console.log("Blueberry")
     }

}

//console.log(Object.getOwnPropertyDescriptor(user, "email"));
/*const users=Object.defineProperty(user , "email",{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(user , "email"))*/


for(let [key, value ]of Object.entries(user)){
    if(typeof value  !== "function"){
        console.log(`${key} : ${value}`)
    }
    
}