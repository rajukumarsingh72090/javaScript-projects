// function inside object is called method
const person = {
    FName: "raju",
    age: 21,
    about: function(){
        // here this is that object that will call the fuction
        // console.log(this)
        // console.log(this.FName)
        // console.log(this.age)
        console.log(`person name is ${this.FName} and person age is ${this.age}`)
    }
}
person.about()

// example
// this represnt the person value
function  personInfo(){
    console.log(`person name is ${this.fName} and person age is ${this.age}`)
}

const person1 = {
    fName: "sanju",
    age: 55,
    about: personInfo
}
const person2 = {
    fName: "mohit",
    age: 21,
    about: personInfo
}
const person3 = {
    fName: "harshit",
    age: 22,
    about: personInfo
}
const person4 = {
    fName: "manjit",
    age: 22,
    about: personInfo
}
person1.about()
person2.about()
person3.about()
person4.about()