// function creatUser(fName,lName,age,emailId,adress,about, is18){
//     const user = {}
//     user.fName = fName
//     user.lName = lName
//     user.age = age
//     user.emailId = emailId
//     user.adress =adress
//     user.about = function(){
//         return `my name is ${fName} and my age is ${age}`
//     }
//     user.is18 = function(){
//         return this.age >= 18
//     }
//     return user
// }
// const userName = creatUser("raju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
// console.log(userName)
// const kya18 =userName.is18()
// console.log(kya18)
// const aboutSection = userName.about()
// console.log(aboutSection)

// we have written about section outside because if we lots of user all the about section will repeat and the memory will full very fastly after writing outside we give a refrence inside the function to protect memory from becoming full.
const userRepeat = {
    about : function(){
        return `my name is ${this.fName} and my age is ${this.age}`
    },
    is18 : function(){
        return this.age >= 18
    }
    // here we can add more fuction and give reference to the main function that is createUser.
}

function creatUser(fName,lName,age,emailId,adress,about, is18){
    const user = {}
    user.fName = fName
    user.lName = lName
    user.age = age
    user.emailId = emailId
    user.adress =adress
    user.about = userRepeat.about  // this is the reference
    user.is18 = userRepeat.is18   // this is the reference
    return user
}

const userName1 = creatUser("raju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName2 = creatUser("sanju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName3 = creatUser("birju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")

console.log(userName1.about())
console.log(userName2.about())