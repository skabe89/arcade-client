import React, { Component } from 'react'
import Bounce from './Bounce'
import { connect } from 'react-redux'

class BounceContainer extends Component {
  
  state = {
    score: -1,
    time: 0,
    canSendScore: true
  }

  addPoint = () => {
    this.setState({score: this.state.score + 1})
  }

  countDown = () => {
    this.setState({time: this.state.time - 1})
    this.checkIfGameOver()
  }

  addTime = () => {
    this.setState({score: -1, time: 30, canSendScore: true})
  }

  checkIfGameOver = () => {
    if(this.state.score > 0 && this.state.time <= 1 && this.state.canSendScore === true){
      console.log("Game Over")
      console.log(this.state.score)
      this.sendScoresToRedux()
      this.setState({canSendScore: false})
    }
  }

  sendScoresToRedux = () => {
    let score = {
        game: "Bounce",
        gameId: 1,
        score: this.state.score
    } 
    this.props.addScore(score)
  }
  
  
  render() {
    // console.log(this.state)
    console.log(this.props)
    console.log(this.state.canSendScore)
    if(this.state.time <= 0){
      return(
        <div>
        <h1>Bounce</h1>
        {this.state.score > 0 ? <h1>Your Score: {this.state.score}</h1> : ""} 
        <button onClick={this.addTime}>Start Game</button>
      </div>
      )
    }
    else{
    return (
      <div>
        <h1>Bounce</h1>
        {this.state.time > 0 ? <h3>Time: {this.state.time} </h3> : ""}
        <h3>Score: {this.state.score}</h3>

        {this.state.time > 0 ?  <Bounce score={this.state.score} addPoint={this.addPoint} countDown={this.countDown} time={this.state.time}/> : "" }
        <button onClick={this.addTime}>count</button>
      </div>
    )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    userName: state.name,
    scores: state.scores
  }
}

let mapDispatchToProps = (dispatch) => {
  return { addScore: (score) => dispatch({ type: "ADD_BOUNCE_SCORE", payload: score })}
}
// score object ex: {user: "user.name", game: "bounce", score: this.state.score}}
export default connect(mapStateToProps, mapDispatchToProps)(BounceContainer)
