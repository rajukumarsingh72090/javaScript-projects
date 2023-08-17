// in synchrounous one program will excute then 2nd program will start
// here script end after 10s because we have set time
// javascript is single programming language and single thread

// console.log("script start")
// for(let i = 0; i < 10000; i++){
//     console.log("inside for loop")
// }
// console.log("script end")

// setTime Out
// console.log("start")
// function hello(){
//     console.log("result is coming please wait")
// }
// setTimeout(hello, 2000)
// console.log("end")


// console.log("start")
// setTimeout((hello) => {
//     console.log("hello world")
// }, 2000);
// console.log("end")

// console.log("start")
// setTimeout((hello) => {
//     console.log("hello world")
// }, 2000);
// for(let i = 0; i < 10000; i++){
//     console.log("inside for loop")
// }
// console.log("end")


// console.log("start")
// const id = setTimeout((hello) => {
//     console.log("hello world")
// }, 2000);
// for(let i = 0; i < 10000; i++){
//     console.log("inside for loop")
// }
// console.log("setTimeOut id is ", id)
// console.log("end")


console.log("start")
const id = setTimeout((hello) => {
    console.log("hello world")
}, 2000);
for(let i = 0; i < 10000; i++){
    console.log("inside for loop")
}
console.log("setTimeOut id is ", id)
console.log("clearing time out")
clearTimeout(id)
console.log("end")