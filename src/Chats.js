import React from 'react'
import './Chats.css'
import Chat from './Chat'

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="Hey! How are you ;)"
        timestamp="35 minutes ago"
        profilePic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/16/09/ellen-degeneres.jpg?w968h681"
      />
      <Chat
        name="Bill"
        message="What's up?"
        timestamp="55 minutes ago"
        profilePic="https://media.wired.com/photos/5f2c4e757055a2aa4e463797/191:100/w_2400,h_1256,c_limit/Science_BillGates_1174744356.jpg"
      />
      <Chat
        name="julianne"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://townsquare.media/site/252/files/2020/01/julianne-hough.jpg?w=980&q=75"
      />
      <Chat
        name="Sofia"
        message="Oops there he is..."
        timestamp="1 week ago"
        profilePic="https://cdn.britannica.com/65/180565-050-4932FA9F/Sofia-Vergara-Colombian.jpg"
      />
    </div>
  )
}

export default Chats
