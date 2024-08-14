

 let user = {
   username:"maham",
   id :679,

   getuserDetail : function(){
       console.log(`The username is ${this.username}`)
   }
 }

 Object.prototype.Maham=function(){
    console.log("Hy! This is Maham")
 }
 user.Maham()

let myhero =["thor " , "spiderman"];
Array.prototype.heyMaham = function(){
    console.log("Hey! this is new Maham")
}

myhero.heyMaham();
