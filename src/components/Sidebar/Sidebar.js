import { Avatar } from '@material-ui/core'
import { RateReviewOutlined, Search } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__input'>
          <Search />
          <input placeholder='Search' />
        </div>
        <RateReviewOutlined />
      </div>

      <div className='sidebar__chats'>
      
      </div>
    </div>
  )
}

export default Sidebar
