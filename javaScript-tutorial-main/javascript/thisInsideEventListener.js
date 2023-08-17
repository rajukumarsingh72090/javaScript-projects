const btn = document.querySelector(".btn-headline")
btn.addEventListener("click", function() {
    console.log("hey you clicked me with arrow function")
    console.log("value of this is")
    console.log(this)
  })