const userRepeat = {
    about : function(){
        return `my name is ${this.fName} and my age is ${this.age}`
    },
    is18 : function(){
        return this.age >= 18
    }
    
}

function creatUser(fName,lName,age,emailId,adress,about, is18){
    const user = Object.create(userRepeat)
    user.fName = fName
    user.lName = lName
    user.age = age
    user.emailId = emailId
    user.adress =adress
    return user
}
const userName1 = creatUser("raju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName2 = creatUser("sanju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName3 = creatUser("birju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")

console.log(userName1)
console.log(userName1.about())