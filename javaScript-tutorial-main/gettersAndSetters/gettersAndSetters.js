class KoiAadmi{
    constructor(fName,lName,age){
        console.log("constructor")
        this.fName = fName
        this.lName = lName
        this.age = age
    }
    // fullName(){
    //     return `${this.fName} ${this.lName}`
    // }
    // here we are adding get because we don't need call this function with paranthesis we can direcltyl access by consol.log(aadmi1.fullName)
    get fullName(){
        return `${this.fName} ${this.lName}`
    }
    // we are using to change the name later
    // setName(fName,lName){
    // this.fName = fName
    // this.lName = lName
    // }

    // by using this set function we don't need to change manually we can change diretyl with fullname
    set fullName(fullName){
        const [fName,lName] = fullName.split(" ")
        this.fName = fName
        this.lName = lName
    }
}
const aadmi1 = new KoiAadmi("raju kumar","singh", 21)
// console.log(aadmi1)
// // console.log(aadmi1.fullName())
// console.log(aadmi1.fullName)
// console.log(aadmi1.fName)
// console.log(aadmi1.lName)
// aadmi1.setName("sanjeev kumar", "kushwaha")
// console.log(aadmi1.fName)
// console.log(aadmi1.lName)
aadmi1.fullName = "raju kumar"
console.log(aadmi1)

// example
class Animal {
    constructor(AniName, AniAge){
        this.AniName = AniName
        this.AniAge = AniAge
    }
    eat(){
        return `${this.AniName} is eating`
    }
    isSuperCute(){
        return this.AniAge <= 1
    }
    isCute(){
        return true
    }
}

// this is the subclass of animal here we have all the properties from class Animal 
// class Animal called super class
class Dog extends Animal {
    constructor( AniName, AniAge,speed){
// here super is used to get constructor from class Animal
        super(AniName,AniAge)
        this.speed = speed
    }
    run(){
        return `${this.AniName} is running in the speed of ${this.speed} km`
    }
    eat(){
        return ` modified eat: ${this.AniName} is eating `     
    }
}

const animal1 = new Animal("sheru", 2)
console.log(animal1)
console.log(animal1.eat())