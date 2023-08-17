let correctNumber = 12

// Plus sign is used to change string into number
let userGuess = +prompt("guess a number")
console.log(userGuess);

// nested if else 
if(userGuess === correctNumber){
    console.log("your guess is right")
}else{
    if(userGuess > correctNumber){
        console.log("your is above 12")
    }else{
        console.log("you guess is below 12")
    }
}