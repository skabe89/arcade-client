import React, { Component } from 'react'
// import KeyController from './KeyboardControls'
import BlackKey from './BlackKey'
import Key from './Key'
import Buttons from '../../Home/Buttons.js'
import './Keyboard.css'
import '../../App.css'
import BassPluck from './sounds/bassPluck'
import Piano from './sounds/piano'
import { connect } from 'react-redux'
import { submitThemeSong } from "../../actions/index.js"



class KeyboardContainer extends Component {

state = {
  loop: "",
  soundStyle: "bass",
  sounds: BassPluck()
}



pressed = ""
pressedInteger = 24

changeSound = () => {
  console.log(this.state)
  this.state.soundStyle === "bass" ? this.setState({soundStyle: "piano", sounds: Piano()}) : this.setState({soundStyle: "bass", sounds: BassPluck()})
}


playNote(note){
  note.play()
}

playNoteInteger(integer){
  this.state.sounds[integer].play()
}


 keyPress = (note) => {
   switch(note){
      case "c":
        this.pressedInteger = 0
        this.playNoteInteger(0)
        break;
      case "cSharp":
        console.log("this is the cSharp note")
        this.pressedInteger = 1
        this.playNoteInteger(1)
        return ""
      case "d":
        this.pressedInteger = 2
        this.playNoteInteger(2)
        return ""
      case "dSharp":
        this.pressedInteger = 3
        this.playNoteInteger(3)
        return ""
      case "e":
        this.pressedInteger = 4
        this.playNoteInteger(4)
        return ""
      case "f":
        this.pressedInteger = 5
        this.playNoteInteger(5)
        return ""
      case "fSharp":
        this.pressedInteger = 6
        this.playNoteInteger(6)
        return ""
      case "g":
        this.pressedInteger = 7
        this.playNoteInteger(7)
        return ""
      case "gSharp":
        this.pressedInteger = 8
        this.playNoteInteger(8)
        return ""
      case "a":
        this.pressedInteger = 9
        this.playNoteInteger(9)
        return ""
      case "aSharp":
        this.pressedInteger = 10
        this.playNoteInteger(10)
        return ""
      case "b":
        this.pressedInteger = 11
        this.playNoteInteger(11)
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
      this.pressedInteger = 24
      let recordLoop = []

      this.intervalId = setInterval(() => {
        if(recordLoop.length === 100){
          this.stopRecording()
        }
        console.log(this.pressedInteger)
        // recordLoop.push(this.pressed)
        recordLoop.push(this.pressedInteger)
        this.pressed = ""
        this.pressedInteger = 24
        console.log(recordLoop)
      }, 50)

   
      console.log(recordLoop)
     
      this.setState({loop: recordLoop})
      this.recording = false
    }
  }


  stopRecording = () => {
    clearInterval(this.intervalId)
    this.pressed = ""
    this.pressedInteger = 24
  }

  currrentlyPlaying = false

  toggleCurrentlyPlayingOff = () => {
    this.currrentlyPlaying = false
  }


  playback = () => {
    if(this.state.loop.length > 2){
      console.log(this.state.loop)
    let revived = this.state.loop
    for(let i = 0; i < revived.length; i++){
      this.currrentlyPlaying = true
      setTimeout(() => {
        if(revived[i] !== 24){
          this.playNoteInteger(revived[i])
        }
      }, i * 50)
    }
    }
  }

  componentWillUnmount(){
    this.stopRecording()
  }

  setAsTheme = () => {
    if(this.state.loop.length > 2){
    let params = {
      id: this.props.user.id,
      song: this.stringedLoop(this.state.loop)
    }
    this.props.submitThemeSong(params)
    console.log(this.stringedLoop(this.state.loop))
    }
  }


  stringedLoop = (stringloop) => {
    console.log(stringloop)
    let text = "";
    stringloop.forEach(i => text = text +`${i} `)
    return text
  }

  bringBackLoop = (loop) => {
    console.log("in bring back loop")
    let arr = loop.split(" ")
    let arrInt = arr.map(i => parseInt(i))
    arrInt.pop()
    return arrInt
  }

  playFromProps = () => {
    if(this.props.user.song.length > 2){
    let revived = this.bringBackLoop(this.props.user.song)
    for(let i = 0; i < revived.length; i++){
      this.currrentlyPlaying = true
      setTimeout(() => {
        console.log(revived[i])
        if(revived[i] !== 24){
          this.playNoteInteger(revived[i])
          console.log(revived[i])
        }
      }, i * 50)
    }
  }
  }



  render() {
    console.log(this.state)
    
    return (
      <div className="tv-frame">
      <div className="tv-div">
      <div className="push" />
        <button onClick={this.startRecording}>Record</button>
        <button onClick={this.playback}>Play Back Recording</button>
        <br/>
        <br/>
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
        <br/>
        <br/>
        <button onClick={this.playFromProps}>Play Current Chime</button>
        <button onClick={this.setAsTheme}>Set recording as your Theme Chime</button> 
        <button onClick={this.changeSound}>Change Sounds</button> 
      </div>
        <Buttons />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    themeSong: state.themeSong
  }
}

export default connect(mapStateToProps, {submitThemeSong})(KeyboardContainer)
