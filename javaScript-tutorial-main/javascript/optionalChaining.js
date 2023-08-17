// const user1 = {
// fName: "raju",
//     addressOfRaju: {housenumber: 1234}
// }
// console.log(user1.fName)
// console.log(user1.addressOfRaju)
// console.log(user1.addressOfRaju.housenumber)


// optional chaining for later value it means the value is not available now but can be availabe later
const user2 = {
    fName: "raj"
}
console.log(user2?.fName)
console.log(user2?.addressOfRaju)
console.log(user2?.addressOfRaju?.housenumber)