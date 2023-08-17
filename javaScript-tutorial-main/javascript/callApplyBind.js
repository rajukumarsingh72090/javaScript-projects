function hello(){
    console.log("hello world")
}
// hello()
hello.call()


      function about (hobby, favMusician){
         console.log(this.fName, this.age, hobby, favMusician)
     }

const user1 = {
    fName: "raju",
    age: 21,
    // we can take this function outside 
    // about: function(hobby, favMusician){
    //     console.log(this.fName, this.age, hobby, favMusician)
    // }
}

const user2 = {
    fName: "pratik",
    age: 8,
}
// user1.about()
// user1.about(user2)
// user1.about.call(user2, "cricket", "arijit singh")
about.call(user1, "cricket", "arijit singh")
// in apply we have pass string in a array
about.apply(user1, ["cricket", "arijit singh"])
// bind will not console it will make a function 
// about.bind(user1, ["cricket", "arijit singh"])
const myFunc = about.apply(user1, ["cricket", "arijit singh"])

