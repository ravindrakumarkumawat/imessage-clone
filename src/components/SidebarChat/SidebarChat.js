import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>Channel Name</h3>
        <p>Last Message sent...</p>
        <small>Time Stamp</small>
      </div>
    </div>
  )
}

export default SidebarChat
