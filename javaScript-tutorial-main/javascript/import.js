// export default can be used once
export default class Person{
             constructor(pName, pLName, pAge){
                 this.pName = pName
                 this.pLName = pLName
                 this.pAge = pAge
             }
         
             info(){
                 console.log(this.pName, this.pLName, this.pAge)
             }
}

export  class Person2{
    constructor(pName, pLName, pAge){
        this.pName = pName
        this.pLName = pLName
        this.pAge = pAge
    }

    info(){
        console.log(this.pName, this.pLName, this.pAge)
    }
}