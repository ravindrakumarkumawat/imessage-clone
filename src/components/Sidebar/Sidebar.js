import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined, Search } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import SidebarChat from '../SidebarChat/SidebarChat'
import './Sidebar.css'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

const Sidebar = () => {
  const user = useSelector(selectUser)

  return (
    <div className="sidebar">
      <div className='sidebar__header'>
        <Avatar 
          src={user.photo} 
          onClick={() => auth.signOut()}
          className='sidebar__avatar' />
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
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
