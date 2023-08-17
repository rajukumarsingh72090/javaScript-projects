// const allNavItems1 = document.getElementsByClassName("nav-inside")      //html collection
// const allNavItems1 = document.getElementsByTagName("a")      //html collenction
// let allNavItems1 = document.getElementsByTagName("a")      //html collenction

// console.log(allNavItems1.length)
// we can't use forEach method with html collection

// for loop
// for(let i = 0; i < allNavItems1.length; i++){
//     // console.log(allNavItems1[i])
//     const ChangeColor = allNavItems1[i]
//     ChangeColor.style.backgroundColor = "grey"
//     ChangeColor.style.color = "white"
//     ChangeColor.style.fontWeight = "bold"
// }

// console.log(Array.isArray(allNavItems1))
// // changing html collection into array
// allNavItems1 = Array.from(allNavItems1)
// console.log(Array.isArray(allNavItems1))


// // for of loop
// for(let ChangeColor of allNavItems1){
//     ChangeColor.style.backgroundColor = "grey"
//     ChangeColor.style.color = "white"
//     ChangeColor.style.fontWeight = "bold"
// }


// nodeList 
let allNavItems1 = document.querySelectorAll("a");      //node list


// for loop
// for(let i = 0; i < allNavItems1.length; i++){
//     // console.log(allNavItems1[i])
//     const ChangeColor = allNavItems1[i]
//     ChangeColor.style.backgroundColor = "grey"
//     ChangeColor.style.color = "white"
//     ChangeColor.style.fontWeight = "bold"
// }


// // for of loop
// for(let ChangeColor of allNavItems1){
//     ChangeColor.style.backgroundColor = "grey"
//     ChangeColor.style.color = "white"
//     ChangeColor.style.fontWeight = "bold"
// }

// forEach method
allNavItems1.forEach(ChangeColor => {
    ChangeColor.style.backgroundColor = "grey";
    ChangeColor.style.color = "white";
    ChangeColor.style.fontWeight = "bold";
});