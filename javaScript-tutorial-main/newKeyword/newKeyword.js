function createUser(fName, age){
    this.fName = fName
    this.age = age
}
createUser.prototype.about = function(){
    console.log(this.fName, this.age)
}
// her new keyword is creating empty object that is ( this {} )
// and then return ( this {} )
// if ( this {} ) did't find value from user1 it will search from prototype
// the function of object.create will run automatically without writing object.create because of empty function this {}
const user1 = new createUser("raju", 21)
console.log(user1)
user1.about()

// example
// __proto__  or [[prototype]] is same it can be seen any of them in different browsers, this is also called constructor function because it's create object
// prototype is different
// we should use first later in capital if we want to later with new {} function 
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