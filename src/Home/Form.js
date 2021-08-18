import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScores } from '../actions/index'
import { findOrCreateUser } from '../actions/index.js'

class Form extends Component {

  state = {
    name: "",
    character: "defalult character"
  }

  componentDidMount(){
    this.props.getScores()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    this.props.getUser(this.state.name)
  }

  resetName = () => {
    this.setState({name: ""})
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
          </div>
            <br/>
            <input type="submit" value="SUBMIT NAME" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    name: state.name,
    scores: state.scores
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setName: (name) => dispatch({type: "SET_NAME", payload: name}),
    getScores: () => dispatch(getScores()),
    getUser: (name) => dispatch(findOrCreateUser(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
