import React, { Component } from 'react'
import {Howl, Howler} from 'howler';
import BlackKey from './BlackKey'
import Key from './Key'
import './Keyboard.css'
import Sounds from './sounds/sounds'
import A from './sounds/A.mp3'
import ASharp from './sounds/ASharp.mp3'
import B from './sounds/B.mp3'
import C from './sounds/C.mp3'
import CSharp from './sounds/CSharp.mp3'
import D from './sounds/D.mp3'
import DSharp from './sounds/DSharp.mp3'
import E from './sounds/E.mp3'
import F from './sounds/F.mp3'
import FSharp from './sounds/FSharp.mp3'
import G from './sounds/G.mp3'
import GSharp from './sounds/GSharp.mp3'


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

cNote = new Howl({
  src: [C]
})
cSharp = new Howl({
  src: [CSharp]
})
dNote = new Howl({
  src: [D]
})
dSharp = new Howl({
  src: [DSharp]
})
eNote = new Howl({
  src: [E]
})
fNote = new Howl({
  src: [F]
})
fSharp = new Howl({
  src: [FSharp]
})
gNote = new Howl({
  src: [G]
})
gSharp = new Howl({
  src: [GSharp]
})
aNote = new Howl({
  src: [A]
})
aSharp = new Howl({
  src: [ASharp]
})
bNote = new Howl({
  src: [B]
})

playNote(note){
  note.play()
}

 keyPress = (note) => {
   switch(note){
      case "c":
        console.log("this is the c note")
        this.pressed = this.cNote
        this.playNote(this.cNote)
        console.log(this.pressed)
        return null
      case "cSharp":
        console.log("this is the cSharp note")
        this.pressed = this.cSharp
        this.cSharp.play()
        console.log(this.pressed)
        return ""
      case "d":
        console.log("this is the d note")
        this.pressed = this.dNote
        this.dNote.play()
        return ""
      case "dSharp":
        console.log("this is the dSharp note")
        this.pressed = this.dSharp
        this.dSharp.play()
        return ""
      case "e":
        console.log("this is the e note")
        this.pressed = this.eNote
        this.eNote.play()
        return ""
      case "f":
        console.log("this is the f note")
        this.pressed = this.fNote
        this.fNote.play()
        return ""
      case "fSharp":
        console.log("this is the fSharp note")
        this.pressed = this.fSharp
        this.fSharp.play()
        return ""
      case "g":
        console.log("this is the g note")
        this.pressed = this.gNote
        this.gNote.play()
        return ""
      case "gSharp":
        console.log("this is the gSharp note")
        this.gSharp.play()
        this.pressed = this.gSharp
        return ""
      case "a":
        console.log("this is the a note")
        this.pressed = this.aNote
        this.aNote.play()
        return ""
      case "aSharp":
        console.log("this is the aSharp note")
        this.pressed = this.aSharp
        this.aSharp.play()
        return ""
      case "b":
        console.log("this is the b note")
        this.pressed = this.bNote
        this.bNote.play()
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
        if(recordLoop.length === 300){
          this.stopRecording()
        }
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
        if(this.state.loop[i] !== ""){
          this.playNote(this.state.loop[i])
        }
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
    // console.log(Sounds)
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
