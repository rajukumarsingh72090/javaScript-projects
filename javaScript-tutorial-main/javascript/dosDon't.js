const person = {
    FName: "raju",
    age: 21,
    about: function(){
        console.log(this.FName, this.age)
    }
}
person.about()
// don't do like this it will not show because this about is store in window/global 
// const myFunc = person.about
// myFunc()

// do like this
const myFunc = person.about.bind(person)
myFunc()

// we don't use this.fName with arrow (=>) function it will show undefined we will write person2.fName
const person2 = {
    FName: "raju",
    age: 21,
    about: () =>{
        console.log(person2.FName, person2.age)
    }
}
person2.about()

// we don't need to write function we can run without function looke at this 
const person3 = {
    FName: "raju",
    age: 21,
    about (){
        console.log(person2.FName, person2.age)
    }
}
person2.about()

