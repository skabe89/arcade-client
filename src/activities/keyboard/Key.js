import React from 'react'

const Key = (props) => {

  let handleClick = () => {
    props.keyPress(props.note)
  }

  return (
      <div onClick={handleClick} className={props.note}></div>
  )
}

export default Key