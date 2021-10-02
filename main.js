SpeechRecognition= window.webkitSpeechRecognition;
recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    speak();
}


function speak(){
    synth=window.speechSynthesis;
    speakdata= document.getElementById("textbox");
    utterThis=new SpeechSynthesisUtterance(speekdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});