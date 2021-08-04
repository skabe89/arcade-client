import React from 'react'

export default function Message(props) {
  return (
    <div>
      {console.log(props)}
      <h4>{props.message.userName}: {props.message.note}</h4>
      
    </div>
  )
}
