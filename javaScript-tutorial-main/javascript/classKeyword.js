class CreateUser{
    constructor(fName,lName,age,emailId,adress){
        console.log("constructor")
        this.fName = fName
        this.lName = lName
        this.age = age
        this.emailId = emailId
        this.adress = adress  
    }
    about(){
        return `my name is ${this.fName} and my age is ${this.age}`
    }
    is18(){
        return this.age >= 18
    }
}

const userName1 = new CreateUser("raju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName2 = new CreateUser("sanju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
const userName3 = new CreateUser("birju kumar", "singh", 21, "rajukumarsingh72090@gmail.com", "khajuri, saran, mashrakh")
console.log(userName1.fName)
console.log(userName1.is18())
console.log(Object.getPrototypeOf(userName1))

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

// object or instance both are same
// const animal1 = new Animal("tom", 2)
const animal1 = new Dog("tom", 2, 34)
console.log(animal1)
console.log(animal1.eat())
console.log(animal1.isSuperCute())
console.log(animal1.isCute())
console.log(animal1.run())