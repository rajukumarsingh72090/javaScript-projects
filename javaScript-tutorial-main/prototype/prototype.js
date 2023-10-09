// revision what we have done
// function Hello(){
//     console.log("hello world")
// }
// Hello()

// function is an object but objec is not function
// in javaScript we can add our own properties
// Hello.myOwnProperty = "very unique number"
// console.log(Hello.myOwnProperty)

// property name tell the function name
// function provides more useful properties like call , bind , apply etc.

// console.log(Hello.prototype)
// only function provide prototype property

// const hello = {
//     fName: "raju kumar"
// }

// here prototype is not present because this is not function
// if(hello.prototype){
//     console.log("this is prototype")
// }else{
//     console.log("this is not prototype")
// }

function Hello1(){
    console.log("hello world")
}
Hello1()

Hello1.prototype.abc = "abc"
Hello1.prototype.xyz = "abc"
Hello1.prototype.sing = function(){
    return "mai koi aisa geet gaau"
}
console.log(Hello1.prototype)
console.log(Hello1.prototype.sing())


// example
// const userRepeat = {
//     about : function(){
//         return `my name is ${this.fName} and my age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age >= 18
//     },
//     sing: function(){
//         return("las lal lal la")
//     }
// }

function creatUser(fName,lName,age,emailId,adress,about, is18){
    const user = Object.create(creatUser.prototype)
    user.fName = fName
    user.lName = lName
    user.age = age
    user.emailId = emailId
    user.adress =adress  
    return user
}
// we are adding about and is18 in creatuser thorough prototype
creatUser.prototype.about = function(){
    return `my name is ${this.fName} and my age is ${this.age}`
}
creatUser.prototype.is18 = function(){
    return this.age >= 18
}
creatUser.prototype.sing = function(){
    return "lal lala lala la laa"
}

const userName1 = creatUser("raju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName2 = creatUser("sanju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName3 = creatUser("birju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
console.log(userName1.sing())
console.log(userName1.is18())