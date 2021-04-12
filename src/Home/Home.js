import React, { Component } from 'react'
import Form from './Form'
import {BrowerRouter, Link} from "react-router-dom";
import { connect } from 'react-redux'
import '/home/skabe/Development/code/Module_5/arcade/arcade-client/src/App.css'

class Home extends Component {

  render(){

  
  return (
    <div className="tv-frame">
    <div className="tv-div">
      <div style={{padding: "30px"}}>
        <h1> This is the Home Page, a quick rundown of the app and a welcome will be here </h1>
        <h1> A character select will also be held here (stretch goal)</h1>
        { Object.keys(this.props.user).length === 0 ? <div> <h1>Please Enter Your Name</h1> <Form /></div> : <h1><Link to="/room">Go To Aracde</Link></h1> }
      </div>
    </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
