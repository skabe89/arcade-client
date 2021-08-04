import React, {useState} from 'react'
import Message from './Message'

export default function MessageBoard(props) {

  const [messages, setMessages] = useState([
    {userName: "Slug", note: "wow!"}, 
    {userName: "Frog", note: "cool!"}
  ])

  const mapMessages = () => {
    return messages.map(m => <Message message={m}/>)
  }

  return (
    <div className="menu">
      <h2>Messages</h2>
      {mapMessages()}
      <button onClick={() => props.messageOption()}>Close Messages</button>
    </div>
  )
}
