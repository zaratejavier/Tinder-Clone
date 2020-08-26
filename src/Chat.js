import React from 'react'
import { Avatar } from '@material-ui/core'
import './Chat.css'

const Chat = ({name, message, profilePic, timestamp}) => {
  return (
    <div className="chat">
      <Avatar className="chat_image" src={profilePic} />
      <div className="chat_details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat_timestamp"> {timestamp}</p>
    </div>
  )
}

export default Chat
