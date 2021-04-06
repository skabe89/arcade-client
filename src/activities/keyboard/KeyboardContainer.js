import React, { Component } from 'react'
import {Howl, Howler} from 'howler';
import BlackKey from './BlackKey'
import Key from './Key'
import './Keyboard.css'

export default class KeyboardContainer extends Component {

state = {
  loop: ""
  //soundLibrary: this.presetOne
}

// presetOne = {c: "whatever", playc: playAudio(file")}
// presetTwo = {c: "word?"}

// handleSoundSelect = (e) => {
//   this.setState(soundLibrary: e.target)
// }

// playAudio(){
  
// }

pressed = ""

aNote = new Howl({
  src: ['http://large.stanford.edu/courses/2007/ph210/otey2/wav/a3.wav']
})

 keyPress = (note) => {
   switch(note){
      case "c":
        console.log("this is the c note")
        this.pressed = note
        console.log(this.pressed)
        return null
      case "cSharp":
        console.log("this is the cSharp note")
        this.pressed = note
        console.log(this.pressed)
        return ""
      case "d":
        console.log("this is the d note")
        this.pressed = note
        return ""
      case "dSharp":
        console.log("this is the dSharp note")
        this.pressed = note
        return ""
      case "e":
        console.log("this is the e note")
        this.pressed = note
        return ""
      case "f":
        console.log("this is the f note")
        this.pressed = note
        return ""
      case "fSharp":
        console.log("this is the fSharp note")
        this.pressed = note
        return ""
      case "g":
        console.log("this is the g note")
        this.pressed = note
        return ""
      case "gSharp":
        console.log("this is the gSharp note")
        this.pressed = note
        return ""
      case "a":
        console.log("this is the a note")
        this.pressed = note
        this.aNote.play()
        return ""
      case "aSharp":
        console.log("this is the aSharp note")
        this.pressed = note
        return ""
      case "b":
        console.log("this is the b note")
        this.pressed = note
        return ""
      default:
        return ""
   }
 }

  recording = false
  
  startRecording = () => {
    if (this.recording === false){
      this.recording = true
      let recordLoop = []

      this.intervalId = setInterval(() => {
        console.log(this.pressed)
        recordLoop.push(this.pressed)
        this.pressed = ""
      }, 50)

      this.setState({loop: recordLoop})
      this.recording = false
    }
  }

  stopRecording = () => {
    clearInterval(this.intervalId)
  }

  playback = () => {
    for(let i = 0; i < this.state.loop.length; i++){
      setTimeout(() => {
        console.log(this.state.loop[i])
      }, i * 50)
    }
    console.log(this.state.loop)
  }

  componentWillUnmount(){
    this.stopRecording()
  }


  render() {
    console.log("refresh")
    console.log(this.state)
    console.log(this.pressed)
    return (
      <div>
        <div className="keyboard">
            <Key keyPress={this.keyPress} note="c"/>
            <BlackKey keyPress={this.keyPress} note="cSharp" /> 
            <Key keyPress={this.keyPress} note="d"/> 
            <BlackKey keyPress={this.keyPress} note="dSharp" /> 
            <Key keyPress={this.keyPress} note="e"/> 
            <Key keyPress={this.keyPress} note="f"/>
            <BlackKey keyPress={this.keyPress} note="fSharp" />  
            <Key keyPress={this.keyPress} note="g"/> 
            <BlackKey keyPress={this.keyPress} note="gSharp" /> 
            <Key keyPress={this.keyPress} note="a"/> 
            <BlackKey keyPress={this.keyPress} note="aSharp" /> 
            <Key keyPress={this.keyPress} note="b"/> 
        </div>
        <button onClick={this.startRecording}>Record</button>
        <button onClick={this.stopRecording}>Stop</button>
        <button onClick={this.playback}>Play Back Recording</button> 
      </div>
    )
  }
}
