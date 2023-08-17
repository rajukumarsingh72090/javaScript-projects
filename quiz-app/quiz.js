const questions = [
    {
        "que": "who was the first prime minister of india",
        "a": "Nehru",
        "b": "Modi",
        "c": "desai",
        "d": "adani",
        "correct": "a"
    },
    {
        "que": "who was the first president of india",
        "a": "Nehru",
        "b": "rajendra",
        "c": "chandrashekhar",
        "d": "subramaniyam",
        "correct": "b"
    },
    {
        "que": "who was the father of india",
        "a": "rn tagore",
        "b": "godse",
        "c": "gandhi",
        "d": "khudiram",
        "correct": "c"
    },
    {
        "que": "who was the president of afirca",
        "a": "mandela",
        "b": "linson",
        "c": "machulam",
        "d": "smith",
        "correct": "a"
    },
    {
        "que": "who is the current prime minister of india",
        "a": "Nehru",
        "b": "Modi",
        "c": "desai",
        "d": "adani",
        "correct": "b"
    }
]
let index = 0
let right = 0
let wrong = 0
let total = questions.length
const queH1 = document.querySelector(".que")
const labelInput = document.querySelectorAll(".options")
const loadQuestion = () =>{
    if (index === total) {
        return endQuiz()
    }

    reset()
    const data1 = questions[index]
    queH1.innerHTML = `${index+1} ${data1.que}                                                                                                                                                                                            `
    labelInput[0].nextElementSibling.innerHTML = data1.a
    labelInput[1].nextElementSibling.innerHTML = data1.b
    labelInput[2].nextElementSibling.innerHTML = data1.c
    labelInput[3].nextElementSibling.innerHTML = data1.d
}

const quizSubmit = () =>{
    const data1 = questions[index]
    const myAns = submitAnswer()
    if(myAns === data1.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
    return

}

const submitAnswer = () =>{
    let answer1
    labelInput.forEach((myInput) =>{
        if(myInput.checked){
            answer1 = myInput.value
        }else{
            console.log("no")
        }
    })
    return answer1
}

const reset = () =>{
    labelInput.forEach((myInput) =>{
        if(myInput){
            myInput.checked = false
        }else{
            console.log("no")
        }
    })
}

const endQuiz = () =>{
    document.querySelector(".box").innerHTML = ` <h3> thank you</h3>, <h2>${right}/${total} are correct.</h2>`
}
loadQuestion()

