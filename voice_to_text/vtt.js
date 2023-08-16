function voice(){
    var recognition = new webkitSpeechRecognition()
    webkitSpeechRecognition.lang = "en-GB"
    recognition.onresult = function(event){
        document.getElementById("spt").value = event.results[0][0].transcript
    }
    recognition.start()
}