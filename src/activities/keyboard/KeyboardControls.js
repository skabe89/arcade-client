import React, { Component } from 'react'

export default class KeyboardControls extends Component {

  handleRecord = () => {
    this.props.record()
  }

  handlePlayback = () => {
    this.props.playback()
  }

  handleStopRecord = () => {
    this.props.stopRecord()
  }

  render() {
    return (
      <div className="KeyController">
        <div className="recordB" onClick={this.handleRecord}/>
        <div className="stopRecord" onClick={this.handleStopRecord} />
        <div className="playback" onClick={this.handlePlayback}>PLAY</div>
      </div>
    )
  }
}
