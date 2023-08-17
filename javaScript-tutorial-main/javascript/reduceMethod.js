const someNum1 = [1,2,4,5,6,7,8]

// sum all the number and give directly final result
const addNum1 = someNum1.reduce((kuchi1, kuchi2) => {
    return kuchi1 + kuchi2
    // if we put some number it will add first in the final result as here 100 + (kuch1 +kuchi2)
    // if we will not put any number it will add only kuchi1 and kuchi2
}, 100)
console.log(addNum1)

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

const userCart = Users.reduce((totalProduct, totalPrice) =>{
    return totalProduct + totalPrice.price  
}, 0)

console.log(userCart)