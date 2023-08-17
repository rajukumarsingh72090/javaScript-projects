// here c is rest parameter
function myNum (a, b,...c){
    console.log(`value of a is ${a}`)
    console.log(`value of b is ${b}`)
    console.log(`value of c is ${c}`)
}
myNum(1,2,4,5,6,3,8,9,0)

// example of rest parameter
function addSome(...nummm){
    let total = 0
    for(let summ of nummm){
    total = total + summ
    }
    return total
}

 const iAmAdding = addSome(1,2,3,4,4)
 console.log(iAmAdding)