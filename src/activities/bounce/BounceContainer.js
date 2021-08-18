import React, { Component } from 'react'
import Bounce from './Bounce'
import Score from './Score'
import { connect } from 'react-redux'
import { submitScore } from '../../actions/index.js'
import '../../App.css'
import Buttons from '../../Home/Buttons'

class BounceContainer extends Component {
  
  state = {
    score: -1,
    time: 0,
    canSendScore: true,
  }

  addPoint = () => {
    this.setState({score: this.state.score + 1})
    if(this.state.score > this.sortedScores()[0].score){
      console.log("High Score!!!")
    }
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
      this.dispatchScore()
      this.setState({canSendScore: false})
    }
  }

  dispatchScore = () => {
    let params = {
      game: "Bounce",
      gameId: 1,
      userId: this.props.user.id,
      score: this.state.score
    }
    console.log("a")
    this.props.submitScore(params)
    console.log("b")
  }

  sortedScores = () => {
    return this.props.scores.sort((a, b) => b.score - a.score)
  }

  renderScores = () => {
    return this.sortedScores().map((score, index) => <Score key={index} score={score} inc={this.state.inc}/>)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  
  
  render() {
    if(this.state.time <= 0){
      return (
        <div className="tv-frame">
          <div className="tv-div">
            <div>
              <br />
              <h2>Bounce!!!</h2>
              {this.state.score > 0 ? <h2>Your Score: {this.state.score}</h2> : ""}
              <button onClick={this.addTime}>Start Game</button>
              <div className="scroll">
                <h2>High Scores</h2>
                {this.renderScores()}
              </div>
            </div>
          </div>
          <Buttons />
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

              {this.state.time > 0 ? <Bounce score={this.state.score} addPoint={this.addPoint} countDown={this.countDown} time={this.state.time} /> : ""}

            </div>
          </div>
          <Buttons />
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


export default connect(mapStateToProps, { submitScore })(BounceContainer)
