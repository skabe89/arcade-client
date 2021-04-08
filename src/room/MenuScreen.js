import React from 'react'
import { Link } from "react-router-dom";

export default function MenuScreen(props) {


  console.log(props)
  return (
    <div className='menu'>
      {props.option.user ? <h1>Hi there {props.option.user}</h1> : ""}
      <h3> {props.option.name} </h3>
      <Link to={props.option.link}>{props.option.text}</Link>
    </div>
  )
}
