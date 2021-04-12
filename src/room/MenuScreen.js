import React from 'react'
import { Link } from "react-router-dom";

export default function MenuScreen(props) {


  console.log(props)
  return (
    <div className='menu'>
      <br/>
      {props.option.user ? <h2>Hi there {props.option.user}!</h2> : ""}
      <br/>
      <h3> {props.option.name} </h3>
      <br/>
      <div>
      <h5>{props.option.instructions}</h5>
      </div>
      <br/>
      <Link to={props.option.link}>{props.option.text}</Link>
    </div>
  )
}
