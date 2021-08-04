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
      {props.messageOption ? <button onClick={() => {props.messageOption()}}>Open Message Board</button> : null}
      <Link to={props.option.link}>{props.option.text}</Link>
      {console.log(props)}
    </div>
  )
}
