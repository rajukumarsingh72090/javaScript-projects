function CreatUser(fName,lName,age,emailId,adress,about, is18){
    this.fName = fName
    this.lName = lName
    this.age = age
    this.emailId = emailId
    this.adress =adress  
    return this
}
// we are adding about and is18 in creatuser thorough prototype
CreatUser.prototype.about = function(){
    return `my name is ${this.fName} and my age is ${this.age}`
}
CreatUser.prototype.is18 = function(){
    return this.age >= 18
}
CreatUser.prototype.sing = function(){
    return "lal lala lala la laa"
}

const userName1 = new CreatUser("raju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName2 = new CreatUser("sanju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName3 = new CreatUser("birju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
console.log(userName1.sing())
console.log(userName1.is18())

// for(let key1 in userName1){
//     console.log(key1)
// }

// if we don't want to see key of prototype function we will use hasOwnProperty
for(let key1 in userName1){
    if(userName1.hasOwnProperty(key1)){
        console.log(key1)
    }
}
