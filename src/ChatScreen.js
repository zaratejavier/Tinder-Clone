import React, { useState } from 'react'
import "./ChatScreen.css"
import { Avatar } from '@material-ui/core'

const ChatScreen = () => {
  const [input, setInput] = useState('') // this will keep track of what we are typing in the input field
  const [messages, setMessages] = useState([
    {
      name: 'Ellen DEl',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/16/09/ellen-degeneres.jpg?w968h681',
      message: "What's up?"
    },
    {
      name: "Ellen",
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/16/09/ellen-degeneres.jpg?w968h681',
      message: "How's it going!"
    },
    {
      message: "Hey how are you Ellen?"
    }
  ])

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }])
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen_timeStamp">YOU MATCHED WITH ELLEN ON 10/25/20</p>
      {messages.map((message) => (
        message.name ? (
        <div className="chatScreen_message"> 
          <Avatar
            className="chatScreen_image"
            alt={message.name}
            src={message.image}
          />
          <p className="chatScreen_text">{message.message}</p>
        </div>
        ) :
          (
            <div className="chatScreen_message">
              <p className="chatScreen_textUser">{message.message}</p>
            </div>
          )
      ))}
      
        <form className="chatScreen_input">
        <input
          value={input} // the value will be the same as the input state
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
          className="chatScreen_inputField"
        />
        <button onClick={handleSend} type="submit" className="chatScreen_inputButton">Send</button>
        </form>
      </div>
  )
}

export default ChatScreen
