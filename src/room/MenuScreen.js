import React from 'react'
import { Link } from "react-router-dom";

export default function MenuScreen(props) {


  return (
    <div className='menu'>
      <h1> {props.option.name} </h1>
    
      <Link to={props.option.link}>{props.option.text}</Link>
    </div>
  )
}
