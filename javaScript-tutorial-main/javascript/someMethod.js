// in some method one element will satisfy the argument the result will be true if none of the element is stasfyig the argument the result will be false

const someNum = [1,2,3,4,5,]

const checking1 = someNum.some((checkingAgain) => checkingAgain%2 === 0)
console.log(checking1)

// example
const Users = [
    {productIndex: "1",
     productName: "mobile",
     price: 12000
    },
    {productIndex: "2",
    productName: "telvision",
    price: 33000
    },
    {productIndex: "3",
    productName: "desktop",
    price: 40000
    } 
]

const chekPric = Users.some((moreThan) => moreThan.price > 30000)
console.log(chekPric)