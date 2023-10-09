const someNum = [2,4,6,8,10]

// every method will give true when all element will be even here if one if one element will odd the result will be false
const ans = someNum.every((num) => num%2 === 0)
console.log(ans)


const users = [
    {fName: "raju kukmar", age: 21,    pocketMoney: "50000"},
    {fName: "sonu kukmar", age: 20,    pocketMoney: "40000"},
    {fName: "mohit kukmar", age: 19,   pocketMoney: "60000"},
    {fName: "harshit kukmar", age: 22, pocketMoney: "15000"}
]

// checking every one has less than 70000 thousand money

const check = users.every((letSChek) => letSChek.pocketMoney < 70000)
console.log(check)