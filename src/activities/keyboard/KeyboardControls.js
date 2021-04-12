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
        {/* <div className="recordB" onClick={this.handleRecord}/>
        <div className="stopRecord" onClick={this.handleStopRecord} />
        <div className="playback" onClick={this.handlePlayback}>PLAY</div> */}
        <button onClick={this.startRecording}>Record</button>
        <button onClick={this.stopRecording}>Stop</button>
        <button onClick={this.playbackInteger}>Play Back Recording</button>
        {/* <button onClick={this.toggleSounds}>Switch Sound</button> */}
        <button onClick={this.playFromProps}>Play Current Chime</button>
        <button onClick={this.setAsTheme}>Set as your Theme Chime</button> 
      </div>
    )
  }
}
