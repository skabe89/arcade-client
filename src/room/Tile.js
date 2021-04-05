import React, { Component } from 'react'
import './Room.css'

export default class Tile extends Component {
  
  renderPlayer = () => {
    if(this.props.playerPosition === this.props.tile){
      return true
    }
  }
  
  
  render() {
    // console.log(this.props)
    if(this.renderPlayer()){
      return (
        <div className="tile" style={{backgroundColor: "blue"}}>{this.props.tile} </div>
      )
    }
    else{
      return (
        <div className="tile" >{this.props.tile} </div>
      )
    }
  }
}