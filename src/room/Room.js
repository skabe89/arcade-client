import React, { Component } from 'react'
import './Room.css'
import Tile from './Tile'
import MenuScreen from './MenuScreen'
import pong from './characters/pong.gif'
import piano from './characters/piano.gif'

export default class Room extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     playerx: 1,
  //     playery: 1,
  //     direction: "down"
  //   }
  // }

  _isMounted = false

  state = {
    playerx: 1,
    playery: 1,
    direction: "down"
  }

  componentDidMount(){
    this._isMounted = true
    window.addEventListener('keydown', (e) => {
      console.log(this.state.direction)
      switch(e.key){
        case "w":
          if(this.state.playery < 4){
            this.setState({playery: this.state.playery + 1, direction: "up"})
          }
          break
        case "s":
          if(this.state.playery > 1){
            this.setState({playery: this.state.playery - 1, direction: "down"})
          }
          break
        case "d":
          if(this.state.playerx < 10){
            this.setState({playerx: this.state.playerx + 1, direction: "right"})
          }
          break
        case "a":
          if(this.state.playerx > 1){
            this.setState({playerx: this.state.playerx - 1, direction: "left"})
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

  laserOption = {
    name: "Laser Time!",
    link: '/board',
    text: 'Play Laser Time!'
  }

  slapOption = {
    name: "Spectacular Slap Sisters!",
    link: '/arcade',
    text: 'Under Construction, try again later!'
  }

  componentWillUnmount(){
    this._isMounted = false
  }



  render() {
    return (
      <div className="tileContainer">
        {this.playerPosition() === "5-4" ? <MenuScreen option={this.slapOption}/> : ""}
        {this.playerPosition() === "3-4" ? <MenuScreen option={ this.laserOption }/> : ""}
        {this.playerPosition() === "1-3" ? <MenuScreen option={ this.keyboardOption } /> : ""}
        <Tile tile={"1-4"} playerPosition={this.playerPosition()} />
        <Tile tile={"2-4"} playerPosition={this.playerPosition()} />
        <Tile tile={"3-4"} playerPosition={this.playerPosition()} image={pong}/>
        <Tile tile={"4-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"5-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"6-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"7-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"8-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"9-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"10-4"} playerPosition={this.playerPosition()}/>
        <Tile tile={"1-3"} playerPosition={this.playerPosition()} image={piano}/>
        <Tile tile={"2-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"3-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"4-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"5-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"6-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"7-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"8-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"9-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"10-3"} playerPosition={this.playerPosition()}/>
        <Tile tile={"1-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"2-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"3-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"4-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"5-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"6-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"7-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"8-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"9-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"10-2"} playerPosition={this.playerPosition()}/>
        <Tile tile={"1-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"2-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"3-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"4-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"5-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"6-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"7-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"8-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"9-1"} playerPosition={this.playerPosition()}/>
        <Tile tile={"10-1"} playerPosition={this.playerPosition()}/>
      </div>
    )
  }
}
