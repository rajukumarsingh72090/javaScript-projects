const oddEven = [1,2,3,4,5,6,7,8,9,0]


// even numbers 
// const isEven = function(check){
//     return check % 2 === 0
// }

// const result = oddEven.filter(isEven)
// console.log(result)

// odd numbers
const isOdd = function(check){
    return check % 2 !== 0
}

const result = oddEven.filter(isOdd)
console.log(result)