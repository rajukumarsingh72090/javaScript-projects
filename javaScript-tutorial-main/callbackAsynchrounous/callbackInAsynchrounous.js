const heading1 = document.querySelector(".headinng1")
const heading2 = document.querySelector(".headinng2")
const heading3 = document.querySelector(".headinng3")
const heading4 = document.querySelector(".headinng4")
const heading5 = document.querySelector(".headinng5")
const heading6 = document.querySelector(".headinng6")
const heading7 = document.querySelector(".headinng7")

// setTimeout(()=>{
//     heading1.textContent = "raju"
//     heading1.style.color = "green"
// }, 3000)

// setTimeout(()=>{
//     heading2.textContent = "raju"
//     heading2.style.color = "green"
// }, 4000)

// callback hell = callback inside callback
// setTimeout(()=>{
//     heading1.textContent = "raju"
//     heading1.style.color = "green"
//     setTimeout(()=>{
//         heading2.textContent = "kumar"
//         heading2.style.color = "red" 
//         setTimeout(()=>{
//             heading3.textContent = "singh"
//             heading3.style.color = "red"
//             setTimeout(()=>{
//                 heading4.textContent = "one"
//                 heading4.style.color = "red"
//                 setTimeout(()=>{
//                     heading5.textContent = "two"
//                     heading5.style.color = "red"
//                     setTimeout(()=>{
//                         heading6.textContent = "three"
//                         heading6.style.color = "red"
//                         setTimeout(()=>{
//                             heading7.textContent = "four"
//                             heading7.style.color = "red"
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     }, 1000)
// }, 3000)


// function changText(element, text, color, time){
//     setTimeout(() => {
//         if(element){
//             element.textContent = text
//             element.style.color = color
//         }else{
//             console.log("your element does not exit")
//         }
//     }, time);
// }
// changText(heading1, "one", "blue", 2000)

function changText(element, text, color, time, AfterSucessCall, AfterFailure){
    setTimeout(() => {
        if(element){
            element.textContent = text
            element.style.color = color
            if(AfterSucessCall){
                AfterSucessCall()
            }
        }else{
           if(AfterFailure){
            AfterFailure()
           }
        }
    }, time);
}

// pyramid of doome
changText(heading1, "one", "blue", 2000, ()=>{
    changText(heading2, "two", "green", 1000, ()=>{
        changText(heading3,"three", "yellow", 1000, ()=>{
            changText(heading4, "four", "brown", 1000, ()=>{
                changText(heading5, "five", "red", 1000, ()=>{
                    changText(heading6, "six", "wheat",1000, ()=>{
                        changText(heading7, "seven", "pink", 1000)
                    },()=>{console.log("element does not exist")})
                },()=>{console.log("element does not exist")})
            },()=>{console.log("element does not exist")})
        },()=>{console.log("element does not exist")})
    },()=>{console.log("element does not exist")})  
}, ()=>{console.log("element does not exist")})