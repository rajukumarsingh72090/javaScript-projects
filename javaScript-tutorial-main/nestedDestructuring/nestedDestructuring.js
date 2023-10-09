const users = [
    {
        userId: "max@design",
        userName: "maxwell",
        location1: "USA"
    },
    {
        userId: "fahida_sales",
        userName: "fahida",
        location1: "abu Dhabi"
    },
    {
        userId: "raju1234",
        userName: "raju",
        location1: "india"
    },
]

// const [user1, user2, user3] = users
// console.log(user3)
// console.log(user2)
// console.log(user1)

// destructuring 
const [{userId: user2userName}, ,{location1}] = users
console.log(user2userName)
console.log(location1)