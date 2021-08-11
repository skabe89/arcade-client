import React from 'react'

export default function Message(props) {
  return (
    <div>
      {console.log(props)}
      <h4>{props.message.userName}: {props.message.content}</h4>
      
    </div>
  )
}
