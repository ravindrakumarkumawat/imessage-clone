import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined, Search } from '@material-ui/icons'
import React from 'react'
import SidebarChat from '../SidebarChat/SidebarChat'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='sidebar__header'>
        <Avatar className='sidebar__avatar'/>
        <div className='sidebar__input'>
          <Search />
          <input placeholder='Search' />
        </div>
        <IconButton variant="outlined" className='sidebar__inputButton'>
          <RateReviewOutlined />
        </IconButton>

        
      </div>

      <div className='sidebar__chats'>
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
