class KoiAadmi{
    constructor(fName,lName,age){
        console.log("constructor")
        this.fName = fName
        this.lName = lName
        this.age = age
    }
    // by static we call this function with main class that is koiAadmi
    static classInfo(){
        return "this is person class"
    }
    static myHero = "vegetarian has a great respect"
    get fullName(){
        return `${this.fName} ${this.lName}`
    }

    set fullName(fullName){
        const [fName,lName] = fullName.split(" ")
        this.fName = fName
        this.lName = lName
    }
    eat(){
        return `${this.fName} is eating`
    }
    isSuperCute(){
        return this.age <= 1
    }
    isCute(){
        return true
    }
}
const aadmi1 = new KoiAadmi("raju kumar","singh", 21)
console.log(aadmi1.eat())
console.log(KoiAadmi.classInfo())
console.log(KoiAadmi.myHero)