import React, { Component } from 'react'
import './Room.css'
import Tile from './Tile'
import MenuScreen from './MenuScreen'
import pong from './characters/pong.gif'
import piano from './characters/piano.png'
import bounce from './characters/bounce.gif'
import upArrow from './characters/upArrow-90x90.png'
import leftArrow from './characters/leftArrow.png'
import downArrow from './characters/downArrow.png'
import rightArrow from './characters/rightArrow.png'
import leftDesk from './characters/ldesk.png'
import rightDesk from './characters/rdesk.png'
import Enoch from './characters/enochRevised.gif'
import BassPluck from '../activities/keyboard/sounds/bassPluck.js'
import { connect } from 'react-redux'

class Room extends Component {

  _isMounted = false

  state = {
    playerx: 5,
    playery: 1,
    direction: "up",
    characterImage: upArrow,
    sounds: BassPluck()
  }

  //will end up being 'this.state.downchacter' ex...redux.state{downcharacter: blahblahvlah.png}
  characterDirections = {
    up: upArrow,
    left: leftArrow,
    down: downArrow,
    right: rightArrow
  }

  componentDidMount(){
    this._isMounted = true
   
    this.playback()
  
    window.addEventListener('keydown', (e) => {
      switch(e.key){
        case "w":
          if(this.playerPosition() === "4-3" || this.playerPosition() === "5-3" || this.playerPosition() === "6-3"){
            this.setState({direction: "up"})
          }
          else if(this.state.playery < 4){
            this.setState({playery: this.state.playery + 1, direction: "up", characterImage: upArrow})//reduxstore.upCharacter
          }
          break
        case "s":
          if(this.state.playery > 1){
            this.setState({playery: this.state.playery - 1, direction: "down", characterImage: downArrow})
          }
          break
        case "d":
          if(this.playerPosition() === "3-4"){
            this.setState({direction: "right"})
          }
          else if(this.state.playerx < 9){
            this.setState({playerx: this.state.playerx + 1, direction: "right", characterImage: rightArrow})
          }
          break
        case "a":
          if(this.playerPosition() === "7-4"){
            this.setState({direction: "left"})
          }
          else if(this.state.playerx > 1){
            this.setState({playerx: this.state.playerx - 1, direction: "left", characterImage: leftArrow})
          }
          break
        default:
          return ""
      }
    })
  }



  playerPosition = () => {
    return `${this.state.playerx}-${this.state.playery}`
  }

  keyboardOption = {
    name: "KeyBoard",
    link: "/keyboard",
    text: "Play Your KeyBoard!"
  }

  bounceOption = {
    name: "Bounce!!!",
    link: '/bounce',
    text: 'Play Bounce!'
  }

  EnochOption = {
    name: "talk to enoch",
    link: '/arcade',
    text: 'Under Construction, try again later!',
    user: this.props.name
  }

  componentWillUnmount(){
    this._isMounted = false
    window.removeEventListener('keydown', (e) => {})
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
      <div className="tileContainer">
        {this.playerPosition() === "5-3" ? <MenuScreen option={this.EnochOption}/> : ""}
        {this.playerPosition() === "3-4" ? <MenuScreen option={ this.bounceOption }/> : ""}
        {this.playerPosition() === "1-3" ? <MenuScreen option={ this.keyboardOption } /> : ""}
        <Tile tile={"1-4, decor"} playerPosition={this.playerPosition()} image={""}/>
        <Tile tile={"2-4"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-4"} playerPosition={this.playerPosition()} image={bounce}/>
        <Tile tile={"4-4, desk"} playerPosition={this.playerPosition()} image={leftDesk} character={this.state.characterImage}/>
        <Tile tile={"5-4, desk"} playerPosition={this.playerPosition()} image={Enoch} character={this.state.characterImage}/>
        <Tile tile={"6-4, desk"} playerPosition={this.playerPosition()} image={rightDesk} character={this.state.characterImage}/>
        <Tile tile={"7-4"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-4"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-4, decor"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        {/* <Tile tile={"10-4, "} playerPosition={this.playerPosition()} character={this.state.characterImage}/> */}
        <Tile tile={"1-3"} playerPosition={this.playerPosition()} image={piano}/>
        <Tile tile={"2-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"4-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"5-3"} playerPosition={this.playerPosition()} character={this.state.characterImage} />
        <Tile tile={"6-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"7-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        {/* <Tile tile={"10-3"} playerPosition={this.playerPosition()} character={this.state.characterImage}/> */}
        <Tile tile={"1-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"2-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"4-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"5-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"6-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"7-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        {/* <Tile tile={"10-2"} playerPosition={this.playerPosition()} character={this.state.characterImage}/> */}
        <Tile tile={"1-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"2-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"3-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"4-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"5-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"6-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"7-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"8-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        <Tile tile={"9-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/>
        {/* <Tile tile={"10-1"} playerPosition={this.playerPosition()} character={this.state.characterImage}/> */}
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
