import React, { Component } from 'react'
import './Room.css'
import slug from './characters/slug.gif'


export default class Tile extends Component {
  
  renderPlayer = () => {
    if(this.props.playerPosition === this.props.tile){
      return true
    }
  }
  
  
  render() {
    
    if(this.props.image){
      return(
        <div className="tile" style={{backgroundImage: `url(${this.props.image})`}}></div>
      )
    }
    else if(this.renderPlayer()){
      return (
        <div className="tile" id="character"><img src={this.props.character}/></div>
      )
    }
    else{
      return (
        <div className="tile" ></div>
      )
    }
  }
}
