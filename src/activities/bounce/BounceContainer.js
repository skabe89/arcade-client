import React, { Component } from 'react'
import Bounce from './Bounce'
import Score from './Score'
import { connect } from 'react-redux'
import { submitScore } from '/home/skabe/Development/code/Module_5/arcade/arcade-client/src/actions/index.js'
import '/home/skabe/Development/code/Module_5/arcade/arcade-client/src/App.css'

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
      // this.sendScoresToRedux()
      this.dispatchScore()
      this.setState({canSendScore: false})
    }
  }

  // sendScoresToRedux = () => {
  //   let score = {
  //       game: "Bounce",
  //       gameId: 1,
  //       score: this.state.score
  //   } 
  //   // this.props.addScore(score)
  // }

  dispatchScore = () => {
    let params = {
      game: "Bounce",
      gameId: 1,
      userId: this.props.user.id,
      score: this.state.score
    }
    
    this.props.submitScore(params)
    console.log("inside bounce container")
  }

  sortedScores = () => {
    return this.props.scores.sort((a, b) => b.score - a.score)
  }

  renderScores = () => {
    return this.sortedScores().map((score) => <Score score={score}/>)
  }
  
  
  render() {
    // console.log(this.state)
    // console.log(this.props)
    console.log(this.sortedScores())
    if(this.state.time <= 0){
      return(
      <div className="tv-frame">
      <div className="tv-div">
        <div>
        <h1>Bounce</h1>
        {this.state.score > 0 ? <h1>Your Score: {this.state.score}</h1> : ""} 
        <button onClick={this.addTime}>Start Game</button>
        <div className="scroll">
          <h1>High Scores</h1>
          {this.renderScores()}
        </div>
        </div>
      </div>
      </div>
     


      )
    }
    else{
    return (
      <div className="tv-frame">
      <div className="tv-div">
      <div>
        {this.state.time > 0 ? <h3>Time: {this.state.time} </h3> : ""}
        <h3>Score: {this.state.score}</h3>

        {this.state.time > 0 ?  <Bounce score={this.state.score} addPoint={this.addPoint} countDown={this.countDown} time={this.state.time}/> : "" }
        <button onClick={this.addTime}>count</button>
      </div>
      </div>
      </div>

    )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user,
    scores: state.scores
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return { 
//     addScore: (score) => dispatch({ type: "ADD_SCORE", payload: score,
//     // submitScore: (score) => dispatch(submitScore(score))
//     })
//   }
// }

// score object ex: {user: "user.name", game: "bounce", score: this.state.score}}
export default connect(mapStateToProps, { submitScore })(BounceContainer)
