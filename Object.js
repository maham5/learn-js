//prototype : Function prototype = object 
//Arrays to Objects 
//Strings to Object
function multiple(num){
    return num*5;
}
multiple.power = 3
console.log(multiple(6));
console.log(multiple.power);
console.log(multiple.prototype)


function Userdetail(username,price){
     this.username = username;
     this.price =price;

}
Userdetail.prototype.increment=function(){
    this.price++;
}
Userdetail.prototype.printMe =function(){
    console.log(`The Price is ${this.price}`)
}

const chai =new Userdetail("Chai" , 25);
const Tea = new Userdetail("Tea" ,  250);

//chai.printMe();
chai.increment();