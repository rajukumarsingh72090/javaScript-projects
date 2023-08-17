// events means action on click
// three method to add events 
         // 1 add OnClick in any html tage and write action code but this is old method

        //  2 onclick function directly in javascript
        //   const btn = document.querySelector(".btn-headline")
        //    console.log(btn)
        //    btn.onclick = function(){
        //       console.log("you clicked me")
        //    }       // this is also old method and apply only on one function

        // 3 using addEventListner
          const btn = document.querySelector(".btn-headline")
        //   function clickMe(){
        //     console.log("hey you clicked me with outside function")
        //   }
        // btn.addEventListener("click", function(){
        //     console.log("hey you clicked me with inside function")
        //   })     
        btn.addEventListener("click", () => {
            console.log("hey you clicked me with arrow function")
          })