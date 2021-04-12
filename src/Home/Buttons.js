import React from 'react'
import {Link} from 'react-router-dom'

export default function Buttons() {
  return (
    <div className="button-container">
      <Link to="/room"><div className="arcade-button"/></Link>
      <Link to="/keyboard"><div className="arcade-button2"/></Link>
      <Link to="/bounce"><div className="arcade-button3"/></Link>
    </div>
  )
}
