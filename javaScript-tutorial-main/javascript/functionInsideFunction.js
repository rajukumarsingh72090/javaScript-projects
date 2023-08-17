const app = () => {
    const myFunc = () => {
        console.log("my function")
    }
    const addTwo = (num1, num2) =>{
        return num1 + num2
    }
    const muliple1 = (multi1, multi2) => {
        return multi1 * multi2
    }
    console.log("hello")
    myFunc()
    console.log(addTwo(4,5))
    console.log(muliple1(4,5))
}

app()