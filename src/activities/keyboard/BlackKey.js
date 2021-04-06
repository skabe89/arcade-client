import React from 'react'

const BlackKey = (props) => {
  
  let handleClick = () => {
    props.keyPress(props.note)
  }

  return (
      <div onClick={handleClick} className={props.note}></div>
  )
}

export default BlackKey