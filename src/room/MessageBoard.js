import React,  {useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Message from './Message'
import { getMessages } from '../actions'

export default function MessageBoard(props) {

  const [messages, setMessages] = useState([
    {userName: "Slug", note: "wow!"}, 
    {userName: "Frog", note: "cool!"}
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages())
  }, [])  

  const fetchMessages = () => {
    fetch('http://localhost:3001/messages')
    .then(resp => resp.json())
    .then(data => setMessages(data))
  }

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
