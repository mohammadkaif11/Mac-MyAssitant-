import React ,{useEffect}from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const socketIOClient =require("socket.io-client");

function MyAssistant() {
  let speech = new SpeechSynthesisUtterance();
  const commands=[{
    command:["mac *"],
    //start chorme*
    //system Restart ,shutdown
    //volume up down
    callback:(data)=>{
      const socket = socketIOClient(window.location.protocol+"//"+window.location.hostname+":5000");
      console.log(data)       
      socket.emit("SendMessage",data)
    }
  }]

  const CallVocieBack=(data)=>{
    speech.text=data
    speech.lang = "en-US";
    speech.volume = 10;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
  }

  useEffect(() => {
    const socket = socketIOClient(window.location.protocol+"//"+window.location.hostname+":5000");
    socket.on('SendResponse',data=>{
      CallVocieBack(data)
    })
    return()=>{
      socket.off('SendResponse')
    }
  }, [])
  
  const {transcript} =useSpeechRecognition({commands})
  return (
    <div>
         <h1>Hii</h1>
          <p>transcript:{transcript}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
    
  )
}

export default MyAssistant