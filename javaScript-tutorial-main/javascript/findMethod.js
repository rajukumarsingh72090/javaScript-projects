const SomeArray = ["cat", "dog", "rat", "bitch"]

// function IsLength1(words1){
//     return words1.length === 5
// }

// const ands = SomeArray.find(IsLength1)
// console.log(ands)

const ands = SomeArray.find((words) => words.length === 3)
console.log(ands)

// SomeArray.find()

const mobileUser = [
    {user: 1, userName: "raju"},
    {user: 2, userName: "hamir"},
    {user: 3, userName: "samiya"},
    {user: 4, userName: "niraj"},
]
const allUser = mobileUser.find((chalanewale) =>{
  return chalanewale.user === 3
})

console.log(allUser)