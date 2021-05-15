import React, { Component } from 'react'
import './Room.css'
import '/home/skabe/Development/code/Module_5/arcade/arcade-client/src/App.css'
import Buttons from '/home/skabe/Development/code/Module_5/arcade/arcade-client/src/Home/Buttons.js'
import Tile from './Tile'
import MenuScreen from './MenuScreen'
import piano from './characters/piano.png'
import upperCouch from './characters/upperCouch (4).png'
import lowerCouch from './characters/lowerCouch (2).png'
import upperCouchSlug from './characters/upperCouchSlug.gif'
import lowerCouchSlug from './characters/lowerCouchSlug.png'
import bounce from './characters/bounce.gif'
import outoforder from './characters/outoforder.png'
import outoforder2 from './characters/outoforder2.png'
import upArrow from './characters/upArrow-90x90.png'
import leftDesk from './characters/ldesk.png'
import rightDesk from './characters/rdesk.png'
import Enoch from './characters/enochRevised.gif'
import Tree from './characters/palmtree.png'
import slugUp from './characters/slugUp.gif'
import BassPluck from '../activities/keyboard/sounds/bassPluck.js'
import { connect } from 'react-redux'
import characters from '/home/skabe/Development/code/Module_5/arcade/arcade-client/src/room/characters/characters.js'

class Room extends Component {

  _isMounted = false

  state = {
    playerx: 5,
    playery: 1,
    direction: "up",
    characterImage: slugUp,
    sounds: BassPluck(),
    character: 0
  }

  characterDirections =  {
    up: characters[this.state.character].up,
    left: characters[this.state.character].left,
    down: characters[this.state.character].down,
    right: characters[this.state.character].right,
  }

  componentDidMount(){
    this._isMounted = true
    this.playback()
    
    window.addEventListener('keydown', this.checkKeyStroke)
  }
  

  checkKeyStroke = (e) => {
    switch(e.key){
      case "w":
        if(this.playerPosition() === "4-3" || this.playerPosition() === "5-3" || this.playerPosition() === "6-3" || this.playerPosition() === "9-3" || this.playerPosition() === "7-3" || this.playerPosition() === "8-3" || this.playerPosition() === "1-3"){
          this.setState({direction: "up"})
        }
        else if(this.state.playery < 4){
          this.setState({playery: this.state.playery + 1, direction: "up", characterImage: this.characterDirections.up})//reduxstore.upCharacter
        }
        break
      case "s":
        if(this.state.playery > 1){
          this.setState({playery: this.state.playery - 1, direction: "down", characterImage: this.characterDirections.down})
        }
        break
      case "d":
        if(this.playerPosition() === "3-4"){
          this.setState({direction: "right"})
        }
        else if(this.state.playerx < 9){
          this.setState({playerx: this.state.playerx + 1, direction: "right", characterImage: this.characterDirections.right})
        }
        break
      case "a":
        if(this.playerPosition() === "7-4" || this.playerPosition() === "2-4"){
          this.setState({direction: "left"})
        }
        else if(this.state.playerx > 1){
          this.setState({playerx: this.state.playerx - 1, direction: "left", characterImage: this.characterDirections.left})
        }
        break
      default:
        return ""
    }
  }



  playerPosition = () => {
    return `${this.state.playerx}-${this.state.playery}`
  }

  keyboardOption = {
    name: "KeyBoard",
    link: "/keyboard",
    instructions: "Click on the keys and record to set your welcome chime!",
    text: "Play Your KeyBoard!"
  }

  bounceOption = {
    name: "Bounce!!!",
    link: '/bounce',
    instructions: "Use the direction keys to collect as many white squares as you can!",
    text: 'Play Bounce!!!'
    
  }

  EnochOption = {
    name: "Please excuse our mess while we work!",
    link: "",
    instructions: "",
    text: '',
    user: this.props.user.name
  }


  componentWillUnmount(){
    this._isMounted = false
    window.removeEventListener('keydown', this.checkKeyStroke)
    console.log("unmounted")
  }

  //themeSong logic
  playNote(integer){
    this.state.sounds[integer].play()
  }

  playback = () => {
    if(this.props.user.song.length > 2){
    let newLoop = this.bringBackLoop(this.props.user.song)
    console.log(newLoop)
    for(let i = 0; i < newLoop.length; i++){
      setTimeout(() => {
        console.log(newLoop[i])
        if(newLoop[i] !== 24){
          this.playNote(newLoop[i])
        }
      }, i * 50) 
    }
    }
  }

  bringBackLoop = (loop) => {
    console.log("in bring back loop")
    let arr = loop.split(" ")
    let arrInt = arr.map(i => parseInt(i))
    arrInt.pop()
    return arrInt
  }



  render() {
    console.log(this.props)
    return (
      <div className="tv-frame">
      <div className="tv-div">
      <div className="block">
      <div className="tileContainer">
        {this.playerPosition() === "5-3" ? <MenuScreen option={this.EnochOption}/> : ""}
        {this.playerPosition() === "3-4" ? <MenuScreen option={ this.bounceOption }/> : ""}
        {this.playerPosition() === "1-3" ? <MenuScreen option={ this.keyboardOption } /> : ""}
        <Tile tile={"1-4, decor"} playerPosition={this.playerPosition()} image={Tree}/>
        <Tile tile={"2-4"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-4"} playerPosition={this.playerPosition()} image={bounce} character={bounce}/>
        <Tile tile={"4-4, desk"} playerPosition={this.playerPosition()} image={leftDesk} character={this.state.characterImage}/>
        <Tile tile={"5-4, desk"} playerPosition={this.playerPosition()} image={Enoch} character={this.state.characterImage}/>
        <Tile tile={"6-4, desk"} playerPosition={this.playerPosition()} image={rightDesk} character={this.state.characterImage}/>
        <Tile tile={"7-4"} playerPosition={this.playerPosition()}  image={outoforder2} character={this.state.characterImage}/>
        <Tile tile={"8-4"} playerPosition={this.playerPosition()} image={outoforder} character={this.state.characterImage}/>
        <Tile tile={"9-4, decor"} playerPosition={this.playerPosition()} image={Tree} character={this.state.characterImage}/>
        <Tile tile={"1-3"} playerPosition={this.playerPosition()} image={piano} character={piano}/>
        <Tile tile={"2-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"4-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"5-3"} playerPosition={this.playerPosition()} character={this.state.characterImage} />
        <Tile tile={"6-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"7-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-3"} playerPosition={this.playerPosition()} character={this.state.characterImage} image={this.playerPosition() === "9-2" || this.playerPosition() === '9-3' ? upperCouchSlug : upperCouch}/>
        <Tile tile={"1-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"2-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"4-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"5-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"6-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"7-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-2"} playerPosition={this.playerPosition()} character={this.state.characterImage} image={this.playerPosition() === "9-2" || this.playerPosition() === '9-3' ? lowerCouchSlug : lowerCouch}/>
        <Tile tile={"1-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"2-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"4-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"5-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"6-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"7-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
      </div>
      </div>
      </div>
        <Buttons />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    scores: state.scores
  }
}

export default connect(mapStateToProps)(Room)
