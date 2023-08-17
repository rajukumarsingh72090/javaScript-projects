// if we made variable with let and const we cannot access out side the block {} we have to access inside the block {} but we can access if varible made with var

{
    let mony = "raju"     //block scope
    console.log(mony)
}
// console.log(mony)
{
    let mony = "kumar"   //block scope
    console.log(mony)
}

// we  can use multiple cosnt and let with same name in different blocks {} here are some example see above and below
{
    const mony = "singh"   //block scope
    console.log(mony)
}

{
    const mony = "khajuri"    //block scope
    console.log(mony)
}

// var can access be anywhere in the whole function
{
    var money = "paise"     //function scope
}
console.log(money)

// something we write under curly braces called bloop
if(true){
    const myName1 = "sony"
    console.log(myName1)
}

function app (){
    if(true){
        const myName2 = "kumar"
        console.log(myName2)
    }
    if(true){
        const myName3 = "dheeraj"
        console.log(myName3)
    }
    // in case of var we can access even outside of the block/ function let see
    if(true){
        var myName4 = "sumit"
        // console.log(myName4)
    }
    console.log(myName4)

}
app()


