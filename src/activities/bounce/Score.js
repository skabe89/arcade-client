import React, { useState } from 'react'

export default function Score(props) {

  const [inc, setInc] = useState(0)


  return (
    <div>
      <h4>{props.score.user_name ? props.score.user_name : "Unknown Player"}: {props.score.score}</h4>
      <button onClick={() => setInc(inc + parseInt(props.inc))} >{inc}</button>
    </div>
  )
}
