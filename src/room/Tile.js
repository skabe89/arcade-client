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
    // console.log(this.props)
    if(this.renderPlayer()){
      return (
        <div className="tile" id="character"><img src={slug}/></div>
      )
    }
    else if(this.props.image){
      return(
        <div className="tile" ><img src={this.props.image}/></div>
      )
    }
    else{
      return (
        <div className="tile" >{this.props.tile} </div>
      )
    }
  }
}
