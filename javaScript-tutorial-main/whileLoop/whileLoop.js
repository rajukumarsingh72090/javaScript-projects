// ++ is use to increase number by 1
//without while loop
let num1 = 0
console.log(num1)

num1++
console.log(num1)

num1++
console.log(num1)

num1++
console.log(num1)

// while loop
let num2 = 0
while(num2 <= 9){
    console.log(num2)
    num2++
}

console.log(`current value of num2 is ${num2}`)

//  example without whlile loop
let total1 =  0
total1 = total1 + 1  // 0 + 1 = 1
total1 = total1 + 2  // 1 + 2 = 3
total1 = total1 + 3  // 3 + 3 = 6
total1 = total1 + 4  // 6 + 4 = 10
total1 = total1 + 5  // 10 + 5 = 15
total1 = total1 + 6  // 15 + 6 = 21

console.log(total1)

// example with while loop
let total2 = 0
let addding = 0  // spelling mistake deliberatly
while(addding <= 6){
    total2 = total2 + addding
    addding++
}
console.log(total2)

// same example with math formula without while loop
let total3 = 0
let num3 = 6

total3 = num3*((num3+1)/2)
console.log(total3)