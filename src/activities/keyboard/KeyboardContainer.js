import React, { Component } from 'react'
import KeyController from './KeyboardControls'
// import {Howl, Howler} from 'howler';
import BlackKey from './BlackKey'
import Key from './Key'
import './Keyboard.css'
import BassPluck from './sounds/bassPluck'
import Piano from './sounds/piano'



export default class KeyboardContainer extends Component {

state = {
  loop: [],
  sounds: BassPluck()
}


// handleSoundSelect = (e) => {
//   this.setState(soundLibrary: e.target)
// }



pressed = ""


playNote(note){
  note.play()
}

 keyPress = (note) => {
   switch(note){
      case "c":
        // console.log("this is the c note")
        this.pressed = this.state.sounds.cNote
        this.playNote(this.state.sounds.cNote)
        // console.log(this.pressed)
        return null
      case "cSharp":
        console.log("this is the cSharp note")
        this.pressed = this.state.sounds.cSharp
        this.playNote(this.state.sounds.cSharp)
        // console.log(this.pressed)
        return ""
      case "d":
        // console.log("this is the d note")
        this.pressed = this.state.sounds.dNote
        this.playNote(this.state.sounds.dNote)
        return ""
      case "dSharp":
        // console.log("this is the dSharp note")
        this.pressed = this.state.sounds.dSharp
        this.playNote(this.state.sounds.dSharp)
        return ""
      case "e":
        // console.log("this is the e note")
        this.pressed = this.state.sounds.eNote
        this.playNote(this.state.sounds.eNote)
        return ""
      case "f":
        // console.log("this is the f note")
        this.pressed = this.state.sounds.fNote
        this.playNote(this.state.sounds.fNote)
        return ""
      case "fSharp":
        // console.log("this is the fSharp note")
        this.pressed = this.state.sounds.fSharp
        this.playNote(this.state.sounds.fSharp)
        return ""
      case "g":
        // console.log("this is the g note")
        this.pressed = this.state.sounds.gNote
        this.playNote(this.state.sounds.gNote)
        return ""
      case "gSharp":
        // console.log("this is the gSharp note")
        this.pressed = this.state.sounds.gSharp
        this.playNote(this.state.sounds.gSharp)
        return ""
      case "a":
        // console.log("this is the a note")
        this.pressed = this.state.sounds.aNote
        this.playNote(this.state.sounds.aNote)
        return ""
      case "aSharp":
        // console.log("this is the aSharp note")
        this.pressed = this.state.sounds.aSharp
        this.playNote(this.state.sounds.aSharp)
        return ""
      case "b":
        // console.log("this is the b note")
        this.pressed = this.state.sounds.bNote
        this.playNote(this.state.sounds.bNote)
        return ""
      default:
        return ""
   }
 }

  recording = false
  
  startRecording = () => {
    if(this.recording === false){
      this.recording = true
      this.pressed = ""
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
    this.pressed = ""
  }

  currrentlyPlaying = false

  toggleCurrentlyPlayingOff = () => {
    this.currrentlyPlaying = false
  }

  playback = () => {
    for(let i = 0; i < this.state.loop.length; i++){
      this.currrentlyPlaying = true
      setTimeout(() => {
        console.log(this.state.loop[i])
        if(this.state.loop[i] !== ""){
          this.playNote(this.state.loop[i])
        }
        console.log(this.currrentlyPlaying)
      }, i * 50)
    }
    console.log(this.state.loop)
    // this.toggleCurrentlyPlayingOff()
  }

  componentWillUnmount(){
    this.stopRecording()
  }



  render() {
    console.log("refresh")
    console.log(this.state)
    console.log(this.pressed)
    console.log(this.state.sounds)
    return (
      <div>
        <KeyController record={this.startRecording} stopRecord={this.stopRecording} playback={this.playback}/>
        <div className="keyboard" >
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
        <button onClick={this.toggleSounds}>Switch Sound</button> 
      </div>
    )
  }
}
