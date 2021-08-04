import React, {useState} from 'react'
import Message from './Message'

export default function MessageBoard() {

  const [messages, setMessages] = useState([
    {userName: "Slug", note: "wow!"}, 
    {userName: "Frog", note: "cool!"}
  ])

  const mapMessages = () => {
    return messages.map(m => <Message message={m}/>)
  }

  return (
    <div className="menu">
      {mapMessages()}
    </div>
  )
}
