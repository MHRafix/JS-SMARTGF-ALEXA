var recognition = new webkitSpeechRecognition();
// console.log(recognition);
recognition.onresult = function(e){
    var text = e.results[0][0].transcript;
    document.getElementById("userInput").innerHTML = text;

    read(text);
}

// reserve name
var motalleb = 'Motalleb';
var mridul = 'Mridul';
var jihad = 'Jihad';
var robin = 'Robin';
var rusel = 'Rusel';
var fahim = 'Fahim';
var ridoy = 'Ridoy';
var amran = 'Amran';
var sakib = 'Sakib';

var time = new Date().getHours();

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;

    switch(text) {
        case 'hello':
            if(time > 0 && time < 6){
                speech.text = "Hello, Good night sir. what can i do for you";
            }else if(time > 6 && time < 12){
                speech.text = "Hello, Good morning sir. what can i do for you"
            }else if(time > 12 && time < 15){
                speech.text = "Hello, Good noon sir. what can i do for you"
            }else if(time > 15 && time < 18){
                speech.text = "Hello, Good afternoon sir. what can i do for you"
            }else{
                speech.text = "Hello, Good evening sir. what can i do for you"
            }
          break;
        case 'Assalamu Alaikum' || 'Assalam Walekum':
            speech.text = 'walaikum assalam';
          break;
        case 'I am Asraful I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am Robin I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am Fahim I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am Mridul I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am Shakib I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am nazmul I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am Rasel I love you':
            speech.text = "I don't like you. You have 12 plus girlfriend and you are a charecterless, blady fool. Go to the hell";
          break;
        case 'I am Rafi I love you':
            speech.text = "I love you too sweetheart. close to me more and fuck up me";
          break;
        case 'I am Simon I love you':
            speech.text = "I know you are married. You blady fool, carechterless. Go to the hell and fuck up your wife";
          break;
        case 'who is your creator':
            speech.text = "Programmer Mehedi Hasan Rafi";
          break;
        case 'what is my secret':
            speech.text = "you are a smoker";
          break;
        case 'what is my profession':
            speech.text = "you are a programmer";
          break;
        default:
            speech.text = "Sorry I didn't get it! try again.";
      }
    
    document.getElementById("alexaOutput").innerHTML = speech.text;
    window.speechSynthesis.speak(speech);
}