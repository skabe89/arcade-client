import React, { Component } from 'react'
// import { addMovie } from '../actions'
import { connect } from 'react-redux'

class Form extends Component {

  state = {
    name: "",
    character: "defalult character"
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    this.props.setName(this.state.name)
    // console.log(this.state)
  }

  resetName = () => {
    this.setState({name: ""})
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name" > Name </label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
          </div>
            <input type="submit" value="Confirm Name" />
        </form>
        <button onClick={ this.resetName }>Reset Name to ""</button>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setName: (name) => dispatch({type: "SET_NAME", payload: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
