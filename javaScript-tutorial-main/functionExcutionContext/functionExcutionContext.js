let foo = "foo"
console.log(foo)
function getFullName(firstName, lastName){
    console.log(arguments)
    let myVar = "this is my variable"
    console.log(myVar)
    const fullName = firstName + " " + lastName
    return fullName
}
const persName = getFullName("raju", "kumar")
console.log(persName)