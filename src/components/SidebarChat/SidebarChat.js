import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const SidebarChat = ({id, chatName}) => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>Last Message sent...</p>
        <small>Time Stamp</small>
      </div>
    </div>
  )
}

export default SidebarChat
