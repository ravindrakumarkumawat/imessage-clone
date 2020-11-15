import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined, Search } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SidebarChat from '../SidebarChat/SidebarChat'
import './Sidebar.css'
import { selectUser } from '../../features/userSlice'
import db, { auth } from '../../firebase'

const Sidebar = () => {
  const user = useSelector(selectUser)
  const [chats, setChats] = useState([])

  useEffect(() =>{
    db.collection('chats').onSnapshot((snapshot) => {
      setChats(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data(),
      })))
    })
  }, [])

  const addChat = () => {
    const chatName = prompt('Please Enter a chat name')
    if (chatName) {
      db.collection('chats').add({
        chatName: chatName,
      })
    }
  }

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
          <RateReviewOutlined 
            onClick={addChat}/>
        </IconButton>

        
      </div>

      <div className='sidebar__chats'>
        {chats.map(({id, data: {chatName}}) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
