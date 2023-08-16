function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rajukumarsingh72090@gmail.com",
        Password : "raju@explorar1234",
        To : 'rajukumarsingh72090@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}