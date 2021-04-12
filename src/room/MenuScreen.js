import React from 'react'
import { Link } from "react-router-dom";

export default function MenuScreen(props) {


  console.log(props)
  return (
    <div className='menu'>
      <br/>
      {props.option.user ? <h1>Hi there {props.option.user}</h1> : ""}
      <br/>
      <h3> {props.option.name} </h3>
      <br/>
      <h4>This is where instructions will be</h4>
      <br/>
      <Link to={props.option.link}>{props.option.text}</Link>
    </div>
  )
}
