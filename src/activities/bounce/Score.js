import React, { useState } from 'react'

export default function Score(props) {


  return (
    <div>
      <h4>{props.score.user_name ? props.score.user_name : "Unknown Player"}: {props.score.score}</h4>
    </div>
  )
}
